import React from 'react';
import { useTranslation } from "react-i18next";
import './ProcessSection.scss';
import useScrollReveal from '../../hooks/useScrollReveal';

const ProcessSection = () => {
    const { t } = useTranslation();
    const revealRef = useScrollReveal();

    const steps = [
        {
            num: "1",
            title: t("proc1T", "Заявка"),
            desc: t("proc1D", "Оставьте запрос на WhatsApp или форму")
        },
        {
            num: "2",
            title: t("proc2T", "Расчёт"),
            desc: t("proc2D", "Инженер рассчитывает оптимальную конфигурацию")
        },
        {
            num: "3",
            title: t("proc3T", "Предложение"),
            desc: t("proc3D", "Вы получаете КП с ценой, сроками и спецификацией")
        },
        {
            num: "4",
            title: t("proc4T", "Производство и Доставка"),
            desc: t("proc4D", "Монтаж, обучение и запуск под ключ")
        }
    ];

    return (
        <div className="process-section reveal" ref={revealRef}>
            <div className="container">
                <h2 className="homeMain__h2" style={{textAlign: "center", marginBottom: "40px"}}>{t("procTitle", "Как мы работаем")}</h2>
                <div className="process-section__grid">
                    {steps.map((step, i) => (
                        <div className="process-section__step" key={i}>
                            <div className="process-section__num">{step.num}</div>
                            <h3 className="process-section__title">{step.title}</h3>
                            <p className="process-section__desc">{step.desc}</p>
                            {i < steps.length - 1 && <div className="process-section__arrow"></div>}
                        </div>
                    ))}
                </div>
                <div className="process-section__footer">
                    <p>⚡ {t("procFooter", "Срок от заявки до поставки: 4-6 месяцев")}</p>
                </div>
            </div>
        </div>
    );
};

export default ProcessSection;
