import React from "react";
import BoardWrapper from "./style";
import Header from "../Header";
import TodoList from "../TodoList/index";
import NewTaskForm from "../NewTaskForm/index";
import { TodosProvider } from "../../contexts/TodosContext";

function Board() {
  return (
    <BoardWrapper>
      <Header />

      <TodosProvider>
        <NewTaskForm />

        <TodoList />
      </TodosProvider>
    </BoardWrapper>
  );
}

export default Board;
