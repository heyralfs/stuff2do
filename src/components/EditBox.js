import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import DialogueBoxButton from "./DialogueBoxButton";

const EditForm = styled.form`
  width: 100%;
  display: block;
  padding: 0 5px;
  margin-top: 15px;

  input,
  select {
    height: 35px;
    border: 1px solid ${({ theme }) => theme.bgColor};
    transition: all 300ms;
    color: ${({ theme }) => theme.color};
    padding: 5px 10px;
  }
  input {
    width: calc(70% - 5px);
    margin-right: 5px;
  }
  select {
    width: 30%;
  }
  input:focus,
  select:focus {
    outline: 0;
  }
`;

const EditBox = ({ todo, todos, setTodos, editModal, setEditModal }) => {
  const saveIcon = <FontAwesomeIcon icon={faSave} />;
  //separa as demais tasks da que será editada
  const remainingTodos = todos.filter((item) => item.id !== todo.id);

  // define a task a ser editada
  const [todoEdited, setTodoEdited] = React.useState(todo);

  function changeEditInputHandler(e) {
    setTodoEdited({ ...todoEdited, task: e.target.value });
  }
  function changeEditSelectHandler(e) {
    setTodoEdited({ ...todoEdited, category: e.target.value });
  }

  // devolve task editada para o array das tasks
  function submitEdition(e) {
    e.preventDefault();
    setTodos([...remainingTodos, todoEdited]);
    setEditModal(false);
  }

  return (
    <>
      <EditForm onSubmit={submitEdition}>
        <input
          type="text"
          value={todoEdited.task}
          onChange={changeEditInputHandler}
        />
        <select
          id="category"
          required
          onChange={changeEditSelectHandler}
          defaultValue={todoEdited.category}
        >
          <option value="today">Today</option>
          <option value="tomorrow">Tomorrow</option>
          <option value="upcoming">Upcoming</option>
          <option value="someday">Someday</option>
        </select>
      </EditForm>
      <div>
        <DialogueBoxButton
          buttonClass="acceptBtn"
          text={saveIcon}
          onClick={submitEdition}
        />

        <DialogueBoxButton
          buttonClass="cancelBtn"
          text="Cancel"
          onClick={() => setEditModal(false)}
        />
      </div>
    </>
  );
};

export default EditBox;
