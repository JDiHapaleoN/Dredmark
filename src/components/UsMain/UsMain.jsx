import { Link } from "react-router-dom"
import section1Img1 from '../../assets/images/usMainSection1Img1.jpg'
import section1Img2 from '../../assets/images/usMainSection1Img2.jpg'
import section1Img3 from '../../assets/images/usMainSection1Img3.jpg'
import section1Img4 from '../../assets/images/usMainSection1Img4.jpg'
import section2Img1 from '../../assets/images/usMainSection2Img1.jpg'
import section3Img from '../../assets/images/usMainSection3Img.jpg'
import video16 from '../../assets/video/video16.mp4'
import video17 from '../../assets/video/video17.mp4'
import video18 from '../../assets/video/video18.mp4'
import video19 from '../../assets/video/video19.mp4'
import mapRussia from '../../assets/images/mapRussia.jpg'
import mapUz from '../../assets/images/mapUz.jpg'
import mapKz from '../../assets/images/mapKz.jpg'
import mapTj from '../../assets/images/mapTj.jpg'
import mapKrg from '../../assets/images/mapKrg.jpg'

import fabricImg1 from '../../assets/images/fabricImg1.jpg'
import fabricImg2 from '../../assets/images/fabricImg2.jpg'
import fabricImg3 from '../../assets/images/fabricImg3.jpg'
import fabricImg4 from '../../assets/images/fabricImg4.jpg'
import fabricImg5 from '../../assets/images/fabricImg5.jpg'
import fabricImg6 from '../../assets/images/fabricImg6.jpg'
import fabricImg7 from '../../assets/images/fabricImg7.jpg'

