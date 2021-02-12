import React from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./globalStyle";
import GitHubCorner from "./components/GitHubCorner";
import Widget from "./components/Widget";
import NewTaskForm from "./components/NewTaskForm";
import TodoList from "./components/TodoList";

export default function App() {
  const defaultPreferences = {
    submitColor: "#5dd39e",
    bgColor: "#5b78c7",
    widgetBg: "#fff",
    titleColor: "lightcoral",
  };

  const [todos, setTodos] = React.useState([]);

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
              A todo list build with React by{" "}
              <a href="https://github.com/heyralfs" target="_blank">
                me
              </a>{" "}
              :)
            </p>
          </Widget.Header>

          <Widget.Content>
            <NewTaskForm todos={todos} setTodos={setTodos} />

            <TodoList todos={todos} />
          </Widget.Content>
        </Widget>

        <GitHubCorner projectUrl="https://github.com/heyralfs/stuff2do" />
      </ThemeProvider>
    </div>
  );
}
