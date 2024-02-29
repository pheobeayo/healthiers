import React  from "react";
import arrow from "../../assets/arrow.png";








const MintGenerate = () => {

  
    
        



    return (
        
        <main className="bg-[#102428] w-screen">
           <div class="grid grid-cols-2 gap-7 mt-44">
            <div  className="mx-8">
                        <form>
                            <div class="mb-1 mt-8">
                                <label class="block text-white text-sm font-bold mb-2" for="history">
                                    Medical History
                                </label>
                                <input class="bg-[#E0EDF0] border-[#CCF1FA] border-2 rounded w-full py-2 px-3 text-[#08191B] leading-tight focus:outline-none focus:shadow-outline" id="history" type="text" placeholder="Do you have any existing medical conditions?" required></input>
                            </div>
                            <div class="mb-1">
                                <label class="block text-white text-sm font-bold mb-2" for="medication">
                                    Medication
                                </label>
                                <input class="bg-[#E0EDF0] border-[#CCF1FA] border-2 rounded w-full py-2 px-3 text-[#08191B] leading-tight focus:outline-none focus:shadow-outline" id="medication" type="text" placeholder="Are you currently taking any medications? If yes, state the medication" required></input>
                            </div>
                            <div class="mb-1">
                                <label class="block text-white text-sm font-bold mb-2" for="symptoms">
                                    Symptoms
                                </label>
                                <input class="bg-[#E0EDF0] border-[#CCF1FA] border-2 rounded w-full py-2 px-3 text-[#08191B] leading-tight focus:outline-none focus:shadow-outline" id="symptoms" type="text" placeholder="State any symptoms" required></input>
                            </div>
                            <div class="mb-1">
                                <label class="block text-white text-sm font-bold mb-2" for="dietPreference">
                                    Diet Preference
                                </label>
                                <input class="bg-[#E0EDF0] border-[#CCF1FA] border-2 rounded w-full py-2 px-3 text-[#08191B] leading-tight focus:outline-none focus:shadow-outline" id="dietPreference" type="text" placeholder="Do you have any specific dietary preference or restrictions?" required></input>
                            </div>
                            <div class="mb-1">
                                <label class="block text-white text-sm font-bold mb-2" for="allergies">
                                    Allergies
                                </label>
                                <input class="bg-[#E0EDF0] border-[#CCF1FA] border-2 rounded w-full py-2 px-3 text-[#08191B] leading-tight focus:outline-none focus:shadow-outline" id="allergies" type="text" placeholder="Are you allergic to anything?" required></input>
                            </div>

                            <div class="mb-1">
                                <label class="block text-white text-sm font-bold mb-2" for="goals">
                                    Goals
                                </label>
                                <input class="bg-[#E0EDF0] border-[#CCF1FA] border-2 rounded w-full py-2 px-3 text-[#08191B] leading-tight focus:outline-none focus:shadow-outline" id="goals" type="text" placeholder="What are your primary health and wellness goals?" required></input>
                            </div>

                            <label for="Would you want your health NFT to be made public?" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Would you want your health NFT to be made public?</label>
                            <select multiple id="Would you want your health NFT to be made public?" class="bg-[#E0EDF0] border border-[#E0EDF0] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Would you want your health NFT to be made public?</option>
                                <option value="option1">Yes,make Public</option>
                                <option value="option2">No, don't make Public</option>
                            </select>

                            <label for="NFTs visibility options" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">NFTs visibility options</label>
                            <select multiple id="NFTs visibility options" class="bg-[#E0EDF0] border border-[#E0EDF0] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>NFTs visibility options</option>
                                <option value="option1">Restricted (get alert to allow usage by another)</option>
                                <option value="option2">Non-restricted (don’t notify me)</option>
                            </select>

                            <button class="bg-[#00B9E5] hover:bg-[#00B9E5] text-[#fff] font-semibold py-2  border-[#00B9E5] w-full h-10 rounded mt-4">Mint </button>



                              


                        </form>

                        </div>
                        <div className="bg-[#102428] border-2 border-white rounded mt-8 w-3/4">
                    
                                <h3 class='text-white text-3xl font-medium mx-4 mt-4'> Create your NFTs  in just 4 steps</h3>
                                <img src={arrow} alt="arrow" class='mx-8'/>
                                <h5 class='text-white text-xl font-medium mx-4'>Create your NFTs seamlessly following the steps below</h5>
                            
                            <p class='text-white text-xl font-light mx-4'>
                                1.<b style={{ color: '#80F6E8' }}>Get Started</b>: Sign up for an account and complete the
                                <br></br>simple registration process.
                                <br></br>2.<b style={{ color: '#80F6E8' }}>Mint NFTs</b>: After your registration process you can
                                <br></br>now mint your NFTs
                                <br></br>3.<b style={{ color: '#80F6E8' }}>Personalise your NFTs</b>: Fill out the form with the
                                <br></br>necessary information in the input fields to create
                                <br></br>AI-generated NFTs.
                                <br></br>4. <b style={{ color: '#80F6E8' }}>Your Masterpiece</b>: Witness the incredible
                                <br></br> results that AI has generated specifically for you.</p>
                        
                    </div>
                    </div> 
              </main>

    );
};

export default MintGenerate;
