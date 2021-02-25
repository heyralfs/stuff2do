import ModalWrapper from "./style";

function Modal({ children }) {
  return (
    <ModalWrapper>
      <div className="modal">{children}</div>
    </ModalWrapper>
  );
}

export default Modal;
