import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos }) => {
  const categories = ["today", "tomorrow", "upcoming", "someday"];

  function listTodosByCategory(category) {
    const filteredTodos = todos.filter((todo) => todo.category === category);
    return (
      <>
        <h4>{category}</h4>
        <ul>
          {filteredTodos.map((todo) => (
            <Todo todo={todo} />
          ))}
        </ul>
      </>
    );
  }

  return <>{categories.map((category) => listTodosByCategory(category))}</>;
};

export default TodoList;
