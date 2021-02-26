import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyle";
import GitHubCorner from "./components/GitHubCorner";
import Board from "./components/Board";
import Header from "./components/Header";
import TodoList from "./components/TodoList/index";
import NewTaskForm from "./components/NewTaskForm/index";
import { TodosProvider } from "./contexts/TodosContext";

// themes
import themes from "./themes";
import ThemeHandler from "./components/ThemeHandler";

export default function App() {
  const [preferences, setPreferences] = React.useState(() => {
    const themePreference = window.localStorage.getItem("themePreference");
    return themePreference ? JSON.parse(themePreference) : themes.Default;
  });

  React.useEffect(() => {
    window.localStorage.setItem("themePreference", JSON.stringify(preferences));
  }, [preferences]);

  return (
    <div className="App">
      <ThemeProvider theme={preferences}>
        <GlobalStyle />

        <Board>
          <Header />

          <TodosProvider>
            <NewTaskForm />

            <TodoList />
          </TodosProvider>
        </Board>

        <GitHubCorner projectUrl="https://github.com/heyralfs/stuff2do" />

        <ThemeHandler themes={themes} setPreferences={setPreferences} />
      </ThemeProvider>
    </div>
  );
}
