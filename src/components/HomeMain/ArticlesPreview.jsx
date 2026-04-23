import React from 'react';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import './ArticlesPreview.scss';
import useScrollReveal from '../../hooks/useScrollReveal';

const ArticlesPreview = () => {
    const { t } = useTranslation();
    const revealRef = useScrollReveal();

    const articles = [
        {
            id: 'choosing-dredger',
            title: t("art1Title", "Как выбрать земснаряд для добычи песка?"),
            desc: t("art1Desc", "Полный гид по параметрам: производительность, глубина, энергопотребление."),
            tag: "Гид"
        },
        {
            id: 'performance-calculation',
            title: t("art2Title", "Расчет производительности земснаряда по пульпе"),
            desc: t("art2Desc", "Формулы и практические примеры для правильного подбора оборудования."),
            tag: "Технологии"
        }
    ];

    return (
        <div className="articles-preview reveal" ref={revealRef}>
            <div className="container">
                <div className="articles-preview__header">
                    <h2 className="homeMain__h2" style={{margin: 0}}>{t("artMainTitle", "База знаний")}</h2>
                    <Link to="/knowledge-base" className="articles-preview__link">{t("artViewAll", "Все статьи")} ➔</Link>
                </div>
                <div className="articles-preview__grid">
                    {articles.map((art, i) => (
                        <Link to={`/knowledge-base/${art.id}`} className="articles-preview__card" key={i}>
                            <div className="articles-preview__tag">{art.tag}</div>
                            <h3 className="articles-preview__card-title">{art.title}</h3>
                            <p className="articles-preview__card-desc">{art.desc}</p>
                            <span className="articles-preview__more">{t("artReadMore", "Читать далее")}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ArticlesPreview;
