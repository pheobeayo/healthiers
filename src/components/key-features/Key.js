import React from 'react';
import arrow from "../../assets/arrow.png";
import key from "../../assets/key.png";






const Key = () => {


    return (
        <section>
            <div className='bg-[#102428] '>

                <div className="container mx-auto px-2 sm:px-[10px] py-[10px]">

                    <h2 className="text-white text-3xl font-bold leading-10 mt-8 md:mx-96 md:px-8">
                        Key features of Healthiers?
                    </h2>
                    <img src={arrow} alt="arrow" class='mx-96 px-36' />
                    <h6 className="text-white text-xl font-bold leading-10 md:mx-96 md:px-8">Why you should choose Healthiers</h6>
                    <div className='bg-[#102428] grid-cols-4 gap-2 md:flex md:flex-row'>
                        <div
                            class="mt-6 flex flex-col rounded-lg bg-[#102428] sm:shrink-0 sm:grow sm:basis-0 border-white border-2">
                            <img
                                src={key}
                                alt="key"
                                class='w-10 mx-36 mt-2' />
                            <h3 className="font-bold text-white text-lg mx-28">
                                Personalized </h3>
                                <h4 className="font-bold text-white text-lg mx-20">Recommendations </h4>
                            
                            <p className="font-normal  text-white text-sm mx-8 mb-2">
                                Leverage the power of AI algorithms to 
                                <br></br>receive custom-tailored healthcare 
                                <br></br>plans,specifically designed to 
                                <br></br>address your individual needs and 
                                <br></br>goals. Say goodbye to generic advice 
                                <br></br>and embrace a personalized approach to 
                                <br />optimize your well-being.

                            </p>
                        </div>

                        <div
                            class="mt-6 flex flex-col rounded-lg bg-[#102428] sm:shrink-0 sm:grow sm:basis-0 border-white border-2">

                            <img
                                src={key}
                                alt="key"
                                class='w-10 mx-28 mt-2'
                            />
                            <h3 className="font-bold text-white text-lg mx-10">
                                Comprehensive Health</h3>
                            <h4 className="font-bold text-white text-lg mx-20">Analysis</h4>

                            <p className="font-normal text-justify text-white text-sm mx-8 mb-2">
                                Gain deeper insights into your
                                <br></br>health with our state-of-the-
                                <br></br>art data analysis. Our
                                <br></br>advanced algorithms analyze
                                <br></br>your health data, such as vital
                                <br></br>signs, activity levels, and
                                <br></br>medical history, to create a
                                <br></br>holistic understanding of your
                                <br></br> well-being.
                            </p>
                        </div>
                        <div
                            class="mt-6 flex flex-col rounded-lg bg-[#102428] sm:shrink-0 sm:grow sm:basis-0 border-white border-2">
                            <img
                                src={key}
                                alt="key"
                                class='w-10 mx-28 mt-2'
                            />

                            <h3 className="font-bold text-white text-lg mx-16">
                                Secure NFTs
                            </h3>
                            <p className="font-normal text-white text-sm mx-8 mb-2">
                                Embrace the future of digital
                                <br></br>ownership through Non-
                                <br></br>Fungible Tokens (NFTs). Your
                                <br></br>personalized healthcare plan
                                <br></br>is encapsulated within an NFT,
                                <br></br>ensuring the utmost security
                                <br></br>and privacy of your sensitive
                                <br></br>health information.
                            </p>

                        </div>
                        <div
                            class="mt-6 flex flex-col rounded-lg bg-[#102428] sm:shrink-0 sm:grow sm:basis-0 border-white border-2">
                            <img
                                src={key}
                                alt="key"
                                class='w-10 mx-28 mt-2'
                            />

                            <h3 className="font-bold text-white text-lg mx-8">
                                Real-time Monitoring
                            </h3>
                            <p className="font-normal  text-white text-sm mx-8 mb-2">
                                Stay informed and in control of
                                <br></br>your health journey with
                                <br></br>real-time monitoring.
                                <br></br>Receive instant updates
                                <br></br>the latest and recommendations
                                <br></br>based on data, empowering you
                                <br></br>to make informed decisions
                                <br />about your well-being.

                            </p>

                        </div>


                    </div>


                </div>
            </div>
        </section>

    )


}


export default Key;



