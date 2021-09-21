import React from "react";
import "./Logo.css";
import PropTypes from "prop-types";

const Logo = ({ logo }) => {
  return (
    <>
      <img src={logo} alt="Logo" />
    </>
  );
};

Logo.propTypes = {
  logo: PropTypes.element,
};

export default Logo;
