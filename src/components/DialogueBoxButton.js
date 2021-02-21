import styled from "styled-components";

const BoxButton = styled.button`
  width: 200px;
  margin: 20px 5px;
  border: 0;
  height: 35px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  color: white;
  transition: all 300ms;
  cursor: pointer;
  &.cancelBtn {
    background-color: ${({ theme }) => theme.titleColor};
  }
  &.acceptBtn {
    background-color: ${({ theme }) => theme.bgColor};
  }
  &:hover {
    opacity: 0.9;
  }
  @media screen and (max-width: 576px) {
    width: 100%;
    margin: 5px 0;
  }
`;
const DialogueBoxButton = ({ buttonClass, text, onClick }) => {
  return (
    <BoxButton className={buttonClass} onClick={onClick}>
      {text}
    </BoxButton>
  );
};
export default DialogueBoxButton;
