import mainEndCard5 from "../../assets/images/mainEndCard5Img.jpg";
import mainEndCard4 from "../../assets/images/mainEndCard1.jpg";
import mainEndCard2 from "../../assets/images/mainEndCard2Img.jpg";
import mainEndCard3 from "../../assets/images/mainEndCard3Img.jpg";
import mainEndCard1 from "../../assets/images/mainCard3.jpg";
import homeImgSw1 from "../../assets/images/homeImgSw1.jpg";
import tableImg1 from "../../assets/images/dredger-200to20.jpg";
import tableImg2 from "../../assets/images/dredger-250to25.jpg";
import tableImg3 from "../../assets/images/dredger-300to30.jpg";
import tableImg4 from "../../assets/images/dredger-400to65.jpg";
import tableImg5 from "../../assets/images/dredger-450to70.jpg";

import realProject1 from "../../assets/images/realProject1.jpg";
import realProject2 from "../../assets/images/realProject2.jpg";
import realProject3 from "../../assets/images/realProject3.jpg";
import realProject4 from "../../assets/images/realProject4.jpg";
import realProject5 from "../../assets/images/realProject5.jpg";
import realProject6 from "../../assets/images/realProject6.jpg";
import realProject7 from "../../assets/images/realProject7.jpg";
import realProject8 from "../../assets/images/realProject8.jpg";
import realProject9 from "../../assets/images/realProject9.jpg";
import realProject12 from "../../assets/images/realProject12.jpg";
import realProject13 from "../../assets/images/realProject13.jpg";

import { useTranslation } from "react-i18next";

import { useState } from "react";
import Modal6 from "../Modal/Modal6";
import Modal5 from "../Modal/Modal5";
import Modal4 from "../Modal/Modal4";
import Modal3 from "../Modal/Modal3";
import Modal2 from "../Modal/Modal2";
import Modal from "../Modal/Modal";
import { Link } from "react-router-dom";
// import PriceCell from '../PriceCell/PriceCell'

