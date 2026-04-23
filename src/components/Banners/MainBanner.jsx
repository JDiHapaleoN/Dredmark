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
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '15px', width: '100%' }}>
          <button onClick={() => {document.getElementById('forma')?.scrollIntoView({ behavior: 'smooth' })}} className="button1" style={{ margin: '0' }}>{t('homeBannersLink')}</button>
          <button onClick={() => {document.getElementById('forma')?.scrollIntoView({ behavior: 'smooth' })}} className="button1" style={{ margin: '0', background: 'rgba(0, 168, 255, 0.2)', borderColor: 'rgba(0, 168, 255, 0.6)' }}>{t('homeBannersCatalog')}</button>
          <button onClick={() => window.open('https://wa.me/998974075793', '_blank')} className="button1" style={{ margin: '0', background: 'rgba(37, 211, 102, 0.2)', borderColor: 'rgba(37, 211, 102, 0.6)' }}>WhatsApp</button>
        </div>
        {isModalOpen && <Modal closeModal={closeModalHandler} />}
      </div>
    </div>
  )
}

export default MainBanner   