import styled from "styled-components";

const TodoListWrapper = styled.div`
  & h4 {
    text-transform: uppercase;
    font-size: 14px;
    border-bottom: 1px solid ${({ theme }) => theme.bgColor};
    padding-left: 5px;
    color: ${({ theme }) => theme.titleColor};
  }
  & ul {
    display: flex;
    flex-direction: column-reverse;
    padding: 0;
  }
`;

export default TodoListWrapper;
