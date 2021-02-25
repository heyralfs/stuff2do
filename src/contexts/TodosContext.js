import React from "react";

export const TodosContext = React.createContext({});

export function TodosProvider({ children }) {
  // check if there is any todo on local storage before setTodos
  const [todos, setTodos] = React.useState(() => {
    const todosLocal = window.localStorage.getItem("todosLocal");
    return todosLocal ? JSON.parse(todosLocal) : [];
  });

  // check if there is any id on local storage before setUniqueId
  const [uniqueId, setUniqueId] = React.useState(() => {
    const lastIdUsed = window.localStorage.getItem("lastIdUsed");
    return lastIdUsed ? lastIdUsed : 0;
  });

  // save todos and last id on localStorage when they uptade
  React.useEffect(() => {
    window.localStorage.setItem("todosLocal", JSON.stringify(todos));
  }, [todos]);
  React.useEffect(() => {
    window.localStorage.setItem("lastIdUsed", uniqueId);
  }, [uniqueId]);

  return (
    <TodosContext.Provider value={{ todos, setTodos, uniqueId, setUniqueId }}>
      {children}
    </TodosContext.Provider>
  );
}
