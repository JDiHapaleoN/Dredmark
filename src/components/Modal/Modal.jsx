import BannerVozmImg from '../../assets/video/bannerVideo.mp4'

const Modal = ({closeModal}) => {

  return (
    <div className='modal' onClick={() => closeModal()}>
        <div className="modal__block" onClick={(e) => e.stopPropagation()}>
          <button onClick={() => closeModal()}>×</button>
            <div className="modal__block-video">
           <video src={BannerVozmImg} controls></video>
            </div> 
        </div> 
    </div>
  )
}

export default Modal