import Modal2Video from '../../assets/video/modal2Video.mp4'
const Modal = ({closeModal2}) => {

    return (
      <div className='modal' onClick={() => closeModal2()}>
          <div className="modal__block" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => closeModal2()}>×</button>
              <div className="modal__block-video">
              <video src={Modal2Video} controls/>
              </div> 
          </div>
      </div>
    )
  }
  
  export default Modal