import React from "react";
import Form from "./Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";

const NewTaskForm = ({ todos, setTodos, uniqueId, setUniqueId }) => {
  const [inputValue, setInputValue] = React.useState("");
  const [selectValue, setSelectValue] = React.useState("");

  React.useEffect(() => {
    setUniqueId(uniqueId + 1);
  }, [todos]);

  const submitHandler = (event) => {
    event.preventDefault();
    setTodos([
      ...todos,
      {
        task: inputValue,
        category: selectValue,
        complete: false,
        id: uniqueId,
      },
    ]);

    setInputValue("");
    setSelectValue("");
  };

  const changeInputHandler = ({ target }) => {
    setInputValue(target.value);
  };
  const changeSelectHandler = ({ target }) => {
    setSelectValue(target.value);
  };

  return (
    <Form onSubmit={submitHandler}>
      <input
        value={inputValue}
        type="text"
        placeholder="Add new task"
        id="task"
        onChange={changeInputHandler}
        required
      />
      <select
        id="category"
        onChange={changeSelectHandler}
        required
        value={selectValue}
      >
        <option value=""> --Category-- </option>
        <option value="today">Today</option>
        <option value="tomorrow">Tomorrow</option>
        <option value="upcoming">Upcoming</option>
        <option value="someday">Someday</option>
      </select>
      <button type="submit">
        <FontAwesomeIcon icon={faSave} />
      </button>
    </Form>
  );
};

export default NewTaskForm;
