import styled from "styled-components";

const EditingFormWrapper = styled.div`
  width: 100%;
  display: block;

  & h3 {
    color: ${({ theme }) => theme.titleColor};
    margin-top: 0;
    margin-bottom: 15px;
  }

  & input,
  & select {
    height: 35px;
    border: 1px solid ${({ theme }) => theme.bgColor};
    transition: all 300ms;
    color: ${({ theme }) => theme.color};
    padding: 5px 10px;
    background: ${({ theme }) => theme.widgetBg};
  }
  & input {
    width: calc(70% - 5px);
    margin-right: 5px;
  }
  & select {
    width: 30%;
  }
  & input:focus,
  & select:focus {
    outline: 0;
  }

  & div {
    display: flex;
    justify-content: space-between;
  }

  & button {
    display: inline-block;
    width: calc(50% - 5px);
    margin-top: 10px;
    border: 0;
    height: 35px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 600;
    color: white;
    transition: all 300ms;
    cursor: pointer;
  }
  & button.cancelBtn {
    background-color: ${({ theme }) => theme.titleColor};
  }
  & button.acceptBtn {
    background-color: ${({ theme }) => theme.bgColor};
  }
  & button:hover {
    opacity: 0.9;
  }
  @media screen and (max-width: 576px) {
    & input,
    & select {
      width: 100%;
      margin: 5px 0;
    }
  }
`;

export default EditingFormWrapper;
