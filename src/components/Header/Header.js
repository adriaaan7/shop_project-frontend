import React from "react";
import Button from "../Button/Button";
import "./Header.css";
import PropTypes from "prop-types";

const Header = ({ title, toggleAddForm, showAddButton }) => {
  return (
    <header>
      <h1>{title}</h1>
      <Button
        color={showAddButton ? "red" : "green"}
        text={showAddButton ? "Close" : "Add"}
        onClick={toggleAddForm}
      />
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  toggleAddForm: PropTypes.bool,
  showAddButton: PropTypes.bool,
};

export default Header;
