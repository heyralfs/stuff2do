import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import TodoItem from "./TodoItem";

const Todo = ({ todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  return (
    <>
      <TodoItem key={`task__${todo.id}`}>
        {todo.task}

        <TodoItem.ActionButton className="deleteBtn" onClick={deleteHandler}>
          <FontAwesomeIcon icon={faTrash} />
        </TodoItem.ActionButton>

        <TodoItem.ActionButton>
          <FontAwesomeIcon icon={faEdit} />
        </TodoItem.ActionButton>

        <TodoItem.ActionButton>
          <FontAwesomeIcon icon={faCheck} />
        </TodoItem.ActionButton>
      </TodoItem>
    </>
  );
};

export default Todo;
