import React from 'react';
import { useTranslation } from "react-i18next";
import realProject1 from "../../assets/images/realProject1.jpg";
import realProject2 from "../../assets/images/realProject2.jpg";
import realProject3 from "../../assets/images/realProject3.jpg";
import realProject4 from "../../assets/images/realProject4.jpg";
import realProject5 from "../../assets/images/realProject5.jpg";
import realProject6 from "../../assets/images/realProject6.jpg";
import realProject7 from "../../assets/images/realProject7.jpg";
import realProject8 from "../../assets/images/realProject8.jpg";
import realProject9 from "../../assets/images/realProject9.jpg";
import realProject12 from "../../assets/images/realProject12.jpg";
import realProject13 from "../../assets/images/realProject13.jpg";
import useScrollReveal from '../../hooks/useScrollReveal';

const RealProjects = () => {
    const { t } = useTranslation();
    const revealRef = useScrollReveal();

    const projects = [
        {
            img: realProject1,
            model: "DREDMARK 4000",
            perf: `4000 ${t('unitM')}3/${t('unitH')} ${t('homeTableText6')}`,
            time: `4-6 ${t('unitMonth')}`
        },
        {
            img: realProject2,
            model: "DREDMARK 3500C",
            perf: `3500 ${t('unitM')}3/${t('unitH')} ${t('homeTableText6')}.`,
            depth: `22 ${t('unitM')}`
        },
        {
            img: realProject3,
            model: "DREDMARK 1800",
            perf: `1800 ${t('unitM')}3/${t('unitH')} ${t('homeTableText6')}`,
            desc: t('homeRealProjectText3')
        },
        {
            img: realProject5,
            model: "DREDMARK 2000/63",
            desc: t('homeRealProjectText6'),
            time: `1.5 ${t('homeRealProjectText6')}`
        },
        {
            img: realProject4,
            model: "DREDMARK 3000P",
            desc: t('homeRealProjectText2'),
            result: t('homeRealProjectText3')
        },
        {
            img: realProject6,
            model: "DREDMARK 800",
            desc: t('homeRealProjectText7'),
            result: `${t('homeRealProjectText8')}: ${t('homeRealProjectText9')}`
        },
        { img: realProject7, model: "DREDMARK 400" },
        { img: realProject8, model: "DREDMARK 2500" },
        { img: realProject9, model: "DREDMARK 2500" },
        { img: realProject12, model: "DREDMARK 3000" },
        { img: realProject13, model: "DREDMARK 3000" },
    ];

    return (
        <div className="homeMain__realProjects reveal" ref={revealRef}>
            <h2 className="homeMain__realProjects-title">{t('homeRealProjectTitle')}</h2>
            <div className="container">
                {projects.map((p, i) => (
                    <div className="homeMain__realProjects-project1" key={i}>
                        <img src={p.img} alt={`${t('homeRealProjectTitle')} - ${p.model}`} loading="lazy" />
                        <ul className="homeMain__realProjects-project1-list">
                            <li>
                                <div className="project-model">
                                    <h3>
                                        {t('vozmMainSection8P1')}: <span>{p.model}</span>
                                    </h3>
                                </div>
                                {p.perf && <p>{t('homeTableTitle1')}: <span>{p.perf}</span></p>}
                                {p.depth && <p>{t('homeTableTitle2')}: <span>{p.depth}</span></p>}
                                {p.time && <p>{t('homeRealProjectText1')}: <span>{p.time}</span></p>}
                                {p.desc && <p>{p.desc}</p>}
                                {p.result && <p>{p.result}</p>}
                                <a href="#forma" className="homeMain__table-btn" style={{ textDecoration: 'none', display: 'inline-block', marginTop: '15px', padding: '10px 20px', fontSize: '14px' }}>
                                    {t('homeTableBtn')}
                                </a>
                            </li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RealProjects;
