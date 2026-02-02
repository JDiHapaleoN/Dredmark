import BannerVozmImg from '../../assets/images/mainEndCard5Img.jpg'

const Modal = ({closeModal6}) => {

  return (
    <div className='modal3' onClick={() => closeModal6()}>
        <div className="modal3__block" onClick={(e) => e.stopPropagation()}>
          <button onClick={() => closeModal6()}>×</button>
            <div className="modal3__block-video">
           <img src={BannerVozmImg}/>
            </div> 
        </div> 
    </div>
  )
}

export default Modal