import { useState } from "react";
import { useTranslation } from "react-i18next";

const CACHE_KEY = "usdToRubRate";
const CACHE_DURATION = 10 * 60 * 1000; // 10 минут

const PriceCell = ({ usdPrice }) => {
  const { t } = useTranslation();

  const [showRub, setShowRub] = useState(false);
  const [rubPrice, setRubPrice] = useState(null);
  const [loading, setLoading] = useState(false);

  const convertToRub = async () => {
    setLoading(true);

    try {
      const now = Date.now();
      const cached = JSON.parse(localStorage.getItem(CACHE_KEY));

      let rate;
      if (cached && now - cached.timestamp < CACHE_DURATION) {
        rate = cached.rate;
      } else {
        const res = await fetch("https://v6.exchangerate-api.com/v6/168634509779d71f44406372/latest/USD");

        if (!res.ok) {
          throw new Error("Ошибка запроса к API");
        }

        const data = await res.json();
        if (!data.conversion_rates || !data.conversion_rates.RUB) {
          throw new Error("Курс RUB не найден");
        }

        rate = data.conversion_rates.RUB;
        localStorage.setItem(CACHE_KEY, JSON.stringify({ rate, timestamp: now }));
      }

      const rub = Math.round(usdPrice * rate);
      setRubPrice(rub.toLocaleString("ru-RU") + "₽");
      setShowRub(true);
    } catch (err) {
      console.error("Ошибка при получении курса:", err);
      setRubPrice(t("errorRate") || "Ошибка получения курса");
      setShowRub(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div style={{ fontWeight: "bold", marginBottom: "8px" }}>
        {showRub
          ? `≈ ${rubPrice}`
          : `${t("homePrice")} ${usdPrice.toLocaleString("en-US")}$`}
      </div>

      {showRub ? (
        <button onClick={() => setShowRub(false)} className="priceButton1">
          {t("navLink9")}
        </button>
      ) : (
        <button onClick={convertToRub} disabled={loading} className="priceButton2">
          {loading ? t("loading") : t("valute")}
        </button>
      )}
    </div>
  );
};

export default PriceCell;
