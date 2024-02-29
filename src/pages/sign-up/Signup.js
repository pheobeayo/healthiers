import React, { useState } from "react";
import { Link } from "react-router-dom";
import arrow from "../../assets/arrow.png";
import logo from "../../assets/logo.png";
import Checkbox from "../../components/checkbox/Checkbox";







const Signup = () => {
    const [checked, setChecked] = useState(false);
    const onChange = () => {
        setChecked(!checked);
    };

    return (
        <main className="bg-[#102428] w-screen">

            <Link to='/'> <img src={logo} alt="logo" /></Link>

            <section class='w-[90%] md:w-[80%] mx-auto py-10'>
                <form class='mt-40 w-3/4 mx-28'>
                    <div>
                        <h3 class='text-white text-4xl mx-80 font-bold'>SIGN UP</h3>

                        <img src={arrow} alt="arrow" className="mx-80" />
                        <h5 class='text-white text-xl mx-80 font-bold'>New here? Let’s get you started!</h5>
                    </div>
                    <div class="mb-1">
                        <label class="block text-white text-sm font-bold mb-2" for="fullName">
                            Full Name
                        </label>
                        <input class="bg-[#E0EDF0] border-[#CCF1FA] border-2 rounded w-full py-2 px-3 text-[#fff] leading-tight focus:outline-none focus:shadow-outline" id="fullName" type="text" placeholder="E.g Naomi Roberts" required></input>
                    </div>
                    <div class="mb-1">
                        <label class="block text-white text-sm font-bold mb-2" for="emailAddress">
                            Email address
                        </label>
                        <input class="bg-[#E0EDF0] border-[#CCF1FA] border-2 rounded w-full py-2 px-3 text-[#08191B] leading-tight focus:outline-none focus:shadow-outline" id="emailAddress" type="text" placeholder="E.g Naomi Roberts" required></input>
                    </div>

                    <div class="mb-1">
                        <label class="block text-white text-sm font-bold mb-2" for="age">
                            Age
                        </label>
                        <input class="bg-[#E0EDF0] border-[#CCF1FA] border-2 rounded w-full py-2 px-3 text-[#08191B] leading-tight focus:outline-none focus:shadow-outline" id="age" type="age" placeholder="Enter your age" required></input>
                    </div>
                    <div class="mb-1">
                        <label class="block text-white text-sm font-bold mb-2" for="gender">
                            Gender
                        </label>
                        <input class="bg-[#E0EDF0] border-[#CCF1FA] border-2 rounded w-full py-2 px-3 text-[#08191B] leading-tight focus:outline-none focus:shadow-outline" id="gender" type="text" placeholder="Enter your gender" required></input>
                    </div>
                    <div class="mb-1">
                        <label class="block text-white text-sm font-bold mb-2" for="history">
                            Medical History
                        </label>
                        <input class="bg-[#E0EDF0] border-[#CCF1FA] border-2 rounded w-full py-2 px-3 text-[#08191B] leading-tight focus:outline-none focus:shadow-outline" id="history" type="text" placeholder="Do you have any medical history?" required></input>
                    </div>
                    <div class="mb-1">
                        <label class="block text-white text-sm font-bold mb-2" for="password">
                            Password
                        </label>
                        <input class="bg-[#E0EDF0] border-[#CCF1FA] border-2 rounded w-full py-2 px-3 text-[#08191B] leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="********" required></input>
                    </div>


                    <p class='text-white text-sm font-light'>Password must contain:
                        <br /> At least 8 characters
                        <br />At least one number
                        <br />At least one lowercase letter
                        <br />At least one uppercase letter</p>

                    <div class="mb-1">
                        <label class="block text-white text-sm font-bold mb-2" for="walletAddress">
                            Wallet Address
                        </label>
                        <input class="bg-[#E0EDF0] border-[#CCF1FA] border-2 rounded w-full py-2 px-3 text-[#08191B] leading-tight focus:outline-none focus:shadow-outline" id="walletAddress" type="text" placeholder="e.g 0xd914...ABED" required></input>
                    </div>
                    <div class='text-white'>
                        <Checkbox
                            id="checkbox"
                            label="By signing up you accept our Terms of Service and Privacy Policy."
                            value={checked}
                            onChange={onChange}
                        />

                        <button class="bg-[#00B9E5] hover:bg-[#00B9E5] text-[#fff] font-semibold py-2  border-[#00B9E5] w-full h-10 rounded">Sign up </button>



                        <p class='text-white mx-64 mt-8'>Already have an account? <Link to="/sign-in" style={{ textDecoration: 'none', color: '#CCF1FA' }}>Sign in</Link></p>
                    </div>
                </form>



            </section>

        </main>
    );
};

export default Signup;