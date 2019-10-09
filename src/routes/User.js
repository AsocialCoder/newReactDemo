import React from "react";
import FullPage from "../components/FullPage/FullPage";

const User = ({ match }) => {
  return (
    <FullPage>
      <div className="Body">{match.params.name}</div>
    </FullPage>
  );
};

export default User;
