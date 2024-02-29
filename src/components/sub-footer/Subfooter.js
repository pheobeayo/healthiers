import React from "react";
import Subscriber from "../subscribe/Subscribe";
import mediumfooter from "../../assets/mediumfooter.png";
import smallfooter from "../../assets/smallfooter.png";
import bigfooter from "../../assets/bigfooter.png";


const Subfooter = () => {
    return (
        <div className="bg-[#102428]">
            <div className="container mx-auto sm:px-[80px] pb-[100px] mt-16">
                <div class="grid grid-cols-2 gap-7">
                    <div>
                        <h2 className="text-white text-xl sm:text-3xl font-bold leading-10 mt-4">
                        Stay up to date
                        </h2>
                        <p className="text-justify pt-[10px] text-white text-xs sm:text-sm font-normal leading-5 sm:leading-7">
                        Stay informed about the latest advancements
                            <br />   in personalized healthcare plans.{" "}

                        </p>

                        <Subscriber />
                    </div>
                    <div>
                    <img src={smallfooter} alt="smallfooter" style={{ marginLeft: '-8rem', position:'absolute', zIndex:'3', marginTop:'8rem'}} />
                    <img src={mediumfooter} alt="mediumfooter" style={{transform:'translate(25%, 10%)', position:'absolute', marginTop:'2rem'}} />
                    <img src={bigfooter} alt="bigfooter"  style={{ zIndex:'1', marginLeft:'10rem'}} />
                    </div>
                </div>
            </div>
        </div>



    )
}

export default Subfooter;  