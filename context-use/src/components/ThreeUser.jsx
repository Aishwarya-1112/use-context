import React, { useContext } from "react";
import { ContextTheme } from "../App";

const ThreeUser = () => {
  const { count } = useContext(ContextTheme);

  const textStyle = {
    backgroundColor: count === "light" ? "white" : "black",
    color: count === "light" ? "black" : "white",
  };

  return (
    <div>
      <h1 style={textStyle}>three</h1>
    </div>
  );
};

export default ThreeUser;
