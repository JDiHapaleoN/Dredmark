import Modal3Video from '../../assets/video/video13.mp4'

const Modal = ({closeModal4}) => {

  return (
    <div className='modal3' onClick={() => closeModal4()}>
        <div className="modal3__block" onClick={(e) => e.stopPropagation()}>
          <button onClick={() => closeModal4()}>×</button>
            <div className="modal3__block-video">
           <video src={Modal3Video} controls></video>
            </div> 
        </div> 
    </div>
  )
}

export default Modal