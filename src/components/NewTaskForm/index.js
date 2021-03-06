import React from "react";
import Form from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { TodosContext } from "../../contexts/TodosContext";

const NewTaskForm = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [selectValue, setSelectValue] = React.useState("");

  const { todos, setTodos, uniqueId, setUniqueId } = React.useContext(
    TodosContext
  );

  const submitHandler = (event) => {
    event.preventDefault();
    setTodos([
      ...todos,
      {
        task: inputValue,
        category: selectValue,
        completed: false,
        id: uniqueId,
      },
    ]);
    setUniqueId(uniqueId + 1);
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
      <button type="submit" title="save">
        <FontAwesomeIcon icon={faSave} />
      </button>
    </Form>
  );
};

export default NewTaskForm;
