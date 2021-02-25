import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

import TodoListItem from "./style";
import Modal from "../Modal";
import { TodosContext } from "../../contexts/TodosContext";
import EditingForm from "../EditingForm";
import DeleteConfirmationBox from "../DeleteConfirmationBox";

const Todo = ({ todo }) => {
  const { todos, setTodos } = React.useContext(TodosContext);

  const [isEditingModalActive, setIsEditingModalActive] = React.useState(false);
  const [isDeleteModalActive, setIsDeleteModalActive] = React.useState(false);

  const checkHendler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        } else {
          return item;
        }
      })
    );
  };

  const editHandler = () => {
    setIsEditingModalActive(!isEditingModalActive);
  };

  return (
    <>
      <TodoListItem
        key={`task__${todo.id}`}
        className={todo.completed ? "completed" : ""}
      >
        <div className="todo-description">{todo.task}</div>

        <div className="buttons-wrapper">
          <button>
            <FontAwesomeIcon icon={faCheck} onClick={checkHendler} />
          </button>

          <button>
            <FontAwesomeIcon icon={faEdit} onClick={editHandler} />
          </button>

          <button
            className="deleteBtn"
            onClick={() => setIsDeleteModalActive(true)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </TodoListItem>

      {isEditingModalActive && (
        <Modal>
          <EditingForm
            todo={todo}
            setIsEditingModalActive={setIsEditingModalActive}
          />
        </Modal>
      )}
      {isDeleteModalActive && (
        <Modal>
          <DeleteConfirmationBox
            todo={todo}
            setIsDeleteModalActive={setIsDeleteModalActive}
          />
        </Modal>
      )}
    </>
  );
};

export default Todo;
