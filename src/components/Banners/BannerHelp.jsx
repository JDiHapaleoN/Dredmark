import { useState } from 'react'
import BannerVozmImg from '../../assets/images/vozmBanner.jpg'
import Modal from '../Modal/Modal'

const BannerHelp = () => {
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
            <h1>Поддержка</h1>
            {isModalOpen && <Modal closeModal={closeModalHandler} />}
            <button className='button1' onClick={() => openModalHandler()}>Смотреть видео</button>
        </div>
    </div>
  )
}

export default BannerHelp