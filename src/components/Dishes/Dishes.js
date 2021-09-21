import React from "react";
import "./Dishes.css";
import Dish from "../Dish/Dish";
import { Container } from "react-bootstrap";
import PropTypes from "prop-types";

const Dishes = ({ items, deleteDish, updateDish }) => {
  return (
    <Container>
      <div className="item-grid">
        {items.map((dish) => (
          <div className="item-list">
            <Dish
              key={dish.id}
              dish={dish}
              deleteDish={deleteDish}
              updateDish={updateDish}
            />
          </div>
        ))}
      </div>
    </Container>
  );
};

Dishes.propTypes = {
  items: PropTypes.array,
  deleteDish: PropTypes.func,
  updateDish: PropTypes.func,
};

export default Dishes;
