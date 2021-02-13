import styled from "styled-components";

const Widget = styled.div`
  margin: auto;
  border: 1px solid ${({ theme }) => theme.widgetBg};
  background-color: ${({ theme }) => theme.widgetBg};
  overflow: hidden;
  width: 100%;
  min-height: 90vh;
  max-width: 768px;
  box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.5);
  h1,
  h2,
  h3 {
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 1;
    margin-bottom: 5px;
    color: ${({ theme }) => theme.titleColor};
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
  @media screen and (max-width: 576px) {
    min-height: 100vh;
    padding-top: 10px;
  }
`;

Widget.Header = styled.header`
  padding: 18px 32px;
  * {
    margin: 0;
  }
  p,
  a {
    font-size: 12px;
    color: ${({ theme }) => theme.titleColor};
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  @media screen and (max-width: 576px) {
    padding: 24px 16px 16px 16px;
  }
`;

export default Widget;
