import React from "react";
import arrow from "../../assets/arrow.png";
import weight from "../../assets/weight.png";
import wellness from "../../assets/wellness.png";
import diabetescontrol from "../../assets/diabetescontrol.png";
import overcoming from "../../assets/overcoming.png";
import sleepdisorders from "../../assets/sleepdisorders.png";
import journey from "../../assets/journey.png";






const Minted = () => {


    return (
        <section className='bg-[#102428]'>
       
               <h2 class='text-white text-4xl md:mx-96 font-bold md:px-28 mt-16'>Minted NFTS</h2>
                    <img src={arrow} alt="arrow" class='mx-96 px-48'/>
                    <h6 class='text-white text-xl mx-96 font-bold'>Please note that these NFTs are made public by the owners</h6>
                
                    <div className="grid-cols-4 gap-4 md:flex md:flex-row mx-8 mt-8">
               <img src={weight} alt="weight" />
                    <img src={wellness} alt="wellness" />
                    <img src={diabetescontrol} alt="diabetescontrol" />
                </div>
                <div className="grid-cols-4 gap-4 md:flex md:flex-row mx-8 mt-2">
                    <img src={overcoming} alt="overcoming" />
                    <img src={sleepdisorders} alt="sleepdisorders" />
                    <img src={journey} alt="journey" />
                </div>
               
          
        </section>



    )





}


export default Minted;