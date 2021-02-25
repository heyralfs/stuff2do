import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyle";
import GitHubCorner from "./components/GitHubCorner";
import Board from "./components/Board";

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

  return (
    <div className="App">
      <ThemeProvider theme={preferences}>
        <GlobalStyle />

        <Board />

        <GitHubCorner projectUrl="https://github.com/heyralfs/stuff2do" />
      </ThemeProvider>
    </div>
  );
}
