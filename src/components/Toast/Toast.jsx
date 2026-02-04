import React, { useEffect } from 'react';
import './Toast.scss';

const Toast = ({ message, type, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 4000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className={`toast-container ${type}`}>
            <div className="toast-content">
                <span className="toast-icon">
                    {type === 'success' ? '✅' : '❌'}
                </span>
                <p className="toast-message">{message}</p>
            </div>
            <button className="toast-close" onClick={onClose}>×</button>
            <div className="toast-progress"></div>
        </div>
    );
};

export default Toast;
