import React from "react";
import { TodosContext } from "../../contexts/TodosContext";
import DeleteConfirmationWrapper from "./style";

function DeleteConfirmationBox({ todo, setIsDeleteModalActive }) {
  const { todos, setTodos } = React.useContext(TodosContext);

  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
    setIsDeleteModalActive(false);
  };

  return (
    <DeleteConfirmationWrapper>
      <h3>Are you sure you want to delete this task?</h3>
      <div>
        <button className="acceptBtn" onClick={deleteHandler}>
          Yes, please :)
        </button>
        <button
          className="cancelBtn"
          onClick={() => setIsDeleteModalActive(false)}
        >
          No, thanks!
        </button>
      </div>
    </DeleteConfirmationWrapper>
  );
}

export default DeleteConfirmationBox;
