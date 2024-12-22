import React, { useEffect, useRef, useState } from 'react';
import { data } from './testimonials-data';
import ReviewCard from '../common/ReviewCard';

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true); // State to track visibility
    const testimonialsRef = useRef(null);
  
    const scrollToCard = (index) => {
        const card = testimonialsRef.current.children[index];
        if (card) {
            card.scrollIntoView({ behavior: 'smooth' });
            setActiveIndex(index);
        }
    };
  
    // Automatic scrolling every 8 seconds
    useEffect(() => {
        let interval;
        if (isVisible) {
            interval = setInterval(() => {
                setActiveIndex((prevIndex) => {
                    const nextIndex = (prevIndex + 1) % data.length;
                    scrollToCard(nextIndex);
                    return nextIndex;
                });
            }, 8000);
        }
  
        return () => clearInterval(interval);
    }, [isVisible]);

    // Intersection Observer to track visibility
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                setIsVisible(entry.isIntersecting); // Update visibility state
            });
        });

        if (testimonialsRef.current) {
            observer.observe(testimonialsRef.current);
        }

        return () => {
            if (testimonialsRef.current) {
                observer.unobserve(testimonialsRef.current);
            }
        };
    }, []);

    return (
        <section className='testimonialsSectionContainer'>
            <h1 className='review-heading'>Voices of Appreciation</h1>
            <div className='testimonialsContainer' ref={testimonialsRef}>
                {data.map((d) => (
                    <ReviewCard id={d.id} designation={d.designation} name={d.name} review={d.review} key={d.id} />
                ))}
            </div>
            <div className='flex items-center justify-center'>
                <div className='flex flex-row items-center gap-5'>
                    {data.map((d, index) => (
                        <div
                            key={d.id}
                            className='review-pointer'
                            onClick={() => scrollToCard(index)}
                            style={{
                                cursor: 'pointer',
                                backgroundColor: activeIndex === index ? '#9CDB74' : '#9CDB74',
                                opacity: activeIndex === index ? 1 : 0.5,
                                height: '20px',
                                margin: '5px 0',
                                borderRadius: '12px'
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;