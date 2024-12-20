import React from 'react'
import BannerIcon from '../assets/9DigitBanner.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const ContactUs = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const navItemOnClickAction = (id) => {
        if(location.pathname === '/' && id === 'disclosures') {
          return navigate('/disclosure');
        } else if (location.pathname === '/' && id !== 'disclosures') {
          const scrollElement = document.getElementById(id);
                  scrollElement?.scrollIntoView({
                    behavior: 'smooth',
                  })
        } else if (location.pathname === '/disclosure' && id !== 'disclosures') {
          navigate('/') 
          const scrollElement = document.getElementById(id);
                  scrollElement?.scrollIntoView({
                    behavior: 'smooth',
                  })
        }
    }

    const handleWhatsAppClick = () => {
        const encodedMessage = encodeURIComponent("Hi Dikshitha, I would like to connect with you and have a discussion. Please let me know your free time to connect.");
        const whatsappURL = `https://wa.me/919740900109?text=${encodedMessage}`;
        window.open(whatsappURL, "_blank");
    };

    return (
        <section id='contact-us'>
            <div className='contactUsContainer'>
                <div>
                <div className='headerImageFooter'><img src={BannerIcon} width={'200px'} height={'80px'} />
                    <p>Where Growth <span>Meets Trust</span></p></div>
                    <div className='mt-2'>
                        <p className='company-text'>At 9Digit Capital, we are dedicated to helping our</p>
                        <p className='company-text'>clients achieve their financial goals and lead a </p>
                        <p className='company-text'>financially secure life.</p>
                    </div>
                </div>
                <div className='helper-item'>
                    <h2>Quick Links</h2>
                    <p onClick={() => navItemOnClickAction('about-us')}>About Us</p>
                    <p onClick={() => navItemOnClickAction('process')}>Process</p>
                    <p onClick={() => navItemOnClickAction('services')}>Services</p>
                </div>
                <div className='helper-item'>
                    <h2>Help and Support</h2>
                    <p onClick={() => navItemOnClickAction('disclosures')}>Disclosures</p>
                    <p onClick={handleWhatsAppClick}>Connect Over Whatsapp</p>
                </div>
                <div className='helper-item'>
                    <h2>Follow Us On</h2>
                    <div className='flex flex-row items-center justify-start gap-3 mt-2'>
                    <a href="https://www.linkedin.com/in/dikshagowda/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin style={{ color: 'black', stroke: 'black', strokeWidth: '0.5px' }} size={24} />
                    </a>
                    <a href="https://www.instagram.com/9digit_capital" target="_blank" rel="noopener noreferrer">
                        <FaInstagram style={{ color: 'black', stroke: 'black', strokeWidth: '0.5px' }} size={24} />
                    </a>
                    <div onClick={handleWhatsAppClick}>
                        <FaWhatsapp style={{ color: 'black', stroke: 'black', strokeWidth: '0.5px' }} size={24} />
                    </div>
                    </div>
                </div>
            </div>
            <div className='copyrights'>Copyright ©2023 All Rights Reserved</div>
        </section>
    )
}

export default ContactUs