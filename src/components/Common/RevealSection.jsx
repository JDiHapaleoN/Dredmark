import React from 'react';
import useScrollReveal from '../../hooks/useScrollReveal';

const RevealSection = ({ children, className = "" }) => {
    const revealRef = useScrollReveal();
    return (
        <div ref={revealRef} className={`reveal ${className}`}>
            {children}
        </div>
    );
};

export default RevealSection;
