import './Hamburger.css';

const Hamburger = ({ sideNavOpen, setSideNavOpen }) => {
    return (
        <label>
            <div className={sideNavOpen ? 'bar bar-close' : 'bar'} onClick={() => setSideNavOpen(!sideNavOpen)}>
                <div className='top' onClick={() => setSideNavOpen(!sideNavOpen)}></div>
                <div className='middle' onClick={() => setSideNavOpen(!sideNavOpen)}></div>
                <div className='bottom' onClick={() => setSideNavOpen(!sideNavOpen)}></div>
            </div>
        </label>
    )
}

export default Hamburger