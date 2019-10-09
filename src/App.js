import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import GeneralProvider from "./contexts/GeneralProvider";
import Home from "./routes/Home";
import Login from "./routes/Login";
import About from "./routes/About";
import User from "./routes/User";
import NotFound from "./routes/NotFound";


const App = () => {
  return (
    <GeneralProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/Home/:name" component={Home} />
          <PrivateRoute exact path="/about" component={About} />
          <PrivateRoute exact path="/user/:name" component={User} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </GeneralProvider>
  );
};

export default App;
