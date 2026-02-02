import { useState } from 'react';
import BannerVozmImg from '../../assets/video/bannerVideo.mp4'
import Modal from '../Modal/Modal'
import { useTranslation } from "react-i18next";
// import { Link } from 'react-router-dom';

const MainBanner = () => {
  const [isModalOpen, setisModalOpen] = useState(false)
  const openModalHandler = () => {
    setisModalOpen(true)
  }
  const closeModalHandler = () => {
    setisModalOpen(false)
  }
  const { t } = useTranslation();

  return (
    <div className="banner mainBanner">

      <video src={BannerVozmImg} autoPlay loop muted playsInline />
      <div className="banner__text">
        <p>DREDMARK</p>
        <h1>{t('bannerTitle')}</h1>
        <p>{t('bannerSubtitle')}</p>
        <button onClick={openModalHandler}>{t('homeBannersLink')}</button>
        {isModalOpen && <Modal closeModal={closeModalHandler} />}
      </div>
    </div>
  )
}

export default MainBanner   