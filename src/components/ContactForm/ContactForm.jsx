import { useState } from "react";
import { useTranslation } from "react-i18next";
import Toast from "../Toast/Toast";
import "./ContactForm.scss";

const ContactForm = () => {
    const { t, i18n } = useTranslation();
    const [formData, setFormData] = useState({
        name: "",
        tel: "",
        email: "",
        projectType: "",
        capacity: "",
        message: ""
    });
    const [toast, setToast] = useState(null);
    const [loading, setLoading] = useState(false);

    const showToast = (message, type) => {
        setToast({ message, type });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "tel") {
            const filteredValue = value.replace(/[^0-9+]/g, "");
            setFormData((prev) => ({ ...prev, [name]: filteredValue }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        try {
            const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5001";
            const response = await fetch(`${apiUrl}/api/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    source: window.location.pathname || "/",
                    lang: i18n.language,
                }),
            });

            if (response.ok) {
                showToast(t("toastSuccess"), "success");
                setFormData({ name: "", tel: "", email: "", projectType: "", capacity: "", message: "" });
            } else {
                showToast(t("toastError"), "error");
            }
        } catch (error) {
            console.error('Submission error:', error);
            showToast(t("toastNetError"), "error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="contactForm" id="forma">
            <div className="container">
                <div className="online-indicator">
                    <div className="pulse-dot"></div>
                    <span>{t("fOnlineStatus")}</span>
                </div>
                <h2>{t("fOnlineHeader")}</h2>
                <p style={{marginBottom: '20px'}}>{t("fSpecialistWait")}</p>
                
                <div className="contact-trust">
                    <ul>
                        <li>✓ {t("fTrust1", "Отвечаем за 30 минут в рабочее время")}</li>
                        <li>✓ {t("fTrust2", "Бесплатный расчёт без обязательств")}</li>
                        <li>✓ {t("fTrust3", "Конфиденциальность данных гарантирована")}</li>
                        <li>✓ {t("fTrust4", "50+ земснарядов уже работают у клиентов")}</li>
                    </ul>
                </div>

                <form onSubmit={onSubmit}>
                    <div className="form-row">
                        <input
                            type="text"
                            name="name"
                            placeholder={t("fName")}
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder={t("fEmail")}
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-row">
                        <select name="projectType" value={formData.projectType} onChange={handleChange} className="contactSelect">
                            <option value="">{t("fProjectType", "Тип проекта (опционально)")}</option>
                            <option value="sand">{t("fSand", "Добыча песка")}</option>
                            <option value="dredging">{t("fDredging", "Дноуглубление")}</option>
                            <option value="cleaning">{t("fCleaning", "Очистка водоёмов")}</option>
                            <option value="other">{t("fOther", "Другое")}</option>
                        </select>
                        <select name="capacity" value={formData.capacity} onChange={handleChange} className="contactSelect">
                            <option value="">{t("fCapacity", "Требуемая производительность")}</option>
                            <option value="1000">до 1000 м³/ч</option>
                            <option value="2500">1000-2500 м³/ч</option>
                            <option value="4000">2500-4000 м³/ч</option>
                            <option value="4000+">4000+ м³/ч</option>
                        </select>
                    </div>
                    <input
                        type="text"
                        name="tel"
                        placeholder={t("fTel")}
                        value={formData.tel}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder={t("fP3")}
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                    <button type="submit" disabled={loading}>
                        {loading ? t("loading") : t("fButton")}
                    </button>
                </form>
            </div>
            {toast && (
                <Toast
                    message={toast.message}
                    type={toast.type}
                    onClose={() => setToast(null)}
                />
            )}
        </div>
    );
};

export default ContactForm;
