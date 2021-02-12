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

  // alterar lógica quando usar localStorge
  const [todos, setTodos] = React.useState([]);
  const [uniqueId, setUniqueId] = React.useState(0);

  // to change some theme preference, eg, color, do:
  // setPreferences( { ...preferences, color: 'yellow' } )

  const [preferences, setPreferences] = React.useState(defaultPreferences);

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
