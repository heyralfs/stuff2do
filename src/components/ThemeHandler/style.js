import styled from "styled-components";

export const FloatButton = styled.button`
  position: fixed;
  right: 2%;
  bottom: 3%;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  border: none;
  font-size: 1.2rem;
  line-height: 40px;
  color: ${({ theme }) => theme.widgetBg};
  background: ${({ theme }) => theme.titleColor};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transition: all 100ms;
  cursor: pointer;
  &:hover {
    /* opacity: 0.9; */
    transform: rotate(15deg);
  }
  &:focus {
    outline: 0;
  }
`;

export const ThemeButton = styled.button`
  width: 100%;
  height: 35px;
  border: none;
  text-transform: uppercase;
  font-weight: 600;
  text-align: center;
  padding: 0 20px;
  /* font-size: 14px; */
  cursor: pointer;
  &:focus {
    outline: 0;
  }
  &:not(:last-child) {
    color: ${(props) => props.color};
    border: 1px solid;
    border-bottom: 5px solid;
    background: ${(props) => props.bgColor};
    border-color: ${(props) => props.borderColor};
    margin-bottom: 15px;
  }
  &:last-child {
    color: white;
    border: none;
    background: ${({ theme }) => theme.bgColor};
  }
  &:not(:last-child):hover {
  }
`;

export const Title = styled.h3`
  margin: 0 0 15px;
  color: ${({ theme }) => theme.titleColor};
`;
