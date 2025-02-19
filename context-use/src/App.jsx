import { createContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserContext from "./components/UserContext";
import OneUser from "./components/oneUser";
import TwoUser from "./components/twoUser";
import ThreeUser from "./components/threeUser";

export const ContextTheme = createContext();

function App() {
  const [count, setCount] = useState("light");

  const theme = () => {
    setCount((current) => {
      current === "light" ? "dark" : "light";
    });
  };

  return (
    <ContextTheme.Provider value={{ count }}>
      <button onClick={theme}>Theme</button>
      <UserContext />
      <OneUser />
      <TwoUser />
      <ThreeUser />
    </ContextTheme.Provider>
  );
}

export default App;
