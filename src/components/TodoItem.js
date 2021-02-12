import styled from "styled-components";

const TodoItem = styled.li`
  display: inline-block;
  width: 100%;
  padding-left: 15px;
  padding-right: 5px;
  height: 35px;
  line-height: 35px;
  font-size: 14px;
  list-style: none;
  margin-bottom: 5px;
  transition: all 300ms;
  &:hover {
    box-shadow: -1px 2px 3px 1px rgba(0, 0, 0, 0.1);
  }
`;

TodoItem.ActionButton = styled.button`
  height: 25px;
  width: 25px;
  font-size: 12px;
  color: white;
  transition: all 300ms;
  margin-left: 5px;
  top: 5px;
  position: relative;
  float: right;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
  &:focus {
    outline: 0;
  }
  &:not(.deleteBtn) {
    border: 1px solid ${({ theme }) => theme.bgColor};
    background-color: ${({ theme }) => theme.bgColor};
  }
  &.deleteBtn {
    border: 1px solid ${({ theme }) => theme.titleColor};
    background-color: ${({ theme }) => theme.titleColor};
  }
`;

export default TodoItem;
