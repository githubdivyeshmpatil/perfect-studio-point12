// BackToTopButton.js
import React, { useState, useEffect } from 'react';
import './BackToTopButton.css'; // Import the CSS file

const BackToTopButton = () => {
    const [visible, setVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 300) { // Show button after scrolling down 300px
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        visible && (
            <button
                className="back-to-top"
                onClick={handleClick}
            >
                {/* SVG Icon */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    width="24px"
                    height="24px"
                >
                    <path d="M12 2l-10 10h6v10h8V12h6z"/>
                </svg>
            </button>
        )
    );
};

export default BackToTopButton;
