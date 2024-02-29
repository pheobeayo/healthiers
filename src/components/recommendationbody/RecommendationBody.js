import React from "react";
import recommend from "../../assets/recommendation-img.png";
import { Link } from "react-router-dom";




const RecommendationBody = () => {

    return (
        <section className='mt-20'>
            <div class="grid grid-cols-2 gap-7 mt-8">
                <div class='mt-16'>
                    <ul className='flex mx-4 gap-20 mt-4' >
                        <li className='hidden md:inline-block text-white font-semibold text-sm'><Link to='/'>Recommendation</Link></li>
                        <li className='hidden md:inline-block text-white font-semibold text-sm'><Link to='/about'>Monitor your health</Link></li>
                        <li className='hidden md:inline-block text-white font-semibold text-sm'><Link to='/sign-up'>My NFTs</Link></li>
                        <li className='hidden md:inline-block text-white font-semibold text-sm'><Link to='/sign-in'>Settings</Link></li>


                    </ul>
                    <img src={recommend} alt="recommend" class='mx-4 mt-4' />
                    <h3 class='text-white text-xl mx-4 font-bold'>Diagonsis: <span>Diabetics</span>
                        <br />Patients Name: Edward Parker
                        <br />Age: 89
                        <br />Gender: Male</h3>
                </div>
                <div class='w-3/4 mt-16'>
                    <ul className='text-white mt-4'>
                        <li><span class='font-bold'>Nutrition:</span> Adopt a balanced and individual meal plan that alligns with <br></br>
                            your lifestyle. Focus on whole, nutrient-dense foods,and  <br></br>
                            monitor carbonhydrate intake to manage blood sugar levels
                            <br />effectively to improve insulin sensitivity</li>
                        <li><span class='font-bold'>Exercise:</span> Engage in regular physical activity and overall <br />
                            cardiovascular health. Incorporate a mix of aerobic exercises,<br />
                            strength training, and flexibility exercises into his routine.</li>
                        <li><span class='font-bold'>Medication Management:</span> Stay delight in taking insulin and <br />
                            Levethyroxine as prescribed by a healthcare provider. Regularly <br />
                            monitor blood sugar levels and thyroid function to ensure proper
                            <br /> dosage Adjustments if necessary</li>
                        <li><span class='font-bold'>Sleep Hygiene:</span> Priotize quality sleep by establishing a consistent <br />
                            sleep schedule and creating a relaxing bedtime routine. Aim   <br />
                            for 7-9 hours of sleep each night to support overall health <br />
                            and diabetes management</li>
                        <li><span class='font-bold'>Stress Mangement:</span> Practice stress reduction techniques, such as <br></br>
                            mindfulness, deep breathing exercise, or yoga to better <br />
                            manage stress levels and its impact on bood sugar fluctuations.</li>
                        <li><span class='font-bold'>Regular Checkups:</span> Schedule regular checkups with a healthcare team <br />
                            to monitor diabetes control,thyroid function and overall health.</li>
                        <li><span class='font-bold'>Support Network:</span> Seek support from family, friends or diabetes <br></br>
                            support groups to share experiences, knowledge and <br />
                            encouragement through out your journey</li>
                        <li><span class='font-bold'>Continues Learning:</span> Stay informed about the latest diabetes <br>
                        </br>management strategies, Advancement and research to make <br />
                            well informed decisions about his health</li>
                        <li><span class='font-bold'>Celebrate Progress:</span> Acknowledge and celebrate small victories in <br>
                        </br>diabetes management which can serve as poerful motivators
                            <br /> in maintaining a positive outlook on his health journey</li>
                        <p>Its is however important to anyone with diabetes, to work closely with  <br></br>
                            qualified healthcare professionals to receive personalized medical <br></br>
                            advice and create a comprehensive diabetes management plan <br />
                            that best suits his specific needs and health status.</p>
                    </ul>
                </div>
            </div>
        </section>
    );
};





export default RecommendationBody;