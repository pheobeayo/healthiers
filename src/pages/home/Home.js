import React from "react";
import { Link } from "react-router-dom";
import researcher from "../../assets/researcher.png";
import KeyFeatures from "../../components/key-features/Key";
import What from "../../components/what/What";
import Minted from "../../components/minted-nfts/Minted";
import Sponsor from "../../components/sponsors/Sponsors";
import SubFooter from "../../components/sub-footer/Subfooter";









const Home = () => {


        return (
                <main class='bg-[#102428]'>


                        <div class="grid grid-cols-1 md:flex md:flex-row gap-2 mt-24">
                                <div>
                                        <h1 class="text-[50px] md:text-[50px] font-bold capitalize  text-white mx-10 mt-24 ">Experience the future
                                                <br></br>of  healthcare with
                                                <br></br> our revolutionary
                                                <br></br>AI-generated product</h1>
                                        <h3 class="text-white font-medium text-lg mx-10">Introducing NFT-powered personalized healthcare plans,
                                                <br></br>tailored exclusively to your unique health profile.</h3>
                                        <div className="flex item-centre gap-8  mx-8 mt-8">
                                                <Link to='/mint' style={{ textDecoration: 'none', color: 'white' }}><button class="bg-[#00B9E5] hover:bg-[#102428] text-white font-semibold py-2  border-[#00B9E5] border-2 w-28 h-10 rounded">Mint NFTs</button></Link>
                                                <Link><button class="bg-[#102428] hover:bg-[#00B9E5] text-[#00B9E5] font-semibold py-2  border-[#102428] w-28 h-10 rounded">Learn More </button></Link>
                                        </div>
                                        <button class="bg-[#102428] hover:bg-[#00B9E5] text-[#00B9E5] font-semibold py-2  border-[#00B9E5] border-2 w-96 h-20 rounded mt-20 mx-8">   20k+ <p>Users</p> 11k+ Minted NFTs</button>
                                </div>

                                <div><img src={researcher} alt='researcher' className='mt-24' />

                                       
                                </div>
                        </div>

                        <KeyFeatures />
                        <What />
                        <Minted />
                        <Sponsor />
                        <SubFooter />
                </main>


        )



}


export default Home;