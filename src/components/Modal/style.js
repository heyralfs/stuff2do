import styled from "styled-components";

const ModalWrapper = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1px);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: all 300ms;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 21;

  & div.modal {
    max-width: 90%;
    background: ${({ theme }) => theme.widgetBg};
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
    border: 1px solid ${({ theme }) => theme.bgColor};
  }
`;

export default ModalWrapper;
