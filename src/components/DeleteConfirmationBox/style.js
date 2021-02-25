import styled from "styled-components";

const DeleteConfirmationWrapper = styled.div`
  width: 100%;
  display: block;

  & h3 {
    color: ${({ theme }) => theme.titleColor};
    margin-top: 0;
    margin-bottom: 15px;
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
    & div {
      flex-direction: column;
    }
    & button {
      width: 100%;
      margin: 5px 0;
    }
  }
`;

export default DeleteConfirmationWrapper;
