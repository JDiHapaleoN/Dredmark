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

    // Featured case studies with full story (concept: "Не просто список, а история успеха")
    const featuredProjects = [
        {
            img: realProject1,
            model: "DREDMARK 4000",
            client: t('caseClient1', 'Минводхоз Узбекистана'),
            task: t('caseTask1', 'Очистка и углубление ирригационных каналов Каршинского каскада'),
            solution: t('caseSolution1', 'Поставлен 24-метровый земснаряд производительностью 4000 м³/ч с фрезерным рыхлителем'),
            result: t('caseResult1', 'Восстановлена пропускная способность каналов. Срок поставки — 5 месяцев'),
            tag: t('caseTag1', '🏆 Крупнейший проект')
        },
        {
            img: realProject2,
            model: "DREDMARK 3500C",
            client: t('caseClient2', 'Промышленный заказчик, Россия'),
            task: t('caseTask2', 'Добыча песка и ПГС с глубины 22 метра для строительного сектора'),
            solution: t('caseSolution2', 'Спроектирован земснаряд 3500 м³/ч с усиленным грунтовым насосом для глубинной разработки'),
            result: t('caseResult2', 'Выход на проектную мощность 100 000 м³ в месяц'),
            tag: t('caseTag2', '⛏️ Глубинная добыча')
        },
        {
            img: realProject3,
            model: "DREDMARK 1800",
            client: t('caseClient3', 'Экологическая служба'),
            task: t('caseTask3', 'Очистка водоёма от заиления и инвазивной растительности'),
            solution: t('caseSolution3', 'Амфибийный земснаряд 1800 м³/ч — работает там, где обычная техника просто тонет'),
            result: t('caseResult3', 'Полная очистка водоёма за 3 месяца, восстановление экосистемы'),
            tag: t('caseTag3', '🌿 Амфибия')
        },
    ];

    // Standard gallery projects (without full stories)
    const galleryProjects = [
        { img: realProject5, model: "DREDMARK 2000/63" },
        { img: realProject4, model: "DREDMARK 3000P" },
        { img: realProject6, model: "DREDMARK 800" },
        { img: realProject7, model: "DREDMARK 400" },
        { img: realProject8, model: "DREDMARK 2500" },
        { img: realProject9, model: "DREDMARK 2500" },
        { img: realProject12, model: "DREDMARK 3000" },
        { img: realProject13, model: "DREDMARK 3000" },
    ];

    return (
        <div className="homeMain__realProjects reveal" ref={revealRef}>
            <h2 className="homeMain__realProjects-title">{t('homeRealProjectTitle')}</h2>
            
            {/* Featured case studies — story format */}
            <div className="container case-studies">
                {featuredProjects.map((p, i) => (
                    <div className="case-study" key={`featured-${i}`}>
                        <div className="case-study__image">
                            <img src={p.img} alt={`${p.client} — ${p.model}`} loading="lazy" />
                            <div className="case-study__tag">{p.tag}</div>
                        </div>
                        <div className="case-study__content">
                            <h3 className="case-study__model">{p.model}</h3>
                            <div className="case-study__detail">
                                <span className="case-study__label">{t('caseClientLabel', 'Заказчик')}:</span>
                                <span>{p.client}</span>
                            </div>
                            <div className="case-study__detail">
                                <span className="case-study__label">{t('caseTaskLabel', 'Задача')}:</span>
                                <span>{p.task}</span>
                            </div>
                            <div className="case-study__detail">
                                <span className="case-study__label">{t('caseSolutionLabel', 'Решение')}:</span>
                                <span>{p.solution}</span>
                            </div>
                            <div className="case-study__detail case-study__detail--result">
                                <span className="case-study__label">{t('caseResultLabel', 'Результат')}:</span>
                                <span>{p.result}</span>
                            </div>
                            <a href="#forma" className="case-study__cta">
                                {t('homeTableBtn')}
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Gallery of other projects */}
            <div className="container realprojects-gallery">
                {galleryProjects.map((p, i) => (
                    <div className="homeMain__realProjects-project1" key={`gallery-${i}`}>
                        <img src={p.img} alt={`${t('homeRealProjectTitle')} - ${p.model}`} loading="lazy" />
                        <ul className="homeMain__realProjects-project1-list">
                            <li>
                                <div className="project-model">
                                    <h3>
                                        {t('vozmMainSection8P1')}: <span>{p.model}</span>
                                    </h3>
                                </div>
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
