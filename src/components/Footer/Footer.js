import React from "react";
import PropTypes from "prop-types";

const Footer = (props) => {
  return <div className="Footer">{props.text}</div>;
};

Footer.propTypes = {
  text: PropTypes.string,
};

Footer.defaultProps = {
  text: "Created by KNS",
};

export default Footer;
