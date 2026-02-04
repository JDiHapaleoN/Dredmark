import { useState } from "react"
import ModalImg1 from "../Modal/ModalImg1"
import cardImg1 from '../../assets/images/mainCard1.jpg'
import cardImg2 from '../../assets/images/mainCard2.jpg'
import cardImg3 from '../../assets/images/mainCard3.jpg'
import cardImg4 from '../../assets/images/vozmMainSection6Img.jpg'
import cardImg5 from '../../assets/images/vozmMainSection7Img.jpg'
import cardImg6 from '../../assets/images/vozmSection2Img2.jpg'
import cardImg7 from '../../assets/images/mainEndCard2.jpg'

import block2Img1 from '../../assets/images/gM3Block2Img1.jpg'
import block2Img2 from '../../assets/images/gM3Block2Img2.jpg'
import block2Img3 from '../../assets/images/gM3Block2Img3.jpg'
import block2Img4 from '../../assets/images/mainEndCard3Img.jpg'
import block2Img5 from '../../assets/images/gM3Block2Img4.jpg'
import block2Img6 from '../../assets/images/gM3Block2Img5.jpg'

import block3Img1 from '../../assets/images/gM3Block3Img1.jpg'
import block3Img2 from '../../assets/images/gM3Block3Img2.jpg'
import block3Img3 from '../../assets/images/gM3Block3Img3.jpg'
import block3Img4 from '../../assets/images/gM3Block3Img4.jpg'
import block3Img5 from '../../assets/images/gM3Block3Img5.jpg'
import block3Img6 from '../../assets/images/gM3Block3Img6.jpg'
import block3Img7 from '../../assets/images/gM3Block3Img7.jpg'
import block3Img8 from '../../assets/images/mainEndCard1.jpg'

import block4Img1 from '../../assets/images/gM3Block4Img1.jpg'
import block4Img2 from '../../assets/images/gM3Block4Img2.jpg'
import block4Img3 from '../../assets/images/gM3Block4Img3.jpg'
import block4Img4 from '../../assets/images/gM3Block4Img4.jpg'
import block4Img5 from '../../assets/images/gM3Block4Img5.jpg'
import block4Img6 from '../../assets/images/gM3Block4Img6.jpg'
import block4Img7 from '../../assets/images/gM3Block4Img7.jpg'
import block4Img8 from '../../assets/images/gM3Block4Img8.jpg'
import block4Img9 from '../../assets/images/mainEndCard2Img.jpg'

import block5Img1 from '../../assets/images/gM3Block5Img1.jpg'
import block5Img2 from '../../assets/images/gM3Block5Img2.jpg'
import block5Img3 from '../../assets/images/gM3Block5Img3.jpg'
import block5Img4 from '../../assets/images/gM3Block5Img4.jpg'
import block5Img5 from '../../assets/images/gM3Block5Img5.jpg'
import block5Img6 from '../../assets/images/gM3Block5Img6.jpg'
import block5Img7 from '../../assets/images/gM3Block5Img7.jpg'
import block5Img8 from '../../assets/images/gM3Block5Img8.jpg'
import block5Img9 from '../../assets/images/gM3Block5Img9.jpg'
import block5Img10 from '../../assets/images/gM3Block5Img10.jpg'
import block5Img11 from '../../assets/images/gM3Block5Img11.jpg'
import block5Img12 from '../../assets/images/gM3Block5Img12.jpg'

import block6Img1 from '../../assets/images/gM3Block6Img1.jpg'
import block6Img2 from '../../assets/images/gM3Block6Img2.jpg'
import block6Img3 from '../../assets/images/gM3Block6Img3.jpg'
import block6Img4 from '../../assets/images/gM3Block6Img4.jpg'
import block6Img5 from '../../assets/images/gM3Block6Img5.jpg'
import block6Img6 from '../../assets/images/gM3Block6Img6.jpg'
import block6Img7 from '../../assets/images/gM3Block6Img7.jpg'
import block6Img8 from '../../assets/images/gM3Block6Img8.jpg'
import block6Img9 from '../../assets/images/gM3Block6Img9.jpg'
import block6Img10 from '../../assets/images/gM3Block6Img10.jpg'
import block6Img11 from '../../assets/images/gM3Block6Img11.jpg'
import block6Img12 from '../../assets/images/gM3Block6Img12.jpg'

import block7Img1 from '../../assets/images/gM3Block7Img1.jpg'
import block7Img2 from '../../assets/images/gM3Block7Img2.jpg'
import block7Img3 from '../../assets/images/gM3Block7Img3.jpg'
import block7Img4 from '../../assets/images/gM3Block7Img4.jpg'
import block7Img5 from '../../assets/images/gM3Block7Img5.jpg'
import block7Img6 from '../../assets/images/gM3Block7Img6.jpg'
import block7Img7 from '../../assets/images/gM3Block7Img7.jpg'


