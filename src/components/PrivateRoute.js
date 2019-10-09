import React, { useState, useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const PrivateRoute = props => {
  const { userData } = useContext(AuthContext);
  const [isAuthenticated] = useState(
    userData === null || userData.mail === undefined ? false : true
  );
  const Component = props.component;
  const rest = {
    ...props,
    component: undefined
  };

  if (!isAuthenticated) {
    return (
      <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
    );
  }
  return <Route {...rest} render={props => <Component {...props} />} />;
};

export default PrivateRoute;
