
import React from "react";
import { Link } from "react-router-dom";
import arrow from "../../assets/arrow.png";
import logo from "../../assets/logo.png";








const Signin = () => {


    return (
        <main className="bg-[#102428] w-screen">

            <Link to='/'><img src={logo} alt="logo" /></Link>

            <section class='w-[90%] md:w-[80%] mx-auto py-10'>
                <form class='mt-40 w-3/4 mx-28'>

                    <h3 class='text-white text-4xl mx-80 font-bold'>SIGN IN</h3>

                    <img src={arrow} alt="arrow" className="mx-80" />
                    <h5 class='text-white text-xl mx-80 font-bold'>Welcome back!</h5>


                    <div class="mb-1">
                        <label class="block text-white text-sm font-bold mb-2" for="fullName">
                            Email address
                        </label>
                        <input class="bg-[#E0EDF0] border-[#CCF1FA] border-2 rounded w-full py-2 px-3 text-[#08191B] leading-tight focus:outline-none focus:shadow-outline" id="emailAddress" type="email" placeholder="E.g naomiroberts@gmail.com" required></input>
                    </div>
                    <div class="mb-1">
                        <label class="block text-white text-sm font-bold mb-2" for="password">
                            Password
                        </label>
                        <input class="bg-[#E0EDF0] border-[#CCF1FA] border-2 rounded w-full py-2 px-3 text-[#08191B] leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="********" required></input>
                    </div>
                    <button class="bg-[#00B9E5] hover:bg-[#00B9E5] text-[#fff] font-semibold py-2  border-[#00B9E5] w-full h-10 rounded">Sign in </button>

                    <p class='text-white mx-64 mt-8'>Already have an account? <Link to="/sign-up" style={{ textDecoration: 'none', color: '#CCF1FA' }}>Sign up</Link></p>



                </form>


            </section>

        </main>
    );
};

export default Signin;