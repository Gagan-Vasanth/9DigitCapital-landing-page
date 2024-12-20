import React, { useState } from 'react'
import RegisterModal from '../common/RegisterModal'

const Home = () => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  return (
    <section className='homeContainer' id='home'>
      <h1 className='home-header'>Unlock your financial future with</h1>
      <h1 className='home-header-green'>9Digit Capital!</h1>
      <div className='home-description'>
        Embark on a journey of endless financial opportunities.
        Discover secure and rewarding investments tailored to your goals. Let us be your guide to a future filled with growth, confidence, and success. Your path to financial freedom begins here!
      </div>
      <div className='get-started-button' onClick={() => setShowRegisterModal(true)}>
        Get Started
      </div>
      {showRegisterModal && <RegisterModal setShowRegisterModal={setShowRegisterModal} setEmailSent={() => console.log('')} />}
    </section>
  )
}

export default Home