import { useTranslation } from "react-i18next";
import telegram from "../../assets/images/telegram.svg";
import whatsapp from "../../assets/images/whatsapp.svg";
// import instagram from "../../assets/images/instagram.svg";
// import youTube from "../../assets/images/youtube.svg";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__infomain">
          <h1>DREDMARK GROUP</h1>
          <h3>ООО DREDGER</h3>
          <p>{t("fAddress")}</p>
          <div className="footer__infomain-block">
            <div className="footer__infomain-box1">
              <div className="ft4">
                <h4 className="ft4__p1">{t("fP4")}</h4>
                <div className="ft4__contacts">
                  <a href="https://wa.me/998974075793" target="_blank" rel="noopener noreferrer" className="footer__icon-link">
                    <img src={whatsapp} alt="WhatsApp" />
                  </a>
                  <a href="https://t.me/+998974075793" target="_blank" rel="noopener noreferrer" className="footer__icon-link">
                    <img src={telegram} alt="Telegram" />
                  </a>
                  <a href="tel:+998974075793" className="ft4__phone-link">
                    <span className="ft4__phone">+998 97 407-57-93</span>
                  </a>
                </div>
              </div>
              <div className="ft4">
                <h4 className="ft4__p1">{t("fP5")}</h4>
                <div className="ft4__contacts">
                  <a href="https://wa.me/998901138544" target="_blank" rel="noopener noreferrer" className="footer__icon-link">
                    <img src={whatsapp} alt="WhatsApp" />
                  </a>
                  <a href="https://t.me/+998901138544" target="_blank" rel="noopener noreferrer" className="footer__icon-link">
                    <img src={telegram} alt="Telegram" />
                  </a>
                  <a href="tel:+998901138544" className="ft4__phone-link">
                    <span className="ft4__phone">+998 90 113-85-44</span>
                  </a>
                </div>
              </div>
            </div>
            {/* <div className="footer__infomain-box2">
              <a
                href="https://t.me/TZNMDredmark"
                target="_blank"
                rel="noopener noreferrer"
                className="linkInst"
              >
                <img src={telegram} alt="" />
                Telegram
              </a>
              <a
                href="https://www.instagram.com/dredmark.su?igsh=OGxyMGQxMDA3cXhy"
                target="_blank"
                rel="noopener noreferrer"
                className="linkInst"
              >
                <img src={instagram} alt="" />
                Instagram
              </a>
              <a
                href="https://youtube.com/@dredmark4824?si=wk15PrfzJCvJzkMI"
                target="_blank"
                rel="noopener noreferrer"
                className="linkInst"
              >
                <img src={youTube} alt="" />
                YouTube
              </a>
            </div> */}
          </div>
          <a href="mailto:dredmark.websites@gmail.com" className="linkInst">
            {/* <img src={email} alt="" /> */}
            dredmark.websites@gmail.com
          </a>
          <div className="footer__infomain-box3">
            <h3 className="footer__infomain-box3-h3-1">{t("fP6")}</h3>
            <div className="footer__infomain-box3-comanies">
              <h3 className="footer__infomain-box3-h3-2">ООО DREDGER</h3>
              <h3 className="footer__infomain-box3-h3-3">
                ООО GIDROMEX MONTAJ
              </h3>
            </div>
          </div>
        </div>
        <div className="footer__partners">
          <h3 className="footer__partners-title">{t("fP1")}</h3>
          <div className="footer__partners-item">
            <h4 className="footer__partners-subtitle">{t("fP9")}</h4>
            <div className="footer__partners-contacts">
              <a href="https://wa.me/79106630733" target="_blank" rel="noopener noreferrer" className="footer__icon-link">
                <img src={whatsapp} alt="WhatsApp" />
              </a>
              <a href="https://t.me/+79106630733" target="_blank" rel="noopener noreferrer" className="footer__icon-link">
                <img src={telegram} alt="Telegram" />
              </a>
              <a href="tel:+79106630733" className="footer__partners-phone-link">
                <span className="footer__partners-phone">+7 910 663-07-33</span>
              </a>
            </div>
          </div>
          <div className="footer__partners-item">
            <h4 className="footer__partners-subtitle">{t("fP8")}</h4>
            <div className="footer__partners-contacts">
              <a href="https://wa.me/79097183347" target="_blank" rel="noopener noreferrer" className="footer__icon-link">
                <img src={whatsapp} alt="WhatsApp" />
              </a>
              <a href="https://t.me/+79097183347" target="_blank" rel="noopener noreferrer" className="footer__icon-link">
                <img src={telegram} alt="Telegram" />
              </a>
              <a href="tel:+79097183347" className="footer__partners-phone-link">
                <span className="footer__partners-phone">+7 909 718-33-47</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="seo">
        <h2>• земснаряд Ташкент</h2>
        <h2>• земснаряд Узбекистан</h2>
        <h2>• земснаряд Казахстан</h2>
        <h2>• доставка земснаряда в СНГ</h2>
        <h2>• производство земснарядов Центральная Азия</h2>
      </div>
    </footer>
  );
};

export default Footer;
