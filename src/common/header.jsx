import React, { useState } from 'react'
import Logo from '../assets/9digitLogo.png';
import { navBarItems } from '../navBarItem';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import Hamburger from './Hamburger';
import SideNav from './SideNav';

const Header = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItemOnClickAction = (id) => {
    if(location.pathname === '/' && id === 'disclosures') {
      navigate('/disclosure')
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
    const whatsappURL = `https://wa.me/917411637088?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };
 
  return (
    <section className='headerContainer' style={{ backgroundColor: location.pathname === '/' ? '' : 'rgba(36, 130, 50, 0.7)'}}>
        <img src={Logo} width={'60px'} height={'60px'}/>
        <div className='nav-group'>
          {navBarItems.map((item) => (
            <span className='nav-item' onClick={() => navItemOnClickAction(item.id)}>{item.title}</span>
          ))}
        </div>
        <div className='contact-us-button' onClick={handleWhatsAppClick}>
          Connect
        </div>
        <div className='hamburger-icon' onClick={() => {}}>
          <Hamburger setSideNavOpen={setSideNavOpen} sideNavOpen={sideNavOpen} />
        </div>
        <SideNav sideNavOpen={sideNavOpen} setSideNavOpen={setSideNavOpen} />
    </section>
  )
}

export default Header
