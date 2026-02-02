import BannerVozmImg from '../../assets/video/video15.mp4'

const Modal = ({closeModal5}) => {

  return (
    <div className='modal3' onClick={() => closeModal5()}>
        <div className="modal3__block" onClick={(e) => e.stopPropagation()}>
          <button onClick={() => closeModal5()}>×</button>
            <div className="modal3__block-video">
           <video src={BannerVozmImg} controls></video>
            </div> 
        </div> 
    </div>
  )
}

export default Modal