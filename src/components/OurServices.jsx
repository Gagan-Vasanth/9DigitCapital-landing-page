import React from 'react'
import CardWrapper from '../common/CardWrapper'
import service1 from '../assets/services/service-1.png';
import service2 from '../assets/services/service-2.png';
import service3 from '../assets/services/service-3.png';
import service4 from '../assets/services/service-4.png';
import service5 from '../assets/services/service-5.png';
import service6 from '../assets/services/service-6.png';


const ServiceCard = ({ backgroundColor, fontColor, title, description, icon, children}) => {
    return <div className='serviceCard' style={{ backgroundColor: backgroundColor, color: fontColor}}>
        <p className='service-card-title'>{title}</p>
        <p className='service-card-desc'>{description}</p>
        {children}
    </div>
}

const serviceCards = () => {
    const cards = [
        {
            id: 1,
            title: 'Diverse Fund Options',
            description: `Discover mutual funds tailored to your needs. Whether you're pursuing growth with equity funds, seeking stability with fixed-income options, or balancing both, we've got you covered. Build your financial future with confidence and take control of your investments today!`,
            backgroundColor: 'rgba(25, 87, 34, 0.6)',
            fontColor: '#fff',
            icon: service1
        },
        {
            id: 2,
            title: 'Robust Research and Analysis',
            description: `Empower your financial journey with advanced tools. Track market trends, assess fund performance, and understand economic shifts. Access expert insights and reports to make confident, informed investment decisions, staying ahead in an ever-changing financial landscape.`,
            backgroundColor: '#fff',
            icon: service2,
            fontColor: 'rgba(111, 153, 84, 0.7)',
            iconColor: 'rgba(111, 153, 84, 0.7)'
        },
        {
            id: 3,
            title: 'User-Friendly Interface',
            description: `Investing made effortless. Our platform offers a seamless experience—explore funds, track performance, and manage your portfolio with confidence. Combining simplicity and sophistication, we empower you to take control of your investments with ease and clarity.`,
            backgroundColor: 'rgba(25, 87, 34, 0.6)',
            iconColor: '#fff',
            fontColor: '#fff',
            icon: service3
        },
        {
            id: 4,
            title: 'Customized Portfolio Building',
            description: `Design an investment portfolio that aligns with your financial goals and risk preferences. Our platform makes customizing your strategy simple, giving you the control to invest confidently and build a portfolio tailored to your unique needs and objectives.`,
            backgroundColor: '#fff',
            fontColor: 'rgba(111, 153, 84, 0.7)',
            iconColor: 'rgba(111, 153, 84, 0.7)',
            icon: service4
        },
        {
            id: 5,
            title: 'Risk Assessment',
            description: `We provide intuitive tools and questionnaires to assess your risk tolerance, ensuring you select funds that align with your financial goals. Empower yourself with the insights needed to make investment choices that reflect your unique risk preferences and objectives.`,
            backgroundColor: 'rgba(25, 87, 34, 0.6)',
            fontColor: '#fff',
            icon: service5
        },
        {
            id: 6,
            title: 'Informed Decision',
            description: `Knowledge is key to smart investing. Explore our rich library of articles, webinars, and tutorials to enhance your understanding of mutual funds, market trends, and investment strategies, empowering you to make informed decisions and optimize your financial growth.`,
            backgroundColor: '#fff',
            fontColor: 'rgba(111, 153, 84, 0.7)',
            iconColor: 'rgba(111, 153, 84, 0.7)',
            icon: service6
        }
    ];
    return (
        <div className='serviceCardContainer'>
            {cards.map(card => (
                <ServiceCard key={card.id} backgroundColor={card.backgroundColor} fontColor={card.fontColor} title={card.title} description={card.description} iconColor={card.iconColor}><img src={card.icon} className='service-card-icon' /></ServiceCard>
            ))}
        </div>
    )
}

const OurServices = () => {

  return (
    <section id='services'>
        <CardWrapper>
            <h2 className='service-header'>Our Services</h2>
            <p className='service-desc-heading'>Why opt for us?</p>
            <div className='service-desc'>
                With 9Digit Capital, we are dedicated to empowering you to achieve your financial goals while ensuring long-term security and peace of mind.  
            </div>
        </CardWrapper>
        <CardWrapper>
            {serviceCards()}
        </CardWrapper>
    </section>
  )
}

export default OurServices