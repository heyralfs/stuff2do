import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { TodosContext } from "../../contexts/TodosContext";
import EditingFormWrapper from "./style";

const EditingForm = ({ todo, setIsEditingModalActive }) => {
  const { todos, setTodos } = React.useContext(TodosContext);

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
    setIsEditingModalActive(false);
  }

  return (
    <EditingFormWrapper>
      <h3>Edit your todo</h3>
      <form onSubmit={submitEdition}>
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
      </form>
      <div>
        <button className="acceptBtn" onClick={submitEdition}>
          <FontAwesomeIcon icon={faSave} />
        </button>

        <button
          className="cancelBtn"
          onClick={() => setIsEditingModalActive(false)}
        >
          Cancel
        </button>
      </div>
    </EditingFormWrapper>
  );
};

export default EditingForm;
