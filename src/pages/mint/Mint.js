import React from "react";
import arrow from "../../assets/arrow.png";
import { useNavigate } from "react-router-dom";







const Mint = () => {
    const navigate = useNavigate();

    const routeToNextPage = () => {
        navigate("/mint-generate")
    };



    return (
        <main className="bg-[#102428] w-screen">
            <div class="grid grid-cols-2 gap-7 mt-44">
                <div className="mx-8">
                    <form>
                        <div class="mb-1 mt-8">
                            <label class="block text-white text-sm font-bold mb-2" for="age">
                                Age
                            </label>
                            <input class="bg-[#E0EDF0] border-[#CCF1FA] border-2 rounded w-full py-2 px-3 text-[#fff] leading-tight focus:outline-none focus:shadow-outline" id="age" type="age" placeholder="Enter how old you are" required></input>
                        </div>
                        <div class="mb-1">
                            <label class="block text-white text-sm font-bold mb-2" for="gender">
                                Gender
                            </label>
                            <input class="bg-[#E0EDF0] border-[#CCF1FA] border-2 rounded w-full py-2 px-3 text-[#08191B] leading-tight focus:outline-none focus:shadow-outline" id="gender" type="text" placeholder="Provide your gender in this input field" required></input>
                        </div>
                        <div class="mb-1">
                            <label class="block text-white text-sm font-bold mb-2" for="height">
                                Height
                            </label>
                            <input class="bg-[#E0EDF0] border-[#CCF1FA] border-2 rounded w-full py-2 px-3 text-[#08191B] leading-tight focus:outline-none focus:shadow-outline" id="height" type="number" placeholder="How tall are you?" required></input>
                        </div>

                        <div class="mb-1">
                            <label class="block text-white text-sm font-bold mb-2" for="lifeStyle">
                                Lifestyle
                            </label>
                            <input class="bg-[#E0EDF0] border-[#CCF1FA] border-2 rounded w-full py-2 px-3 text-[#08191B] leading-tight focus:outline-none focus:shadow-outline" id="lifeStyle" type="text" placeholder="How would you describe your physical activity level?" required></input>
                        </div>

                        <div class="mb-1">
                            <label class="block text-white text-sm font-bold mb-2" for="weight">
                                Weight
                            </label>
                            <input class="bg-[#E0EDF0] border-[#CCF1FA] border-2 rounded w-full py-2 px-3 text-[#08191B] leading-tight focus:outline-none focus:shadow-outline" id="weight" type="number" placeholder="How much do you weigh?" required></input>
                        </div>

                        <div class="mb-1">
                            <label class="block text-white text-sm font-bold mb-2" for="sleepPattern">
                                Sleep Pattern
                            </label>
                            <input class="bg-[#E0EDF0] border-[#CCF1FA] border-2 rounded w-full py-2 px-3 text-[#08191B] leading-tight focus:outline-none focus:shadow-outline" id="sleepPattern" type="text" placeholder="How would you describe your sleep patterns and quality?" required></input>
                        </div>
                        <div class="mb-1">
                            <label class="block text-white text-sm font-bold mb-2" for="stressLevel">
                                Stress Level
                            </label>
                            <input class="bg-[#E0EDF0] border-[#CCF1FA] border-2 rounded w-full py-2 px-3 text-[#08191B] leading-tight focus:outline-none focus:shadow-outline" id="stressLevel" type="number" placeholder="On a scale of 1 to 10, how would you rate your stress level" required></input>
                        </div>


                        <button class="bg-[#00B9E5] hover:bg-[#00B9E5] text-[#fff] font-semibold py-2  border-[#00B9E5] w-full h-10 rounded" handleClick={routeToNextPage}>Continue </button>




                    </form>
                </div>

                <div className="bg-[#102428] border-2 border-white rounded mt-8 w-3/4">

                    <h3 class='text-white text-3xl font-medium mx-4 mt-4'> Create your NFTs  in just 4 steps</h3>
                    <img src={arrow} alt="arrow" class='mx-8' />
                    <h5 class='text-white text-xl font-medium mx-4'>Create your NFTs seamlessly following the steps below</h5>

                    <p  class='text-white text-xl font-light mx-4'>
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






export default Mint;