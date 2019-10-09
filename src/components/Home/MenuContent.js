import React, { useContext, useState } from "react";
import { Icon } from "antd";
import "antd/dist/antd.css";
import { Route, Link } from "react-router-dom";
import routes from "./MenuRouter";
import { AuthContext } from "../../contexts/AuthContext";

const MenuContent = () => {
  const { userData } = useContext(AuthContext);
  const [selectedMenu, setSelectedMenu] = useState(0);

  const menuRender = routes.map((route, index) => {
    if (route.role !== userData.role) return null;
    return (
      <Link
        key={index}
        to={route.path}
        className="menuElement"
        onClick={() => setSelectedMenu(index)}
        style={
          selectedMenu === index
            ? { backgroundColor: "#1890ff", color: "white" }
            : null
        }
      >
        <Icon type={route.icon} className="Icon" />
        {route.name}
      </Link>
    );
  });

  const menuComponentRender = routes.map((route, index) => {
    if (route.role !== userData.role) return null;
    return (
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        component={route.main}
      />
    );
  });

  return (
    <div className="menuContainer">
      <div className="leftArea">{menuRender}</div>
      <div className="rightArea">{menuComponentRender}</div>
    </div>
  );
};

export default MenuContent;
