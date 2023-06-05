import React from 'react'
import { FaAngleUp } from 'react-icons/fa';
import './index.scss';
import  { useState, useEffect } from 'react';

const BacktoTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 800) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
  return (
    <div>
        <div className="top-to-btm">
            {" "}
            {showTopBtn && (
                <FaAngleUp
                    className="icon-position icon-style"
                    onClick={goToTop}
                />
            )}{" "}
        </div>
    </div>
  )
}

export default BacktoTop
