import React, { createContext, useState } from "react";
import openNotification from "../components/Notification/Notification";

export const AuthContext = createContext();

const AuthContextProvider = props => {
  const localUserData = localStorage.getItem("userData");
  console.log(JSON.parse(localUserData));
  const [userData, setUserData] = useState(JSON.parse(localUserData));

  const logout = () =>{
    localStorage.clear();
    setUserData(null);
    openNotification("Bye","See you later")
    return true;
  }

  return (
    <AuthContext.Provider value={{ userData, setUserData,logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
