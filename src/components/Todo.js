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
    setDeleteModal(false);
  };

  const checkHendler = () => {
    setTodos(
      todos.map((item) => {
        console.log(item);
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
    setEditModal(!editModal);
  };

  return (
    <>
      <TodoItem
        key={`task__${todo.id}`}
        className={todo.completed ? "completed" : ""}
      >
        <TodoItem.TextBox>{todo.task}</TodoItem.TextBox>

        <div style={{ textAlign: "right", width: "100px" }}>
          <TodoItem.ActionButton>
            <FontAwesomeIcon icon={faCheck} onClick={checkHendler} />
          </TodoItem.ActionButton>

          <TodoItem.ActionButton>
            <FontAwesomeIcon icon={faEdit} onClick={editHandler} />
          </TodoItem.ActionButton>

          <TodoItem.ActionButton
            className="deleteBtn"
            onClick={() => setDeleteModal(true)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </TodoItem.ActionButton>
        </div>
      </TodoItem>

      {editModal && (
        <ModalWrapper>
          <ModalWrapper.Modal>
            <h3>"Edit task" is not yet available</h3>
            <DialogueBoxButton
              buttonClass="cancelBtn"
              text="ok :("
              onClick={() => setEditModal(false)}
            />
          </ModalWrapper.Modal>
        </ModalWrapper>
      )}
      {deleteModal && (
        <ModalWrapper>
          <ModalWrapper.Modal>
            <h3>Are you sure you want to delete this task?</h3>
            <div style={{ width: "100%" }}>
              <DialogueBoxButton
                buttonClass="acceptBtn"
                text="yes, please :)"
                onClick={deleteHandler}
              />
              <DialogueBoxButton
                buttonClass="cancelBtn"
                text="no, thanks!"
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
