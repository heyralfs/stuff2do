import React from "react";

const Todo = ({ todo }) => {
  // key prop missing
  return <li>{todo.task}</li>;
};

export default Todo;