import { useTranslation } from "react-i18next"
import ContactForm from "../ContactForm/ContactForm"
import RevealSection from "../Common/RevealSection"
const UsMain = () => {
  const { t } = useTranslation()
  return (
    <div className="usMain">
      <div className="nav2">
        <Link to="/" className='nav2__a'>{t('vozmMainNav2Text1')}</Link>
        <p className='nav2__p'>{t('usMainNav2Text2')}</p>
      </div>
      <div className="container">
        <RevealSection>
          <h1 className="usMain__h1">{t('usMainH1')}</h1>
          <div className="usMain__text">
            <p className="usMain__p1">
              {t('usMainSection1P1')}
            </p>
            <p className="usMain__p2">
              {t('usMainSection1P2')}
            </p>
          </div>
        </RevealSection>
        <RevealSection className="usMain__fabric">
          <h2 className="usMain__fabric-title">{t('usMainFabricP1')}</h2>
          <div className="usMain__fabric-images">
            <img src={fabricImg1} alt="" />
            <img src={fabricImg2} alt="" />
            <img src={fabricImg3} alt="" />
            <img src={fabricImg4} alt="" />
            <img src={fabricImg5} alt="" />
            <img src={fabricImg6} alt="" />
            <img src={fabricImg7} alt="" />
          </div>
        </RevealSection>
        <div className="usMain__block">

          <RevealSection className="usMain__block-section1">
            <h2 className="usMain__h2">{t('usMainSection2H2')}</h2>
            <div className="usMain__block-section1-images">
              <img src={section1Img2} alt="" className="usMain__block-section1-images-img" />
              <img src={section1Img3} alt="" className="usMain__block-section1-images-img" />
              <div className="usMain__block-section1-images-box1">
                <img src={section1Img1} alt="" className="usMain__block-section1-images-1" />
                <img src={section1Img4} alt="" className="usMain__block-section1-images-1" />
              </div>
              <video src={video19} controls></video>
            </div>
            <p>{t('usMainSection2P')}</p>
          </RevealSection>
          <div className="usMain__block-section2">
            <h2 className="usMain__h2">{t('usMainSection3H2')}</h2>
            <div className="div">
              <video src={video16} controls></video>
              <div className="usInf">
                <img src={section2Img1} alt="" />
                <p>{t('usMainSection3P')}</p>
              </div>

            </div>

          </div>
          <div className="usMain__block-section6">
            <h2 className="usMain__h2">{t('usMainSection4H2')}</h2>
            <div className="usMain__block-section6-images">
              <video src={video17} controls></video>
              <video src={video18} controls></video>
              <img src={section3Img} alt="" />
            </div>
            <p>{t('usMainSection4P')}</p>
          </div>
          <div className="usMain__block-section7">
            <h2 className="usMain__h2">{t('usMainSection7H2')}</h2>
            <div className="usMain__block-section7-russia">
              <img src={mapRussia} alt="" />
              <div className="table-wrapper">
                <table className="russia-table">
                  <thead>
                    <tr>
                      <th>{t('usMainSection7Title1')}</th>
                      <th>{t('usMainSection7Title2')}</th>
                      <th>{t('usMainSection7Title3')}</th>
                      <th>{t('usMainSection7Title4')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{t('usMainSection7Russia')}</td>
                      <td className="">{t('usMainSection7RussiaCity1')}</td>
                      <td>2000/63 {t('usMainSection7P1')}</td>
                      <td className="">6</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td className="">{t('usMainSection7RussiaCity2')}</td>
                      <td>{t('usMainSection7P2')}</td>
                      <td className="">5</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td className="">{t('usMainSection7RussiaCity3')}</td>
                      <td>1800/31 {t('usMainSection7P3')}</td>
                      <td className="">4</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td className="">{t('usMainSection7RussiaCity4')}</td>
                      <td>3000/71 {t('usMainSection7P1')}</td>
                      <td className="">3</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td className="">{t('usMainSection7RussiaCity5')}</td>
                      <td>1800/31 {t('usMainSection7P3')}</td>
                      <td className="">7</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td className="">{t('usMainSection7RussiaCity6')}</td>
                      <td>1800/31 {t('usMainSection7P1')}</td>
                      <td className="">4</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td className="">{t('usMainSection7RussiaCity7')}</td>
                      <td>1800/31 {t('usMainSection7P1')}</td>
                      <td className="">3</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td className="">{t('usMainSection7RussiaCity8')}</td>
                      <td>1600/25 {t('usMainSection7P1')}</td>
                      <td className="">6</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="usMain__block-section7-russia">
              <div className="table-wrapper">
                <table className="russia-table">
                  <thead>
                    <tr>
                      <th>{t('usMainSection7Title1')}</th>
                      <th>{t('usMainSection7Title2')}</th>
                      <th>{t('usMainSection7Title3')}</th>
                      <th>{t('usMainSection7Title4')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{t('usMainSection7Uz')}</td>
                      <td className="">{t('usMainSection7UzCity1')}</td>
                      <td>1800/31 {t('usMainSection7P1')}</td>
                      <td className="">28</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td className="">{t('usMainSection7UzCity2')}</td>
                      <td>2000/63 {t('usMainSection7P4')}</td>
                      <td className="">10</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td className="">{t('usMainSection7UzCity3')}</td>
                      <td>{t('usMainSection7P5')}</td>
                      <td className="">9</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td className="">{t('usMainSection7UzCity4')}</td>
                      <td>400/20 {t('usMainSection7P1')}</td>
                      <td className="">5</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td className="">{t('usMainSection7UzCity5')}</td>
                      <td>400/20 {t('usMainSection7P1')}</td>
                      <td className="">7</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td className="">{t('usMainSection7UzCity6')}</td>
                      <td>400/20 {t('usMainSection7P1')}</td>
                      <td className="">6</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <img src={mapUz} alt="" />
            </div>
            <div className="usMain__block-section7-russia">
              <img src={mapKz} alt="" />
              <div className="table-wrapper">
                <table className="russia-table">
                  <thead>
                    <tr>
                      <th>{t('usMainSection7Title1')}</th>
                      <th>{t('usMainSection7Title2')}</th>
                      <th>{t('usMainSection7Title3')}</th>
                      <th>{t('usMainSection7Title4')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{t('usMainSection7Kz')}</td>
                      <td className="">{t('usMainSection7KzCity1')}</td>
                      <td>1600/25 {t('usMainSection7P1')}</td>
                      <td className="">5</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td className="">{t('usMainSection7KzCity2')}</td>
                      <td>{t('usMainSection7P6')} 1800/31</td>
                      <td className="">6</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td className="">{t('usMainSection7KzCity3')}</td>
                      <td>1800/31 {t('usMainSection7P1')}</td>
                      <td className="">3</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="usMain__block-section7-russia">
              <div className="table-wrapper">
                <table className="russia-table">
                  <thead>
                    <tr>
                      <th>{t('usMainSection7Title1')}</th>
                      <th>{t('usMainSection7Title2')}</th>
                      <th>{t('usMainSection7Title3')}</th>
                      <th>{t('usMainSection7Title4')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{t('usMainSection7Tj')}</td>
                      <td className="">{t('usMainSection7TjCity')}</td>
                      <td>1800/31 {t('usMainSection7P1')}</td>
                      <td className="">3</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <img src={mapTj} alt="" />
            </div>
            <div className="usMain__block-section7-russia">
              <img src={mapKrg} alt="" />
              <div className="table-wrapper">
                <table className="russia-table">
                  <thead>
                    <tr>
                      <th>{t('usMainSection7Title1')}</th>
                      <th>{t('usMainSection7Title2')}</th>
                      <th>{t('usMainSection7Title3')}</th>
                      <th>{t('usMainSection7Title4')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{t('usMainSection7Krg')}</td>
                      <td className="">{t('usMainSection7KrgCity')}</td>
                      <td>800/40 {t('usMainSection7P3')}</td>
                      <td className="">5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div id='fresh-projects' className="freshBlockContainer">
            <div className="freshBlock">
              <h2 className="usMain__h2">{t('usMainFreshH2')}</h2>
              <div className="freshBlock__info">
                <div className="table-wrapper">
                  <table className="freshBlock__info-table">
                    <thead>
                      <tr>
                        <th><h3 className="freshBlock__info-title">{t('usMainFreshP1')}</h3></th>
                        <th><h3 className="freshBlock__info-title">{t('usMainFreshP2')}</h3></th>
                        <th>{t('usMainFreshP3')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{t('usMainFreshP4')}</td>
                        <td>{t('usMainFreshP5')}</td>
                        <td> <Link to="/img#gMainBox6" className="freshBlock__btn">{t('usMainFreshP3')} »</Link></td>
                      </tr>
                      <tr>
                        <td>4000/65</td>
                        <td>{t('usMainFreshP6')}</td>
                        <td><Link to="/img#gMainBox7" className="freshBlock__btn">{t('usMainFreshP3')} »</Link></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
            <div className="freshBlock">
              <h2 className="usMain__h2">{t('usMainFreshH3')}</h2>
              <div className="freshBlock__info">
                <div className="table-wrapper">
                  <table className="freshBlock__info-table">
                    <thead>
                      <tr>
                        <th><h3 className="freshBlock__info-title">{t('usMainFreshP1')}</h3></th>
                        <th><h3 className="freshBlock__info-title">{t('usMainFreshP2')}</h3></th>
                        <th>{t('usMainFreshP3')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{t('usMainFreshP8')}</td>
                        <td>{t('usMainFreshP9')}</td>
                        <td> <Link to="/img#gMainBox8" className="freshBlock__btn">{t('usMainFreshP3')} »</Link></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="about-seo-info">
            <h3>{t('seoText6')}</h3>
            <p>
              {t('seoText7')}
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default UsMain