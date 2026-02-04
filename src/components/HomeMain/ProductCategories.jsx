import React from 'react';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import mainEndCard1 from "../../assets/images/mainCard3.jpg";
import mainEndCard2 from "../../assets/images/mainEndCard2Img.jpg";
import mainEndCard3 from "../../assets/images/mainEndCard3Img.jpg";
import mainEndCard4 from "../../assets/images/mainEndCard1.jpg";
import mainEndCard5 from "../../assets/images/mainEndCard5Img.jpg";
import Modal from "../Modal/Modal";
import Modal3 from "../Modal/Modal3";
import Modal4 from "../Modal/Modal4";
import Modal5 from "../Modal/Modal5";
import Modal6 from "../Modal/Modal6";
import useScrollReveal from '../../hooks/useScrollReveal';

const ProductCategories = ({
    modals,
    handlers
}) => {
    const { t } = useTranslation();
    const revealRef = useScrollReveal();

    const categories = [
        {
            img: mainEndCard4,
            text: t("homeText4Card1"),
            modal: modals.m4,
            open: handlers.o4,
            close: handlers.c4,
            link: "/vozm#homeEnd",
            ModalComp: Modal4
        },
        {
            img: mainEndCard3,
            text: t("homeText4Card2"),
            modal: modals.m3,
            open: handlers.o3,
            close: handlers.c3,
            link: "/img#gMainBox4",
            ModalComp: Modal3
        },
        {
            img: mainEndCard2,
            text: t("homeText4Card3"),
            modal: modals.m,
            open: handlers.o,
            close: handlers.c,
            link: "/vozm#homeEnd2",
            ModalComp: Modal
        },
        {
            img: mainEndCard1,
            text: t("homeText4Card4"),
            modal: modals.m5,
            open: handlers.o5,
            close: handlers.c5,
            link: "/vozm#homeEnd3",
            ModalComp: Modal5
        },
        {
            img: mainEndCard5,
            text: t("homeText4Card5"),
            modal: modals.m6,
            open: handlers.o6,
            close: handlers.c6,
            link: "/vozm#homeEnd5",
            ModalComp: Modal6
        },
    ];

    return (
        <div className="container reveal" ref={revealRef}>
            <h3 className="homeMain__box3-h3" id="vozmBlocksBack">
                {t("homeText4")}
            </h3>
            <div className="homeMain__box3">
                {categories.map((cat, i) => (
                    <div className="homeMain__box3-card2" key={i}>
                        <img src={cat.img} alt={cat.text} className="homeMain__box3-card2-img" loading="lazy" />
                        <p>{cat.text}</p>
                        {cat.modal && <cat.ModalComp closeModal={cat.close} closeModal3={cat.close} closeModal4={cat.close} closeModal5={cat.close} closeModal6={cat.close} />}
                        <button className="homeMain__end-button" onClick={cat.open}>
                            {t("homeText4CardLink")}
                        </button>
                        <Link to={cat.link}>{t("homeText4CardLink2")}</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductCategories;
