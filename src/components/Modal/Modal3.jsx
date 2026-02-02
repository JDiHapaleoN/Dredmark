import Modal3Video from '../../assets/video/video14.mp4'

const Modal = ({closeModal3}) => {

  return (
    <div className='modal3' onClick={() => closeModal3()}>
        <div className="modal3__block" onClick={(e) => e.stopPropagation()}>
          <button onClick={() => closeModal3()}>×</button>
            <div className="modal3__block-video">
           <video src={Modal3Video} controls></video>
            </div> 
        </div> 
    </div>
  )
}

export default Modal