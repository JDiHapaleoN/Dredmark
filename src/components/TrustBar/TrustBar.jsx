import React from 'react';
import { useTranslation } from "react-i18next";
import './TrustBar.scss';

const TrustBar = () => {
    const { t } = useTranslation();

    // Use fallback strings in case they are not defined yet in i18n
    const stats = [
        { value: "20+", label: t("trustYr", "лет на рынке"), icon: "⚡" },
        { value: "50+", label: t("trustDr", "земснарядов изготовлено"), icon: "🏭" },
        { value: "5", label: t("trustCtry", "стран СНГ доставка"), icon: "🌍" },
        { value: "", label: t("trustReg", "Регистр судоходства"), icon: "📋" }
    ];

    return (
        <div className="trust-bar">
            <div className="container">
                <div className="trust-bar__grid">
                    {stats.map((s, i) => (
                        <div className="trust-bar__item" key={i}>
                            <div className="trust-bar__icon">{s.icon}</div>
                            <div className="trust-bar__text">
                                {s.value && <div className="trust-bar__value">{s.value}</div>}
                                <div className="trust-bar__label">{s.label}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrustBar;
