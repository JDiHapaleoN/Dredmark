import React from 'react';
import { useTranslation } from "react-i18next";
import tableImg1 from "../../assets/images/dredger-200to20.jpg";
import tableImg2 from "../../assets/images/dredger-250to25.jpg";
import tableImg3 from "../../assets/images/dredger-300to30.jpg";
import tableImg4 from "../../assets/images/dredger-400to65.jpg";
import tableImg5 from "../../assets/images/dredger-450to70.jpg";
import useScrollReveal from '../../hooks/useScrollReveal';

const ProductTable = () => {
    const { t } = useTranslation();
    const revealRef = useScrollReveal();

    const products = [
        { img: tableImg1, title: t('homeTableText1'), perf: `2000 ${t('unitM')}3 ${t('homeTableText6')}`, depth: `10-13 ${t('unitM')}`, price: t('homeTablePrice1') },
        { img: tableImg2, title: t('homeTableText2'), perf: `2500 ${t('unitM')}3 ${t('homeTableText6')}`, depth: `10-13 ${t('unitM')}`, price: t('homeTablePrice2') },
        { img: tableImg3, title: t('homeTableText3'), perf: `3000 ${t('unitM')}3 ${t('homeTableText6')}`, depth: `10-13 ${t('unitM')}`, price: t('homeTablePrice3') },
        { img: tableImg4, title: t('homeTableText4'), perf: `4000 ${t('unitM')}3 ${t('homeTableText6')}`, depth: `14 ${t('unitM')}`, price: t('homeTablePrice4') },
        { img: tableImg5, title: t('homeTableText5'), perf: `4500 ${t('unitM')}3 ${t('homeTableText6')}`, depth: `14 ${t('unitM')}`, price: t('homeTablePrice5') },
    ];

    return (
        <div className="container reveal" ref={revealRef}>
            <h2 className="homeMain__h2">{t("homeModelTitle")}</h2>
            <div className="homeMain__table-wrapper">
                <table className="homeMain__table-styled">
                    <thead>
                        <tr>
                            <th>{t("vozmMainSection8P1")}</th>
                            <th>{t("homeTableTitle1")}</th>
                            <th>{t("homeTableTitle2")}</th>
                            <th>{t("homeTableTitlePrice")}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((p, i) => (
                            <tr key={i}>
                                <td>
                                    <img src={p.img} alt={p.title} loading="lazy" />
                                    <p>{p.title}</p>
                                </td>
                                <td>{p.perf}</td>
                                <td>{p.depth}</td>
                                <td style={{fontWeight: '700', color: '#00ff7f'}}>{p.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <a href="#forma" className="homeMain__table-btn" style={{ textDecoration: 'none' }}>
                {t("homeTableBtn")}
            </a>
        </div>
    );
};

export default ProductTable;
