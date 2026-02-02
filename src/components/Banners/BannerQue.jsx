import { useState } from 'react'
import BannerVozmImg from '../../assets/images/vozmBanner.jpg'
import Modal from '../Modal/Modal'

const BannerQue = () => {
  const [isModalOpen, setisModalOpen] = useState(false)
  const openModalHandler = () => {
    setisModalOpen(true)
  }
  const closeModalHandler = () => {
    setisModalOpen(false)
  }
  return (
    <div className="banner">
        
        <img src={BannerVozmImg} alt="" />
        <div className="banner__text">
            <h1>Часто Задаваемые Вопросы О Технологии Watermaster</h1>
            {isModalOpen && <Modal closeModal={closeModalHandler} />}
            <button className='button1' onClick={() => openModalHandler()}>Смотреть видео</button>
        </div>
    </div>
  )
}

export default BannerQue