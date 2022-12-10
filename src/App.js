import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import FunctionComponent from "./FunctionContextComponent";
import ClassContextComponent from "./ClassContextComponent";
export const ThemeContext = React.createContext();

function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  return (
    <div className="App">
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>ToggleTheme</button>
        <FunctionComponent />
        <ClassContextComponent />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
