import { useState } from 'react'
import BannerVozmImg from '../../assets/images/mainEndCard1.jpg'
import Modal from '../Modal/Modal'

const BannerPri = () => {
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
                <h1>Чистые, Безопасные И Лучшие Функционирование Воды</h1>
                <p>С правильным инструментом любая работа становится проще</p>
                {isModalOpen && <Modal closeModal={closeModalHandler} />}
            <button className='button1' onClick={() => openModalHandler()}>Смотреть видео</button>
            </div>
        </div>
  )
}

export default BannerPri