import React from "react";
import Form from "./Form";

const NewTaskForm = ({ todos, setTodos }) => {
  const [task, setTask] = React.useState({
    task: "",
    category: "",
    complete: false,
  });

  const submitHandler = (event) => {
    event.preventDefault();
    setTodos([...todos, task]);
  };

  const changeHandler = ({ target }) => {
    const { id, value } = target;
    setTask({ ...task, [id]: value });
  };

  return (
    <Form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Add new task"
        id="task"
        onChange={changeHandler}
        required
      />
      <select id="category" onChange={changeHandler} required>
        <option value=""> --Category-- </option>
        <option value="today">Today</option>
        <option value="tomorrow">Tomorrow</option>
        <option value="upcoming">Upcoming</option>
        <option value="someday">Someday</option>
      </select>
      <button type="submit">Ok</button>
    </Form>
  );
};

export default NewTaskForm;
