import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import TodoItem from "./TodoItem";
import ModalWrapper from "./ModalWrapper";
import DialogueBoxButton from "./DialogueBoxButton";

const Todo = ({ todo, todos, setTodos }) => {
  const [editModal, setEditModal] = React.useState(false);
  const [deleteModal, setDeleteModal] = React.useState(false);

  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const checkHendler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
      })
    );
  };

  const editHandler = () => {
    setEditModal(!editModal);
  };

  return (
    <>
      <TodoItem
        key={`task__${todo.id}`}
        className={todo.completed ? "completed" : ""}
      >
        {todo.task}

        <TodoItem.ActionButton
          className="deleteBtn"
          onClick={() => setDeleteModal(true)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </TodoItem.ActionButton>

        <TodoItem.ActionButton>
          <FontAwesomeIcon icon={faEdit} onClick={editHandler} />
        </TodoItem.ActionButton>

        <TodoItem.ActionButton>
          <FontAwesomeIcon icon={faCheck} onClick={checkHendler} />
        </TodoItem.ActionButton>
      </TodoItem>

      {editModal && <ModalWrapper />}
      {deleteModal && (
        <ModalWrapper>
          <ModalWrapper.Modal>
            <h3>Are you sure you want to delete this task?</h3>
            <div>
              <DialogueBoxButton
                buttonClass="acceptBtn"
                text="yes"
                onClick={deleteHandler}
              />
              <DialogueBoxButton
                buttonClass="cancelBtn"
                text="Cancel"
                onClick={() => setDeleteModal(false)}
              />
            </div>
          </ModalWrapper.Modal>
        </ModalWrapper>
      )}
    </>
  );
};

export default Todo;
