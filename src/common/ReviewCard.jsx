import React, { useEffect, useRef, useState } from 'react'
import Star from '../assets/star.png';
import Gagan from '../assets/gagan_review.png';
import Kashyap from '../assets/lashyap_review.png';
import Akhil from '../assets/akhil_review.png';

const ReviewCard = ({ id, name, designation, review }) => {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef(null);

  const getIcon = (id) => {
    switch (id) {
        case 1: return Kashyap;
        case 2: return Akhil;
        case 3: return Gagan;
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    }, {
      threshold: 0.3 // Trigger when 30% of the card is visible
    });

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  return (
    <div 
        className='reviewCard' 
        ref={cardRef} 
        style={{ opacity: isVisible ? 1 : 0.5 }} 
    >
        <div className='review'>{review}</div>
        <div className='reviewBottomContainer'>
            <div className='flex flex-row items-center justify-between gap-12'>
                <img src={getIcon(id)} width={'160px'} height={'120px'}/>
                <div >
                    <p className='reviewer-name'>{name}</p>
                    <p className='reviewer-designation'>{designation}</p>
                </div>
            </div>
            <div className='flex flex-row items-center justify-between gap-4'>
                <img src={Star} width={'36px'} height={'36px'}/>
                <img src={Star} width={'36px'} height={'36px'}/>
                <img src={Star} width={'36px'} height={'36px'}/>
                <img src={Star} width={'36px'} height={'36px'}/>
                <img src={Star} width={'36px'} height={'36px'}/>
            </div>
        </div>
    </div>
  )
}

export default ReviewCard