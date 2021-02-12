import React from "react";
import Todo from "./Todo";
import styled from "styled-components";

const TodoCategoryTitle = styled.h4`
  text-transform: uppercase;
  font-size: 14px;
  border-bottom: 1px solid ${({ theme }) => theme.bgColor};
  padding-left: 5px;
  color: ${({ theme }) => theme.titleColor};
`;

const TodoList = ({ todos, setTodos }) => {
  const categories = ["today", "tomorrow", "upcoming", "someday"];

  function listTodosByCategory(category) {
    const filteredTodos = todos.filter((todo) => todo.category === category);
    return (
      <>
        <TodoCategoryTitle>{category}</TodoCategoryTitle>
        {filteredTodos.map((todo) => (
          <Todo todo={todo} todos={todos} setTodos={setTodos} />
        ))}
      </>
    );
  }

  return <>{categories.map((category) => listTodosByCategory(category))}</>;
};

export default TodoList;
