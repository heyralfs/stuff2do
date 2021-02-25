import styled from "styled-components";

const HeaderWrapper = styled.header`
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

export default HeaderWrapper;
