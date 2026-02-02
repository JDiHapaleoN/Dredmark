import sertifikat from '../../assets/pdf/sertifikat.pdf';
import sertifikat2 from '../../assets/pdf/sertifikat-2.pdf';
import sertifikat3 from '../../assets/pdf/sertifikat-3.pdf';
import sertifikat4 from '../../assets/pdf/sertifikat-4.pdf';
import sertifikatImg from '../../assets/images/pdfImg.jpg'
import sertifikatImg2 from '../../assets/images/pdfImg2.jpg'
import sertifikatImg3 from '../../assets/images/resumeImg3.jpg'
import sertifikatImg4 from '../../assets/images/resumeImg4.jpg'
const Sert = () => {
  return (
    <div className="container">
      <div className="sertificates">

      <div className="pdf-link">
        <a href={sertifikat} target="_blank" rel="noopener noreferrer">
          <img src={sertifikatImg} alt="PDF" style={{ width: '430px', padding: '30px' }} />
        </a>
      </div>
      <div className="pdf-link">
        <a href={sertifikat2} target="_blank" rel="noopener noreferrer">
          <img src={sertifikatImg2} alt="PDF" style={{ width: '430px', padding: '30px' }} />
        </a>
      </div>
      <div className="pdf-link">
        <a href={sertifikat3} target="_blank" rel="noopener noreferrer">
          <img src={sertifikatImg3} alt="PDF" style={{ width: '430px', padding: '30px' }} />
        </a>
      </div>
      <div className="pdf-link">
        <a href={sertifikat4} target="_blank" rel="noopener noreferrer">
          <img src={sertifikatImg4} alt="PDF" style={{ width: '430px', padding: '30px' }} />
        </a>
      </div>
      </div>
    </div>
  )
}

export default Sert