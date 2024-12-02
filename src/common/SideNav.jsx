import { useLocation, useNavigate } from 'react-router-dom';
import { navBarItems } from '../navBarItem';
import './SideNav.css';

const SideNav = ({ sideNavOpen, setSideNavOpen }) => {
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

    return (
        <div className={`${sideNavOpen ? 'sidenav-container open' : 'sidenav-container'}`}>
            {navBarItems.map((navItem) => (
                <span className='nav-link' onClick={() => {
                    navItemOnClickAction(navItem.id)
                    setSideNavOpen(false);
                }}>{navItem.title}</span>
            ))}
        </div>
    )
}

export default SideNav