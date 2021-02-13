import React from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./globalStyle";
import GitHubCorner from "./components/GitHubCorner";
import Widget from "./components/Widget";
import NewTaskForm from "./components/NewTaskForm";
import TodoList from "./components/TodoList";

export default function App() {
  const defaultPreferences = {
    bgColor: "#5b78c7",
    widgetBg: "#fff",
    titleColor: "lightcoral",
    color: "#777",
  };
  const [preferences, setPreferences] = React.useState(defaultPreferences);
  // to change some theme preference, eg, color, do:
  // setPreferences( { ...preferences, color: 'yellow' } )

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
    <div className="App">
      <ThemeProvider theme={preferences}>
        <GlobalStyle />

        <Widget>
          <Widget.Header>
            <h1>STUFF 2 DO</h1>
            <p style={{ textAlign: "center" }}>
              A to do list build with React by{" "}
              <a href="https://github.com/heyralfs" target="_blank">
                me
              </a>{" "}
              :)
            </p>
          </Widget.Header>

          <Widget.Content>
            <NewTaskForm
              todos={todos}
              setTodos={setTodos}
              uniqueId={uniqueId}
              setUniqueId={setUniqueId}
            />

            <TodoList todos={todos} setTodos={setTodos} />
          </Widget.Content>
        </Widget>

        <GitHubCorner projectUrl="https://github.com/heyralfs/stuff2do" />
      </ThemeProvider>
    </div>
  );
}
