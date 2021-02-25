import React from "react";
import TodoItem from "../TodoItem";
import TodoListWrapper from "./style";
import { TodosContext } from "../../contexts/TodosContext";

const TodoList = () => {
  const categories = ["today", "tomorrow", "upcoming", "someday"];

  const { todos, setTodos } = React.useContext(TodosContext);

  function listTodosByCategory(category) {
    const filteredTodos = todos.filter((todo) => todo.category === category);
    return (
      <TodoListWrapper>
        <h4>{category}</h4>
        <ul>
          {filteredTodos.map((todo) => (
            <TodoItem todo={todo} />
          ))}
        </ul>
      </TodoListWrapper>
    );
  }

  return <>{categories.map((category) => listTodosByCategory(category))}</>;
};

export default TodoList;
