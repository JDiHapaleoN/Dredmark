import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './StickyContact.scss';
import emailIcon from '../../assets/images/email.svg';
import whatsappIcon from '../../assets/images/whatsapp.svg';

const StickyContact = () => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Показывать кнопку после прокрутки 300px
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="sticky-container">
            <a
                href={`https://wa.me/998998516074?text=${encodeURIComponent(t("whatsappMsg"))}`}
                className="sticky-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={whatsappIcon} alt="WhatsApp" />
            </a>
            <a href="#forma" className="sticky-contact">
                <img src={emailIcon} alt="Contact" />
                <span className="sticky-text">{t("navLin10")}</span>
            </a>
        </div>
    );
};

export default StickyContact;
