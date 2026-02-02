import { useTranslation } from 'react-i18next'
import BannerVozmImg from '../../assets/images/mainCard3.jpg'
const BannerVozm = () => {

  const { t } = useTranslation()
  return (
    <div className="banner">

      <img src={BannerVozmImg} alt="" />
      <div className="banner__text">
        <h1 className='vozm__h1'>{t('vozmBannerH1')}</h1>
        <p>{t('vozmBannerP')}</p>


      </div>
    </div>
  )
}

export default BannerVozm 