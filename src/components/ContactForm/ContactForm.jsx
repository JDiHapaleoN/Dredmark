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
        message: "",
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
                setFormData({ name: "", tel: "", email: "", message: "" });
            } else {
                showToast(t("toastError"), "error");
            }
        } catch (error) {
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
                <p>{t("fSpecialistWait")}</p>
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
                        required
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
