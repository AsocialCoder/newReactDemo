import React, { useEffect } from "react";
import "../assets/styles/home.scss";
import FullPage from "../components/FullPage/FullPage";
import MenuContent from "../components/Home/MenuContent";

const Home = props => {

  useEffect(() => {
    console.log("useEffect hook ran");
  }, []);

  return (
    <FullPage>
      <div className="Body">
        <MenuContent />
      </div>
    </FullPage>
  );
};

export default Home;
