import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";

const NavBar = () => {
  const { userData,logout } = useContext(AuthContext);
  const history = useHistory();

  return (
    <div className="NavBar">
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/about">About</Link>
      </div>
      <div onClick={()=>{
        if(logout())
          history.push('/login');
      }}>
        <a>Logout</a>
      </div>
      <div>
        <Link to={`/user/${userData.name}`}>
          <img src={require("../../assets/img/16050880.jpeg")} alt="profile" />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
