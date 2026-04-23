import React from 'react';
import { useTranslation } from "react-i18next";
import { useParams, Link } from "react-router-dom";
import './ArticlesMain.scss';
import ContactForm from '../ContactForm/ContactForm';

const ArticlesMain = () => {
    const { t } = useTranslation();
    const { id } = useParams();

    // In a real app, this would come from a CMS or JSON file
    const content = {
        'choosing-dredger': {
            title: t("art1Title"),
            text: [
                t("art1P1"),
                t("art1P2"),
                t("art1P3"),
                t("art1P4"),
                t("art1P5")
            ]
        },
        'performance-calculation': {
            title: t("art2Title"),
            text: [
                t("art2P1"),
                t("art2P2"),
                t("art2P3")
            ]
        }
    };

    const article = id ? content[id] : null;

    if (id && !article) {
        return (
            <div className="container" style={{padding: '100px 0', textAlign: 'center'}}>
                <h1>Статья не найдена</h1>
                <Link to="/knowledge-base" className="button1">Вернуться в базу знаний</Link>
            </div>
        );
    }

    return (
        <div className="articles-main">
            <div className="nav2">
                <Link to="/" className='nav2__a'>{t('vozmMainNav2Text1')}</Link>
                <Link to="/knowledge-base" className='nav2__a'> » {t('artMainTitle')}</Link>
                {id && <p className='nav2__p'> » {article.title}</p>}
            </div>

            <div className="container">
                {!id ? (
                    <div className="articles-list">
                        <h1 className="articles-main__h1">{t("artMainTitle")}</h1>
                        <div className="articles-grid">
                            {Object.keys(content).map(key => (
                                <Link to={`/knowledge-base/${key}`} key={key} className="article-card">
                                    <h3>{content[key].title}</h3>
                                    <p>{content[key].text[0].substring(0, 150)}...</p>
                                    <span className="read-more">{t("artReadMore")} →</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="article-detail">
                        <h1 className="articles-main__h1">{article.title}</h1>
                        <div className="article-content">
                            {article.text.map((p, i) => <p key={i}>{p}</p>)}
                        </div>
                        <div className="article-cta">
                            <h3>{t("artCtaTitle", "Нужна консультация по подбору оборудования?")}</h3>
                            <a href="#forma" className="button1">{t("homeBannersLink")}</a>
                        </div>
                    </div>
                )}
            </div>
            <ContactForm />
        </div>
    );
};

export default ArticlesMain;
