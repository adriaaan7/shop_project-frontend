import React from "react";
import "./Button.css";
import PropTypes from "prop-types";

const Button = ({ color, text, onClick }) => {
  return (
    <div>
      <button
        className="my-btn"
        onClick={onClick}
        style={{
          backgroundColor: color,
          color: "rgb(0,0,0)",
          fontSize: "1.5rem",
        }}
        type="button"
      >
        {" "}
        {text}{" "}
      </button>
    </div>
  );
};

Button.defaultProps = {
  color: "rgba(168, 168, 168, 0.5)",
  text: "button",
};

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
