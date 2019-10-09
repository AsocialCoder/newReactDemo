import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";
import { AuthContext } from "../../contexts/AuthContext";

const Counter = () => {
  const { isLightTheme, light, dark, setLightTheme } = useContext(ThemeContext);
  const { userData } = useContext(AuthContext);
  const theme = isLightTheme ? light : dark;
  const [count, setCount] = useState(0);
  const history = useHistory();

  return (
    <div className="counterContainer" style={{ backgroundColor: theme.bg }}>
      <p style={{ color: theme.syntax, backgroundColor: theme.ui }}>
        You clicked {count} times
      </p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setLightTheme(!isLightTheme)}>change mode</button>
      <button onClick={() => userProfile()}>Profile</button>
      <Link to="/about" style={{ color: "#999", fontSize: "0.9rem" }}>
        About
      </Link>
    </div>
  );
  function userProfile() {
    console.log("here");
    history.push(`/user/${userData.name}`);
  }
};

export default Counter;
