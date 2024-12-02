import React, { useEffect, useState } from 'react'
import CardWrapper from '../common/CardWrapper'
import process1 from '../assets/process/process-1.png';
import process2 from '../assets/process/process-2.png';
import process3 from '../assets/process/process-3.png';
import process4 from '../assets/process/process-4.png';
import process5 from '../assets/process/process-5.png';
import process6 from '../assets/process/process-6.png';


const ProcessStep = ({ cardDetails, index, children }) => {
    const [inView, setInView] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setInView(true);
              observer.unobserve(entry.target); // Stop observing once the element is in view
            } else {
                setInView(false);
            }
          });
        },
        { threshold: 0.5 } // Trigger when 50% of the element is in view
      );
  
      const element = document.querySelector(`#step-${cardDetails.step}`);
      observer.observe(element);
  
      return () => {
        observer.disconnect(); // Cleanup observer on component unmount
      };
    }, [cardDetails.step]);
  
    return (
        <div className='relative processStepContainer'>
            <div id={`step-${cardDetails.step}`}
                className={`processStep`}>
            <div className="flex flex-row items-center justify-between mt-1 mb-4">
            <h1>{cardDetails.title}</h1>
            {children}
            </div>
            <div className="processStep-desc">{cardDetails.description}</div>
        </div>
        <div className={`processStep-number ${inView ? 'animate' : ''}`} style={{ animationDelay: `.${index+1}s`}}>{cardDetails.step}</div>
        </div>
      
    );
  };

const entireProcess = () => {
    const steps = [{
        step: '01',
        title: 'Create a Secure Account',
        description: `Create a secure account on our platform today. We prioritize your privacy with advanced encryption, ensuring the highest level of data protection and security throughout your financial journey with us.`,
        icon: process1
    },
    {
        step: '02',
        title: 'Complete Your Risk Profile',
        description: `Fill a quick risk profiling questionnaire to assess your risk tolerance and investment preferences. This allows us to recommend funds that align with your financial goals.`,
        icon: process2
    },
    {
        step: '03',
        title: 'Explore Fund Options',
        description: `Explore our curated selection of mutual funds or use our intelligent recommendation engine to find options tailored to your unique investment profile and goals.`,
        icon: process3
    },
    {
        step: '04',
        title: 'Invest with Confidence',
        description: `Once you've chosen your funds, invest securely through our platform. Monitor your investments in real-time and receive timely market updates to stay informed and make confident decisions.`,
        icon: process4
    },
    {
        step: '05',
        title: 'Get Support When You Need It',
        description: 'Our dedicated support team is ready to assist with any queries or concerns, whether you need help navigating the platform or have investment-related questions.',
        icon: process5
    },
    {
        step: '06',
        title: 'Manage Your Investments',
        description: 'Easily Buy, sell, or switch mutual fund units effortlessly through our website, ensuring a seamless and secure transaction experience every time.',
        icon: process6
    }]

    return (
        <div className='entireProcess'>
            {steps.map((step, index) => <ProcessStep cardDetails={step} index={index}>
                <img src={step.icon} alt="step icon" style={{ width: '60px', height: '60px'}}/>
            </ProcessStep>)}
        </div>
    )
}

const Process = () => {
  return (
    <section id='process'>
        <CardWrapper>
            <h2 className='service-header'>Process</h2>
            <div className='service-desc'>
                Step into a world of clarity and support with 9Digit! We're here to elevate your financial journey through expert insights and resources. Together, let's unlock your investment potential and build a future of success.
            </div>
        </CardWrapper>
        <CardWrapper>
            {entireProcess()}
        </CardWrapper>
    </section>
  )
}

export default Process