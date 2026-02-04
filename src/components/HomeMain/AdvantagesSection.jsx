import React from 'react';
import { useTranslation } from "react-i18next";
import homeImgSw1 from "../../assets/images/homeImgSw1.jpg";
import Modal2 from "../Modal/Modal2";
import useScrollReveal from '../../hooks/useScrollReveal';

const AdvantagesSection = ({ isModal2Open, openModal2Handler, closeModal2Handler }) => {
    const { t } = useTranslation();
    const revealRef = useScrollReveal();

    const advantages = [
        { text: t("homeAdvText1"), sub: t("homeAdvText2") },
        { text: t("homeAdvText3"), sub: t("homeAdvText4") },
        { text: t("homeAdvText5"), sub: t("homeAdvText6") },
        { text: t("homeAdvText7"), sub: t("homeAdvText8") },
        { text: t("homeAdvText9"), sub: t("homeAdvText10") },
    ];

    return (
        <div className="home__block2 reveal" ref={revealRef}>
            <img src={homeImgSw1} alt={t("homeAdvTitle")} loading="lazy" />
            <div className="home__block2-box">
                <h5 className="home__block2-subtitle">{t("homeText3")}</h5>
                <h4 className="home__block2-h4">{t("homeAdvTitle")}</h4>
                {isModal2Open && <Modal2 closeModal2={closeModal2Handler} />}
                <div className="home__block2-content">
                    <ul className="home__block2-adv">
                        {advantages.map((adv, i) => (
                            <li key={i}>
                                <p className="home__block2-adv-text">
                                    <span>✓</span> {adv.text}
                                </p>
                                <p className="home__block2-adv-subtext">{adv.sub}</p>
                            </li>
                        ))}
                    </ul>
                    <button className="home__block2-btn" onClick={openModal2Handler}>
                        {t("homeText3Link")}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdvantagesSection;
