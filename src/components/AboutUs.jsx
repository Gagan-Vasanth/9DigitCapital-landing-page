import React from 'react'
import CardWrapper from '../common/CardWrapper'
import whatWeDoLogo from '../assets/whatWeDo.png'
import Mission from '../assets/mission.png';
import Vision from '../assets/vision.png';

const MissionAndVission = ({ icon, heading, description}) => {
    return (
        <div className='visionContainer'>
           <div className='visionIcon'>
                {icon}
            </div> 
           <div className='visionContent'>
                <h1>{heading}</h1>
                <div>{description}</div>
           </div>
        </div>
    )
}
 
const AboutUs = () => {
  return (
    <section id='about-us'>
        <CardWrapper>
        <h2 className='service-header'>About Us</h2>
            <div className='service-desc'>
                At 9Digit Capital, an AMFI Registered Mutual Fund Distributor, we're dedicated to your journey toward financial freedom. Our expert team provides personalized solutions and guidance to navigate mutual funds, helping turn your goals into reality for a secure, prosperous future.
            </div>
        </CardWrapper>
        <CardWrapper>
            <div className='flex flex-row items-center justify-center gap-24 flex-wrap mt-6 mb-6 missionVisionContainer'>
                <MissionAndVission heading={'Mission'} description={'To be the leading catalyst for financial empowerment, simplifying mutual fund investments and fostering prosperity for everyone'} icon={<img src={Mission} className='vision-icon-img'/>}/>
                <MissionAndVission heading={'Vision'} description={'Empowering clients with transparent mutual fund services, committed to integrity, financial education, ensuring long-term financial success.'} icon={<img src={Vision} className='vision-icon-img'/>}/>
            </div>
        </CardWrapper>

        <section className='whatWeDoContainer' id='our-thoughts'>
            <div className='whatWeDo-left'>
                <img src={whatWeDoLogo} />
                <h2 className='whatWeDo-header'>What We Do</h2>
            </div>
            <div className='whatWeDo-right'>
                <div>
                    <p>At <span className='company-name'>9digit Capital</span>, an AMFI-registered mutual fund distributor, we offer:</p>
                    <p className='points'><b><span>.</span> Expert Investment Options:</b> Backed by rigorous research and analysis.</p>
                    <p className='points'><b><span>.</span> Bangalore Headquarters: </b>Leveraging cutting-edge technology in India's financial hub.</p>
                    <p className='points'><b><span>.</span> Fresh Perspectives: </b>Established in 2023, we bring innovative solutions to investing.</p>
                    <p className='points'><b><span>.</span> Tailored Guidance: </b>Helping clients create personalized financial visions.</p>
                    <p className='points'><b><span>.</span> Diverse Opportunities:</b> Access to mutual funds, fixed deposits, bonds, and more.</p>
                    <p className='mt-4'>Join us at 9digit Capital and embark on your journey to financial success!</p>
                </div>
            </div>
        </section>
    </section>
  )
}

export default AboutUs