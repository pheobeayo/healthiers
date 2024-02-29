// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "./NFT.sol";

contract Healthiers {
    using SafeMath for uint256;

    uint256 public tokenIdCounter;

    enum DietPreference { Vegan, Vegetarian, Omnivore, Other }
    enum Allergies { None, Dairy, Gluten, Nut, Shellfish, Other }
    enum NftVisibility { Restricted, NonRestricted }
    enum Status { Active, Claimed, Expired }

    struct HealthData {
        bytes32 medicalHistory;
        bytes32 medication;
        bytes32 symptoms;
        DietPreference dietPreference;
        Allergies allergies;
        bytes32 goals;
        bool wantPublicNFT;
        NftVisibility nftVisibility;
        bytes32 personalizedRecommendation;
        Status status;
    }

    event NftMinted(address indexed recipient, uint256 tokenId);
    event UpdateTrackRecord(address indexed user, string updateMessage);
    event FeePaid(address indexed payer, uint256 amount);
    event NftClaimed(address indexed user, uint256 tokenId);

    address public owner;
    uint256 public mintingFee;

    mapping(address => HealthData) public healthDataMap;
    mapping(address => HealthData[]) public userHealthDataHistory;
    mapping(uint256 => address) private nftOwners;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the contract owner can call this function");
        _;
    }

    modifier onlyOwnerOrNftOwner(uint256 tokenId) {
        require(
            msg.sender == owner || nftOwners[tokenId] == msg.sender,
            "Only the contract owner or NFT owner can call this function"
        );
        _;
    }

    modifier onlyActiveHealthcarePlan() {
        require(healthDataMap[msg.sender].status == Status.Active, "Healthcare plan is not active");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function mintNftPlan(
        bytes32 _medicalHistory,
        bytes32 _medication,
        bytes32 _symptoms,
        DietPreference _dietPreference,
        Allergies _allergies,
        bytes32 _goals,
        bool _wantPublicNFT,
        NftVisibility _nftVisibility
    ) external onlyOwner {

        bytes32 recommendations = generateRecommendations(
            _medicalHistory,
            _medication,
            _symptoms,
            _dietPreference,
            _allergies,
            _goals
        );

        HealthData memory newHealthData = HealthData({
            medicalHistory: _medicalHistory,
            medication: _medication,
            symptoms: _symptoms,
            dietPreference: _dietPreference,
            allergies: _allergies,
            goals: _goals,
            wantPublicNFT: _wantPublicNFT,
            nftVisibility: _nftVisibility,
            personalizedRecommendation: recommendations,
            status: Status.Active
        });

        healthDataMap[msg.sender] = newHealthData;
        userHealthDataHistory[msg.sender].push(newHealthData);

        tokenIdCounter = tokenIdCounter.add(1);
        uint256 tokenId = tokenIdCounter;
        nftOwners[tokenId] = msg.sender;
        emit NftMinted(msg.sender, tokenId);
    }

    function updateHealthDataAndPlan(
        uint256 tokenId,
        bytes32 _medicalHistory,
        bytes32 _medication,
        bytes32 _symptoms,
        DietPreference _dietPreference,
        Allergies _allergies,
        bytes32 _goals
    ) external onlyOwnerOrNftOwner(tokenId) onlyActiveHealthcarePlan {
        bytes32 recommendations = generateRecommendations(
            _medicalHistory,
            _medication,
            _symptoms,
            _dietPreference,
            _allergies,
            _goals
        );

        healthDataMap[msg.sender] = HealthData({
            medicalHistory: _medicalHistory,
            medication: _medication,
            symptoms: _symptoms,
            dietPreference: _dietPreference,
            allergies: _allergies,
            goals: _goals,
            wantPublicNFT: healthDataMap[msg.sender].wantPublicNFT,
            nftVisibility: healthDataMap[msg.sender].nftVisibility,
            personalizedRecommendation: recommendations,
            status: Status.Active // Reset status to Active after update
        });

        emit UpdateTrackRecord(msg.sender, "Health data and healthcare plan updated");

        userHealthDataHistory[msg.sender].push(healthDataMap[msg.sender]);
    }

    function claimNft(uint256 tokenId) external onlyActiveHealthcarePlan onlyOwnerOrNftOwner(tokenId) {
        healthDataMap[msg.sender].status = Status.Claimed;

        // Perform NFT transfer to the owner's address
        address nftContractAddress = msg.sender; 
        IERC721 nftContract = IERC721(nftContractAddress);
        address ownerAddress = nftOwners[tokenId];
        nftContract.safeTransferFrom(address(this), ownerAddress, tokenId);

        // Emit events, perform logging, etc.
        emit NftClaimed(ownerAddress, tokenId);
    }

    function generateRecommendations(
        bytes32 _medicalHistory,
        bytes32 _medication,
        bytes32 _symptoms,
        DietPreference _dietPreference,
        Allergies _allergies,
        bytes32 _goals
    ) internal pure returns (bytes32) {
        return
            bytes32(
                abi.encode(
                    "Healthcare Plan - Medical History: ",
                    _medicalHistory,
                    " Medication: ",
                    _medication,
                    " Symptoms: ",
                    _symptoms,
                    " Diet Preference: ",
                    dietPreferenceToString(_dietPreference),
                    " Allergies: ",
                    allergiesToString(_allergies),
                    " Goals: ",
                    _goals
                )
            );
    }

    function dietPreferenceToString(DietPreference preference) internal pure returns (bytes32) {
        if (preference == DietPreference.Vegan) return "Vegan";
        if (preference == DietPreference.Vegetarian) return "Vegetarian";
        if (preference == DietPreference.Omnivore) return "Omnivore";
        return "Other";
    }

    function allergiesToString(Allergies allergy) internal pure returns (bytes32) {
        if (allergy == Allergies.None) return "None";
        if (allergy == Allergies.Dairy) return "Dairy";
        if (allergy == Allergies.Gluten) return "Gluten";
        if (allergy == Allergies.Nut) return "Nut";
        if (allergy == Allergies.Shellfish) return "Shellfish";
        return "Other";
    }

    function getPersonalizedHealthcarePlan() external view returns (bytes32) {
        return healthDataMap[msg.sender].personalizedRecommendation;
    }

    function getUserHealthDataHistory() external view returns (HealthData[] memory) {
        return userHealthDataHistory[msg.sender];
    }
}