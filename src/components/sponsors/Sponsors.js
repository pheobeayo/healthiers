import React from "react";
import arrow from "../../assets/arrow.png";
import polk from "../../assets/polk.png";
import astar from "../../assets/astar.png";
import zeit from "../../assets/zeit.png";
import unique from "../../assets/unique.png";
import polimec from "../../assets/polimec.png";
import moon from "../../assets/moon.png";
import api from "../../assets/api.png";
import oak from "../../assets/oak.png";
import bilfrost from "../../assets/bilfrost.png";






const Sponsor = () => {


    return (
        <section className='bg-[#102428]'>

            <h2 class='text-white text-3xl mx-96 font-bold md:px-10 mt-8'>Our Sponsors and Supporters</h2>
            <img src={arrow} alt="arrow" class='mx-96 px-48' />
            <h6 class='text-white text-xl mx-96 font-bold'>Meet our well renowned and recognised partners</h6>

            <div className="grid-cols-4 gap-28 md:flex md:flex-row mx-8 mt-8">
                <img src={polk} alt="polk" />
                <img src={astar} alt="astar" />
                <img src={zeit} alt="zeit" />
                <img src={unique} alt="unique" />
            </div>
            <div className="grid-cols-4 gap-28 md:flex md:flex-row mx-8 mt-2">
                <img src={polimec} alt="polimec" />
                <img src={moon} alt="moon" />
                <img src={api} alt="api" />
                <img src={oak} alt="oak" />
            </div>
            <div className='mx-96 px-28'>            
                <img src={bilfrost} alt='bilfrost' />
            </div>   


        </section>



    )





}


export default Sponsor;