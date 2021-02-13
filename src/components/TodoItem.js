import styled from "styled-components";

const TodoItem = styled.li`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  width: 100%;
  padding: 5px 5px 5px 15px;
  min-height: 35px;
  overflow-wrap: break-word;
  line-height: 20px;
  font-size: 14px;
  list-style: none;
  margin-bottom: 10px;
  transition: all 300ms;
  &:hover {
    box-shadow: -1px 2px 3px 1px rgba(0, 0, 0, 0.1);
  }
  &.completed {
    color: #ccc;
    text-decoration: line-through;
  }
  &.completed button {
    opacity: 0.5;
  }
  &.completed button:hover {
    opacity: 0.9;
  }
`;

TodoItem.TextBox = styled.div`
  width: calc(100% - 100px);
  padding-right: 5px;
`;

TodoItem.ActionButton = styled.button`
  height: 25px;
  width: 25px;
  font-size: 12px;
  color: white;
  transition: all 300ms;
  cursor: pointer;
  &:not(:first-of-type) {
    margin-left: 5px;
  }
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
