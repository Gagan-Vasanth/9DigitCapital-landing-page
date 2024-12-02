import Modal from './Modal';
import './RegisterModal.css';
import { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import CloseButton from '../assets/cancel.svg';
import { FaUser , FaEnvelope, FaPhone, FaMapMarkerAlt, FaMap, FaClock, FaWhatsapp} from 'react-icons/fa';


import mailSentAnimation from '../assets/Lottie/mail-sent.json';
import loaderAnimation from '../assets/Lottie/loader.json';
import Lottie from 'lottie-react';

const LottieAnimation = ({animationData, style = {}}) => {
  return (
    <Lottie
      autoplay
      loop={false}
      animationData={animationData}
      style={{ height: style?.height ?? "60px", width: style?.width ?? "60px" }}
    />
  );
};

const Loader = () => {
    return (
        <>
            <LottieAnimation animationData={loaderAnimation}/>
        </>
    )
}

const EmailSent = () => {
    return (
        <>
            <LottieAnimation animationData={mailSentAnimation} style={{ width: '120px', height: '120px'}}/>
        </>
    )
}

const RegisterModal = ({ setShowRegisterModal }) => {
    const [emailSent, setEmailSent] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        city: ''
    });
    const [enableRegisterNowButton, setEnableRegisterNowButton] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [showLoader, setShowLoader] = useState(false);

    useEffect(() => {
        if(formData.name.length >= 3 && 
            formData.email.includes('@gmail.com') && 
            formData.phone.length === 10 && 
            formData.city.length >= 3
        ) {
            setEnableRegisterNowButton(true);
        } else {
            setEnableRegisterNowButton(false);
        }
    }, [formData]);

    const handleWhatsAppClick = () => {
        const encodedMessage = encodeURIComponent("Hi Dikshitha, I would like to connect with you and have a discussion. Please let me know your free time to connect.");
        const whatsappURL = `https://wa.me/917411637088?text=${encodedMessage}`;
        window.open(whatsappURL, "_blank");
    };

    const sendEmail = () => {
        setShowLoader(true);
        return emailjs
            .send(
                'service_tr25k51', 
                'template_kzaiq9g', 
                {
                    ...formData,
                },
                'x3fddaMn-sNfanakT'
            )
            .then(
                (response) => {
                    setShowRegisterModal(false);
                    setEmailSent(true);
                },
                (err) => {
                    setEmailSent(false);
                    setEmailError('Something went wrong in sending the email, Please retry again!')
                }
            ).finally(() => {
                setShowLoader(false);
            });
    }

    return (
        <Modal onClose={() => setShowRegisterModal(false)}>
            {!emailSent ? <div className='register-modal-left'>
                {emailError && <div className='email-error'>{emailError}</div>}
                <div className='user-name mandatory'>
                    <label>Name</label>
                    <input type="text" placeholder='Enter your name' onChange={(e) => setFormData({ ...formData, name: e.target.value})} value={formData.name}/>
                    <FaUser  className='input-icon' />
                </div>
                <div className='user-email mandatory'>
                    <label>Email</label>
                    <input type="text" placeholder='Enter your email' onChange={(e) => setFormData({ ...formData, email: e.target.value})} value={formData.email}/>
                    <FaEnvelope className='input-icon' />
                </div>
                <div className='user-phone mandatory'>
                    <label>Phone Number</label>
                    <input type="text" placeholder='Enter your phone number' onChange={(e) => setFormData({ ...formData, phone: e.target.value })} value={formData.phone}/>
                    <FaPhone className='input-icon' />
                </div>
                <div className='city mandatory'>
                    <label>City/Pincode</label>
                    <input type="text" placeholder='Enter your city/pincode' onChange={(e) => setFormData({ ...formData, city: e.target.value})} value={formData.city}/>
                    <FaMapMarkerAlt className='input-icon' />
                </div>
                <div className={enableRegisterNowButton ? `register-now-enabled` : 'register-now'} onClick={() => sendEmail()}>
                    {showLoader ? <Loader /> : 'Submit' }
                </div>
                <img src={CloseButton} width={'24px'} height={'24px'} className='close-button' onClick={() => setShowRegisterModal(false)} />
            </div> : <div className='flex flex-col items-center justify-center'>
                <EmailSent />
                <div style={{ fontWeight: '500', color: '#248232c7'}}>We Have successfully recieved your request</div>
                <div className='corporate-office-info'>
                    <div>
                        <div className='office-address'>
                            <FaMap className='address-icon' /> {/* Address icon */}
                            <span>
                                <b>Our Corporate Office Address</b>
                                <br />
                                Devara Hosahalli, Rampura post
                                <br />
                                Kasaba Hobli, Channapatna - 562160
                            </span>
                        </div>
                        <div className='office-timings'>
                            <FaClock className='clock-icon' /> {/* Clock icon */}
                            
                            <span><b>Our Office Timings</b> <br></br>
                            Mon - Sat : 9:30 AM - 6:00 PM</span>
                        </div>
                        </div>
                        <button 
                            onClick={handleWhatsAppClick} 
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: 'center',
                                backgroundColor: "#25D366",
                                color: "white",
                                padding: "10px 20px",
                                border: "none",
                                borderRadius: "5px",
                                cursor: "pointer",
                                fontSize: "18px",
                                width: '100%',
                                marginTop: '32px',
                                fontWeight: '500'
                            }}
                            >
                            <FaWhatsapp style={{ marginRight: "10px", width: '32px', height: '32px' }} />
                            Connect Over WhatsApp
                            </button>
                    </div>
            </div>}
        </Modal>
    )
}

export default RegisterModal;