import React from 'react';
import { useTranslation } from "react-i18next";
import './SpecHighlights.scss';
import useScrollReveal from '../../hooks/useScrollReveal';

const SpecHighlights = () => {
    const { t } = useTranslation();
    const revealRef = useScrollReveal();

    const specs = [
        { 
            value: "4500", 
            unit: t("unitM") + "3/ч", 
            label: t("specPerf", "Макс. производительность"),
            icon: "🚀"
        },
        { 
            value: "14", 
            unit: t("unitM"), 
            label: t("specDepth", "Глубина дноуглубления"),
            icon: "⚓"
        },
        { 
            value: "1.5", 
            unit: "км", 
            label: t("specDist", "Дальность выброса"),
            icon: "📏"
        },
        { 
            value: "4-6", 
            unit: t("unitMonth", "мес."), 
            label: t("specLead", "Срок изготовления"),
            icon: "⏱️"
        }
    ];

    return (
        <div className="spec-highlights reveal" ref={revealRef}>
            <div className="container">
                <div className="spec-highlights__grid">
                    {specs.map((spec, i) => (
                        <div className="spec-highlights__card" key={i}>
                            <div className="spec-highlights__icon">{spec.icon}</div>
                            <div className="spec-highlights__content">
                                <div className="spec-highlights__number">
                                    <span className="spec-highlights__value">{spec.value}</span>
                                    <span className="spec-highlights__unit">{spec.unit}</span>
                                </div>
                                <div className="spec-highlights__label">{spec.label}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SpecHighlights;