import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import ContactForm from "../ContactForm/ContactForm"
import SEO from "../Common/SEO"
const imagesGm3Block1 = [
  cardImg1,
  cardImg3,
  cardImg4,
  cardImg7,
  cardImg2,
  cardImg5,
  cardImg6,
];
const imagesGm3Block2 = [
  block2Img4,
  block2Img1,
  block2Img2,
  block2Img3,
  block2Img5,
  block2Img6,
  block3Img1,
  block3Img2,
  block3Img3,
  block3Img4,
  block3Img5,
];
const imagesGm3Block3 = [
  block3Img6,
  block3Img7,
  block3Img8,
];
const imagesGm3Block4 = [
  block4Img9,
  block4Img1,
  block4Img2,
  block4Img3,
  block4Img4,
  block4Img5,
  block4Img6,
  block4Img7,
  block4Img8,
];
const imagesGm3Block5 = [
  block5Img1,
  block5Img2,
  block5Img3,
  block5Img4,
  block5Img5,
  block5Img6,
  block5Img7,
  block5Img8,
  block5Img9,
  block5Img10,
  block5Img11,
  block5Img12,
];
const imagesGm3Block6 = [
  block6Img1,
  block6Img2,
  block6Img3,
  block6Img4,
  block6Img5,
  block6Img6,
  block6Img7,
  block6Img8,
  block6Img9,
  block6Img10,
  block6Img11,
  block6Img12,

];
const imagesGm3Block7 = [
  block7Img1,
  block7Img2,
  block7Img3,
  block7Img4,
  block7Img5,
  block7Img6,
  block7Img7,

];


const GMain3 = () => {

  const { t } = useTranslation()
  const [modalImages, setModalImages] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalImg1Open, setisModalImg1Open] = useState(false);

  // Функция открытия модального окна с передачей нужного массива и индекса
  const openModalImg1Handler = (index, imagesArray) => {
    setModalImages(imagesArray);
    setActiveIndex(index);
    setisModalImg1Open(true);
  };

  // Функция закрытия модального окна
  const closeModalImg1Handler = () => {
    setisModalImg1Open(false);
  };
  return (
    <div className="gMain3">
      <SEO
        title={t("seoTitleGallery")}
        description={t("seoDescGallery")}
        url="/img"
      />
      {isModalImg1Open && (
        <ModalImg1
          closeModalImg1={closeModalImg1Handler}
          images={modalImages}
          activeIndex={activeIndex}
        />
      )}
      <div className="nav2">
        <Link to="/" className='nav2__a'>{t('vozmMainNav2Text1')} </Link>
        <p className='nav2__p'>» {t('gMain3Text1')}</p>
      </div>
      <div className="container">
        <h2 className="gMain3__h1">{t('gMain3Text2')}</h2>
        <div className="gMain3__images">


          {imagesGm3Block1.map((img, index) => (
            <button key={index} onClick={() => openModalImg1Handler(index, imagesGm3Block1)}>
              <img src={img} alt={`Image ${index + 1}`} className="gMain3__img1" />
            </button>
          ))}
        </div>
        <h2 className="gMain3__h1">{t('homeText4Card3')}</h2>
        <div className="gMain3__images">


          {imagesGm3Block2.map((img, index) => (
            <button key={index} onClick={() => openModalImg1Handler(index, imagesGm3Block2)}>
              <img src={img} alt={`Image ${index + 1}`} className="gMain3__img1" />
            </button>
          ))}
        </div>
        <h2 className="gMain3__h1">{t('homeText4Card4')}</h2>
        <div className="gMain3__images">


          {imagesGm3Block3.map((img, index) => (
            <button key={index} onClick={() => openModalImg1Handler(index, imagesGm3Block3)}>
              <img src={img} alt={`Image ${index + 1}`} className="gMain3__img1" />
            </button>
          ))}
        </div>
        <h2 id='gMainBox4' className="gMain3__h1">{t('homeText4Card2')}</h2>
        <div className="gMain3__images">


          {imagesGm3Block4.map((img, index) => (
            <button key={index} onClick={() => openModalImg1Handler(index, imagesGm3Block4)}>
              <img src={img} alt={`Image ${index + 1}`} className="gMain3__img1" />
            </button>
          ))}
        </div>
        <h2 className="gMain3__h1">{t('gMain3Text3')}</h2>
        <div className="gMain3__images">
          {imagesGm3Block5.map((img, index) => (
            <button key={index} onClick={() => openModalImg1Handler(index, imagesGm3Block5)}>
              <img src={img} alt={`Image ${index + 1}`} className="gMain3__img1" />
            </button>
          ))}
        </div>
        <h2 id='gMainBox6' className="gMain3__h1">{t('gM3FreshH1')}</h2>
        <div className="gMain3__images">
          {imagesGm3Block6.map((img, index) => (
            <button key={index} onClick={() => openModalImg1Handler(index, imagesGm3Block6)}>
              <img src={img} alt={`Image ${index + 1}`} className="gMain3__img1" />
            </button>
          ))}
          <Link to='/us#fresh-projects' className="nav2__a">« {t('gM3FreshH2')}</Link>
        </div>
        <h2 id='gMainBox7' className="gMain3__h1">{t('gM3FreshH3')}</h2>
        <div className="gMain3__images">
          {imagesGm3Block7.map((img, index) => (
            <button key={index} onClick={() => openModalImg1Handler(index, imagesGm3Block7)}>
              <img src={img} alt={`Image ${index + 1}`} className="gMain3__img1" />
            </button>
          ))}
          <Link to='/us#fresh-projects' className="nav2__a">« {t('gM3FreshH2')}</Link>
        </div>
      </div>
      <ContactForm />
    </div>
  )
}

export default GMain3 