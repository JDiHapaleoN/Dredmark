import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ContactForm from "../ContactForm/ContactForm";
import ProductTable from "./ProductTable";
import AdvantagesSection from "./AdvantagesSection";
import ProductCategories from "./ProductCategories";
import RealProjects from "./RealProjects";

const HomeMain = () => {
  const { t } = useTranslation();

  // Modal States
  const [isModalOpen, setisModalOpen] = useState(false);
  const [isModal2Open, setisModal2Open] = useState(false);
  const [isModal3Open, setisModal3Open] = useState(false);
  const [isModal4Open, setisModal4Open] = useState(false);
  const [isModal5Open, setisModal5Open] = useState(false);
  const [isModal6Open, setisModal6Open] = useState(false);

  // Modal Handlers
  const openModalHandler = () => setisModalOpen(true);
  const closeModalHandler = () => setisModalOpen(false);
  const openModal2Handler = () => setisModal2Open(true);
  const closeModal2Handler = () => setisModal2Open(false);
  const openModal3Handler = () => setisModal3Open(true);
  const closeModal3Handler = () => setisModal3Open(false);
  const openModal4Handler = () => setisModal4Open(true);
  const closeModal4Handler = () => setisModal4Open(false);
  const openModal5Handler = () => setisModal5Open(true);
  const closeModal5Handler = () => setisModal5Open(false);
  const openModal6Handler = () => setisModal6Open(true);
  const closeModal6Handler = () => setisModal6Open(false);

  return (
    <div className="homeMain">
      <div className="homeBannerText">
        <p>{t("homeText1")}</p>
      </div>

      <ProductTable />

      <AdvantagesSection
        isModal2Open={isModal2Open}
        openModal2Handler={openModal2Handler}
        closeModal2Handler={closeModal2Handler}
      />

      <ProductCategories
        modals={{
          m: isModalOpen,
          m3: isModal3Open,
          m4: isModal4Open,
          m5: isModal5Open,
          m6: isModal6Open
        }}
        handlers={{
          o: openModalHandler, c: closeModalHandler,
          o3: openModal3Handler, c3: closeModal3Handler,
          o4: openModal4Handler, c4: closeModal4Handler,
          o5: openModal5Handler, c5: closeModal5Handler,
          o6: openModal6Handler, c6: closeModal6Handler
        }}
      />

      <RealProjects />

      <ContactForm />

      <div className="seo">
        <h2>{t("seoBuy")}</h2>
        <h2>{t("seoProducer")}</h2>
        <h2>{t("seoPrice")}</h2>
      </div>
    </div>
  );
};

export default HomeMain;
