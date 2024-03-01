import React from "react";
import arrow from "../../assets/arrow.png";
import diabetes from "../../assets/diabetes.png";
import hypertension from "../../assets/hypertension.png";
import cardiovascular from "../../assets/cardiovascular.png";
import mental from "../../assets/mental.png";
import obesity from "../../assets/obesity.png";
import chronic from "../../assets/chronic.png";
import allergies from "../../assets/allergies.png";
import sleep from "../../assets/sleep.png";
import chronicpain from "../../assets/chronicpain.png";







const What = () => {


    return (
        <section className='bg-[#102428]'>

            <h2 class='text-white text-3xl mx-96 font-bold px-8 mt-8'>What can we help you with today?</h2>
            <img src={arrow} alt="arrow" class='mx-96 px-40'/>
            <h6 class='text-white text-xl mx-96 font-bold px-8'>Let’s help you optimize your well-being</h6>

            <div className="grid-cols-4 gap-4 md:flex md:flex-row mx-8 mt-8">
                <img src={diabetes} alt="diabetes" />
                <img src={hypertension} alt="hypertension" />
                <img src={cardiovascular} alt="cardiovascular" />
            </div>
            <div className="grid-cols-4 gap-4 md:flex md:flex-row mx-8 mt-2">
                <img src={mental} alt="mental" />
                <img src={obesity} alt="obesity" />
                <img src={chronic} alt="chronic" />
            </div>
            <div className="grid-cols-4 gap-4 md:flex md:flex-row mx-8 mt-2">
                <img src={allergies} alt="allergies" />
                <img src={sleep} alt="sleep" />
                <img src={chronicpain} alt="chronicpain" />

            </div>


        </section>


    )





}


export default What;