import React from 'react';
import { useTranslation } from "react-i18next";
import { useParams, Link } from "react-router-dom";
import './ArticlesMain.scss';
import ContactForm from '../ContactForm/ContactForm';
import SEO from '../Common/SEO';
import karshi1 from '../../assets/images/project2026_karshi.jpg';
import karshi2 from '../../assets/images/project2026_karshi_2.jpg';
import karshi3 from '../../assets/images/project2026_karshi_3.jpg';
import karshi4 from '../../assets/images/project2026_karshi_4.jpg';
import mainCard1 from '../../assets/images/mainCard1.jpg';
import mainCard2 from '../../assets/images/mainCard2.jpg';

const ArticlesMain = () => {
    const { t } = useTranslation();
    const { id } = useParams();

    // Unified content object with rich descriptions and images
    const content = {
        'choosing-dredger': {
            title: t("art1Title"),
            desc: t("art1Desc"),
            image: mainCard1,
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
            desc: t("art2Desc"),
            image: mainCard2,
            text: [
                t("art2P1"),
                t("art2P2"),
                t("art2P3")
            ]
        },
        'amphibious-dredgers': {
            title: t("art3Title"),
            desc: t("art3Desc"),
            image: karshi3,
            text: [
                t("art3P1"),
                t("art3P2"),
                t("art3P3"),
                t("art3P4"),
                t("art3P5")
            ]
        },
        'karshi-project': {
            title: t("art4Title"),
            desc: t("art4Desc"),
            image: karshi4,
            text: [
                t("art4P1"),
                t("art4P2"),
                t("art4P3"),
                t("art4P4")
            ]
        },
        'maintenance-tips': {
            title: t("art5Title"),
            desc: t("art5Desc"),
            image: karshi2,
            text: [
                t("art5P1"),
                t("art5P2"),
                t("art5P3"),
                t("art5P4")
            ]
        },
        'dredging-safety': {
            title: t("art6Title"),
            desc: t("art6Desc"),
            image: karshi1,
            text: [
                t("art6P1"),
                t("art6P2"),
                t("art6P3"),
                t("art6P4")
            ]
        }
    };

    const article = id ? content[id] : null;

    if (id && !article) {
        return (
            <div className="container" style={{padding: '100px 0', textAlign: 'center'}}>
                <h1>{t('artNotFound', 'Статья не найдена')}</h1>
                <Link to="/technology" className="button1">{t('artBackToTech')}</Link>
            </div>
        );
    }

    return (
        <div className="articles-main">
            {id ? (
                <SEO 
                    title={article.title} 
                    description={article.desc} 
                    url={`/technology/${id}`} 
                />
            ) : (
                <SEO 
                    title={t("artMainTitle")} 
                    description={t("seoDescArticles", "Полезные статьи и технические руководства о земснарядах, дноуглублении и расчете производительности от завода DREDMARK.")} 
                    url="/technology" 
                />
            )}
            <div className="nav2">
                <Link to="/" className='nav2__a'>{t('vozmMainNav2Text1')}</Link>
                <Link to="/technology" className='nav2__a'> » {t('artMainTitle')}</Link>
                {id && <p className='nav2__p'> » {article.title}</p>}
            </div>

            <div className="container">
                {!id ? (
                    <div className="articles-list">
                        <h1 className="articles-main__h1">{t("artMainTitle")}</h1>
                        <div className="articles-grid">
                            {Object.keys(content).map(key => (
                                <Link to={`/technology/${key}`} key={key} className="article-card">
                                    {content[key].image && (
                                        <div className="article-card__image">
                                            <img src={content[key].image} alt={content[key].title} />
                                        </div>
                                    )}
                                    <div className="article-card__content">
                                        <h3>{content[key].title}</h3>
                                        <p>{content[key].text[0].substring(0, 150)}...</p>
                                        <span className="read-more">{t("artReadMore")} →</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="article-detail">
                        <h1 className="articles-main__h1">{article.title}</h1>
                        {article.image && (
                            <div className="article-banner">
                                <img src={article.image} alt={article.title} className="article-banner-img" />
                            </div>
                        )}
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
