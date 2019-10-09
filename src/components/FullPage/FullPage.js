import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const FullPage = props => {
  /* useEffect(() => {
    console.log("useEffect hook ran");
  }, []); */

  const abc = {
    text:"selam"
  }

  return (
    <div className="Container">
      <NavBar />
      {props.children}
      <Footer  {...abc}/>
    </div>
  );
};

export default FullPage;