const HomeMain = () => {
  const [isModalOpen, setisModalOpen] = useState(false);
  const openModalHandler = () => {
    setisModalOpen(true);
  };
  const closeModalHandler = () => {
    setisModalOpen(false);
  };
  //
  const [isModal2Open, setisModal2Open] = useState(false);
  const openModal2Handler = () => {
    setisModal2Open(true);
  };
  const closeModal2Handler = () => {
    setisModal2Open(false);
  };
  //
  const [isModal3Open, setisModal3Open] = useState(false);
  const openModal3Handler = () => {
    setisModal3Open(true);
  };
  const closeModal3Handler = () => {
    setisModal3Open(false);
  };
  //
  const [isModal4Open, setisModal4Open] = useState(false);
  const openModal4Handler = () => {
    setisModal4Open(true);
  };
  const closeModal4Handler = () => {
    setisModal4Open(false);
  };
  //
  const [isModal5Open, setisModal5Open] = useState(false);
  const openModal5Handler = () => {
    setisModal5Open(true);
  };
  const closeModal5Handler = () => {
    setisModal5Open(false);
  };
  //
  const [isModal6Open, setisModal6Open] = useState(false);
  const openModal6Handler = () => {
    setisModal6Open(true);
  };
  const closeModal6Handler = () => {
    setisModal6Open(false);
  };
  //
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    tel: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const now = new Date().toLocaleString();
    const dataToSend = {
      ...formData,
      subject: `Новое сообщение от ${formData.name} (${now})`,
    };

    try {
      const response = await fetch("https://formspree.io/f/mvganqgv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        alert("Сообщение отправлено");
        setFormData({ name: "", tel: "", message: "" });
      } else {
        alert("Ошибка при отправке. Попробуйте позже.");
      }
    } catch (error) {
      alert("Ошибка сети. Проверьте подключение.");
    }
  };

  return (
    <div className="homeMain">
      <div className="homeBannerText">
        <p>{t("homeText1")}</p>
      </div>
      <div className="container">
        <h2 className="homeMain__h2">{t("homeModelTitle")}</h2>
        <div className="homeMain__table">
          <table className="homeMain__table-styled">
            <thead>
              <tr>
                <th>{t("vozmMainSection8P1")}</th>
                <th>{t("homeTableTitle1")}</th>
                <th>{t("homeTableTitle2")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {/* <td></td> */}
                <td>
                  <img src={tableImg1} alt="" />{" "}
                  <p>{t('homeTableText1')}</p>
                </td>
                <td>2000 м3 {t('homeTableText6')}</td>
                <td>10-13 м</td>
              </tr>
              <tr>
                {/* <td></td> */}
                <td>
                  <img src={tableImg2} alt="" />
                  <p>{t('homeTableText2')}</p>
                </td>
                <td>2500 м3 {t('homeTableText6')}</td>
                <td>10-13 м</td>
              </tr>
              <tr>
                {/* <td></td> */}
                <td>
                  <img src={tableImg3} alt="" />
                  <p>{t('homeTableText3')}</p>
                </td>
                <td>3000 м3 {t('homeTableText6')}</td>
                <td>10-13 м</td>
              </tr>
              {/* <tr>
              <td><img src={tableImg4} alt="" /></td>
              <td>DREDMARK 350C — {t('homeTableText4')}</td>
              <td>1800–2200 м³/ч</td>
              <td>до 12 м</td>
            </tr> */}
              <tr>
                {/* <td></td> */}
                <td>
                  <img src={tableImg4} alt="" />
                  <p>{t('homeTableText4')}</p>
                </td>
                <td>4000 м3 {t('homeTableText6')}</td>
                <td>14 м</td>
              </tr>
              <tr>
                {/* <td></td> */}
                <td>
                  <img src={tableImg5} alt="" />
                  <p>{t('homeTableText5')}</p>
                </td>
                <td>4500м3 {t('homeTableText6')}</td>
                <td>14 м</td>
              </tr>
            </tbody>
          </table>
          <button className="homeMain__table-btn">{t("homeTableBtn")}</button>
        </div>
      </div>
      <div>
        <div className="home__block2">
          <img src={homeImgSw1} alt="" />
          <div className="home__block2-box">
            <h5 className="home__block2-subtitle">{t("homeText3")}</h5>
            <h4 className="home__block2-h4">{t("homeAdvTitle")}</h4>
            {isModal2Open && <Modal2 closeModal2={closeModal2Handler} />}
            <div className="home__block2-content">
              <ul className="home__block2-adv">
                <li>
                  <p className="home__block2-adv-text">
                    <span>✓</span>
                    {t("homeAdvText1")}{" "}
                  </p>
                  <p className="home__block2-adv-subtext">
                    {t("homeAdvText2")}
                  </p>
                </li>

                <li>
                  <p className="home__block2-adv-text">
                    <span>✓</span>
                    {t("homeAdvText3")}
                  </p>
                  <p className="home__block2-adv-subtext">
                    {t("homeAdvText4")}
                  </p>
                </li>
                <li>
                  <p className="home__block2-adv-text">
                    <span>✓</span>
                    {t("homeAdvText5")}
                  </p>
                  <p className="home__block2-adv-subtext">
                    {t("homeAdvText6")}
                  </p>
                </li>
                <li>
                  <p className="home__block2-adv-text">
                    <span>✓</span> {t("homeAdvText7")}
                  </p>
                  <p className="home__block2-adv-subtext">
                    {t("homeAdvText8")}
                  </p>
                </li>
                <li>
                  <p className="home__block2-adv-text">
                    <span>✓</span> {t("homeAdvText9")}
                  </p>
                  <p className="home__block2-adv-subtext">
                    {t("homeAdvText10")}
                  </p>
                </li>
              </ul>

              <button
                className="home__block2-btn"
                onClick={() => openModal2Handler()}
              >
                {t("homeText3Link")}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h3 className="homeMain__box3-h3" id="vozmBlocksBack">
          {t("homeText4")}
        </h3>
        <div className="homeMain__box3">
          <div className="homeMain__box3-card2">
            <img
              src={mainEndCard1}
              alt=""
              className="homeMain__box3-card2-img"
            />
            <p>{t("homeText4Card1")}</p>
            {isModal4Open && <Modal4 closeModal4={closeModal4Handler} />}
            <button
              className="homeMain__end-button"
              onClick={() => openModal4Handler()}
            >
              {t("homeText4CardLink")}
            </button>
            <Link to="/vozm#homeEnd">{t("homeText4CardLink2")}</Link>
          </div>

          <div className="homeMain__box3-card2">
            <img
              src={mainEndCard3}
              alt=""
              className="homeMain__box3-card2-img"
            />
            <p>{t("homeText4Card3")}</p>
            {isModal3Open && <Modal3 closeModal3={closeModal3Handler} />}
            <button
              className="homeMain__end-button"
              onClick={() => openModal3Handler()}
            >
              {t("homeText4CardLink")}
            </button>
            <Link to="/vozm#homeEnd2">{t("homeText4CardLink2")}</Link>
          </div>
          <div className="homeMain__box3-card2">
            <img
              src={mainEndCard4}
              alt=""
              className="homeMain__box3-card2-img"
            />
            <p>{t("homeText4Card4")}</p>
            {isModalOpen && <Modal closeModal={closeModalHandler} />}
            <button
              className="homeMain__end-button"
              onClick={() => openModalHandler()}
            >
              {t("homeText4CardLink")}
            </button>
            <Link to="/vozm#homeEnd3">{t("homeText4CardLink2")}</Link>
          </div>
          <div className="homeMain__box3-card2">
            <img
              src={mainEndCard2}
              alt=""
              className="homeMain__box3-card2-img"
            />
            <p>{t("homeText4Card2")}</p>
            {isModal5Open && <Modal5 closeModal5={closeModal5Handler} />}
            <button
              className="homeMain__end-button"
              onClick={() => openModal5Handler()}
            >
              {t("homeText4CardLink")}
            </button>
            <Link to="/vozm#homeEnd4">{t("homeText4CardLink2")}</Link>
          </div>
          <div className="homeMain__box3-card2">
            <img
              src={mainEndCard5}
              alt=""
              className="homeMain__box3-card2-img"
            />
            <p>{t("homeText4Card5")}</p>
            {isModal6Open && <Modal6 closeModal6={closeModal6Handler} />}
            <button
              className="homeMain__end-button"
              onClick={() => openModal6Handler()}
            >
              {t("homeText4CardLink")}
            </button>
            <Link to="/vozm#homeEnd5">{t("homeText4CardLink2")}</Link>
          </div>
        </div>
      </div>
      <div className="homeMain__realProjects">
        <h2 className="homeMain__realProjects-title">{t('homeRealProjectTitle')}</h2>
        <div className="container">
          <div className="homeMain__realProjects-project1">
            <img src={realProject1} alt="" />
            <ul className="homeMain__realProjects-project1-list">
              <li>
                <div className="project-model">
                  <h3>
                    {t('vozmMainSection8P1')}: <span>DREDMARK 4000</span>
                  </h3>
                </div>
                <p>
                  {t('homeTableTitle1')}: <span>4000м3/час {t('homeTableText6')}</span>
                </p>
                <p>
                  {t('homeRealProjectText1')}: <span> 4-6 мес</span>
                </p>
              </li>
            </ul>
          </div>
          <div className="homeMain__realProjects-project1">
            <img src={realProject2} alt="" />
            <ul className="homeMain__realProjects-project1-list">
              <li>
                <div className="project-model">
                  <h3>
                    {t('vozmMainSection8P1')}: <span>DREDMARK 3500C</span>
                  </h3>
                </div>
                <p>
                  {t('homeTableTitle1')}: <span>3500м3/час {t('homeTableText6')}.</span>
                </p>
                <p>
                  {t('homeTableTitle2')}: <span>22 м</span>
                </p>
                <p>
                  {t('homeRealProjectText1')}: <span> 4-6 мес</span>
                </p>
              </li>
            </ul>
          </div>
          <div className="homeMain__realProjects-project1">
            <img src={realProject3} alt="" />
            <ul className="homeMain__realProjects-project1-list">
              <li>
                <div className="project-model">
                  <h3>
                    {t('vozmMainSection8P1')}: <span>DREDMARK 3500C</span>
                  </h3>
                </div>
                <p>
                  {t('homeTableTitle1')}: <span>3500м3/час {t('homeTableText6')}.</span>
                </p>
                <p>
                  {t('homeRealProjectText6')}: <span>{t('homeRealProjectText7')}</span>
                </p>
                <p>
                  {t('homeRealProjectText8')}: <span>{t('homeRealProjectText9')}</span>
                </p>

              </li>
            </ul>
          </div>
          <div className="homeMain__realProjects-project1">
            <img src={realProject4} alt="" />
            <ul className="homeMain__realProjects-project1-list">
              <li>
                <div className="project-model">
                  <h3>
                    {t('vozmMainSection8P1')}: <span>DREDMARK 2000</span>
                  </h3>
                </div>
                <p>
                  {t('homeTableTitle1')}: <span>2000 м3/ час {t('homeTableText6')}</span>
                </p>
                <p>
                  {t('homeRealProjectText1')}: <span> 4-5 мес</span>
                </p>
              </li>
            </ul>
          </div>
          <div className="homeMain__realProjects-project1">
            <img src={realProject5} alt="" />
            <ul className="homeMain__realProjects-project1-list">
              <li>
                <div className="project-model">
                  <h3>
                    {t('vozmMainSection8P1')}: <span>DREDMARK 2000</span>
                  </h3>
                </div>
                <p>
                  {t('homeTableTitle1')}: <span>2000 м3/ час {t('homeTableText6')}</span>
                </p>
                <p>
                  {t('homeRealProjectText1')}: <span> 4-5 мес</span>
                </p>
              </li>
            </ul>
          </div>
          <div className="homeMain__realProjects-project1">
            <img src={realProject6} alt="" />
            <ul className="homeMain__realProjects-project1-list">
              <li>
                <div className="project-model">
                  <h3>
                    {t('vozmMainSection8P1')}: <span>DREDMARK 2000</span>
                  </h3>
                </div>
                <p>
                  {t('homeTableTitle1')}: <span>2000 м3/ час {t('homeTableText6')}</span>
                </p>
                <p>
                  {t('homeRealProjectText1')}: <span> 4-5 мес</span>
                </p>
              </li>
            </ul>
          </div>
          <div className="homeMain__realProjects-project1">
            <img src={realProject7} alt="" />
            <ul className="homeMain__realProjects-project1-list">
              <li>
                <div className="project-model">
                  <h3>
                    {t('vozmMainSection8P1')}: <span>DREDMARK 2000</span>
                  </h3>
                </div>
                <p>
                  {t('homeTableTitle1')}: <span>2000 м3/ час {t('homeTableText6')}</span>
                </p>
                <p>
                  {t('homeRealProjectText1')}: <span> 4-5 мес</span>
                </p>
              </li>
            </ul>
          </div>
          <div className="homeMain__realProjects-project1">
            <img src={realProject8} alt="" />
            <ul className="homeMain__realProjects-project1-list">
              <li>
                <div className="project-model">
                  <h3>
                    {t('vozmMainSection8P1')}: <span>DREDMARK 350C</span>
                  </h3>
                </div>
                <p>
                  {t('homeTableTitle1')}: <span>2000 м³/ч</span>
                </p>
                <p>
                  {t('homeRealProjectText6')}: <span>126 000 м³</span>
                </p>
                <p>
                  {t('homeRealProjectText4')}: <span>38 дней</span>
                </p>
                <p>
                  {t('homeRealProjectText5')}: <span>расчистка и углубление 4,6 км канала.</span>
                </p>
              </li>
            </ul>
          </div>
          <div className="homeMain__realProjects-project1">
            <img src={realProject9} alt="" />
            <ul className="homeMain__realProjects-project1-list">
              <li>
                <div className="project-model">
                  <h3>
                    {t('vozmMainSection8P1')}: <span>DREDMARK 350C</span>
                  </h3>
                </div>
                <p>
                  {t('homeTableTitle1')}: <span>2000 м³/ч</span>
                </p>
                <p>
                  {t('homeRealProjectText6')}: <span>126 000 м³</span>
                </p>
                <p>
                  {t('homeRealProjectText4')}: <span>38 дней</span>
                </p>
                <p>
                  {t('homeRealProjectText5')}: <span>расчистка и углубление 4,6 км канала.</span>
                </p>
              </li>
            </ul>
          </div>
          <div className="homeMain__realProjects-project1">
            <img src={realProject12} alt="" />
            <ul className="homeMain__realProjects-project1-list">
              <li>
                <div className="project-model">
                  <h3>
                    {t('vozmMainSection8P1')}: <span>DREDMARK 350C</span>
                  </h3>
                </div>
                <p>
                  {t('homeTableTitle1')}: <span>2000 м³/ч</span>
                </p>
                <p>
                  {t('homeRealProjectText6')}: <span>126 000 м³</span>
                </p>
                <p>
                  {t('homeRealProjectText4')}: <span>38 дней</span>
                </p>
                <p>
                  {t('homeRealProjectText5')}: <span>расчистка и углубление 4,6 км канала.</span>
                </p>
              </li>
            </ul>
          </div>
          <div className="homeMain__realProjects-project1">
            <img src={realProject13} alt="" />
            <ul className="homeMain__realProjects-project1-list">
              <li>
                <div className="project-model">
                  <h3>
                    {t('vozmMainSection8P1')}: <span>DREDMARK 350C</span>
                  </h3>
                </div>
                <p>
                  {t('homeTableTitle1')}: <span>2000 м³/ч</span>
                </p>
                <p>
                  {t('homeRealProjectText6')}: <span>126 000 м³</span>
                </p>
                <p>
                  {t('homeRealProjectText4')}: <span>38 дней</span>
                </p>
                <p>
                  {t('homeRealProjectText5')}: <span>расчистка и углубление 4,6 км канала.</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="homeMain__contacts" id="forma">
        <div className="container">
          {/* <h3>{t("fH1")}</h3> */}
          <p>{t("fP2")}</p>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              name="name"
              placeholder={t("fName")}
              value={formData.name}
              onChange={handleChange}
              required
            />
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
            <button type="submit">{t("fButton")}</button>
          </form>
        </div>
      </div>
      <div className="seo">
        <h1>• земснаряд купить</h1>
        <h2>• производство земснарядов</h2>
        <h2>• земснаряд цена</h2>
        <h3>• земснаряд для драгирования</h3>
        <h2>• передвижной земснаряд</h2>
        <h3>• земснаряд для добычи песка</h3>
        <h2>• земснаряд с гидравлическим приводом</h2>
        <h2>• мини земснаряд</h2>
        <h2>• плавающий земснаряд</h2>
        <h2>• земснаряд на шасси</h2>
      </div>
    </div>
  );
};

export default HomeMain;
