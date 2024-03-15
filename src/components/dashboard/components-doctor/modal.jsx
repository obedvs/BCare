// import '../../css/additional-styles/modal.css'

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return (
      <div className="rounded-xl">
        <div className="modal-content">
          <span className="close-button" onClick={onClose}>
            &times;
          </span>
          {children}
        </div>
      </div>
    );
  };
  
  export default Modal;