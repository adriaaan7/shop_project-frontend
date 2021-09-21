import React from "react";
import "./Dish.css";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

const Dish = ({ dish, deleteDish }) => {
  const [isInAdmin, setIsInAdmin] = useState(true);
  const location = useLocation();

  useEffect(() => {
    checkIfInAdminPanel();
  }, []);

  const checkIfInAdminPanel = () => {
    if (location.pathname === "/admin") {
      setIsInAdmin(true);
    } else {
      setIsInAdmin(false);
    }
  };

  return (
    <div className="item-block">
      <h3>
        <span id="item-name-bold">
          <b>Dish name: </b>
        </span>
        <span id="item-name-notBold">{dish.name} </span>
      </h3>

      <p>
        <b>Description:</b> {dish.description}{" "}
      </p>
      <p>
        <b>Price</b>: {dish.price}{" "}
      </p>
      <p>
        <b>Menu name</b>: {dish.menuName}{" "}
        <span id="remove-button">
          {isInAdmin ? (
            <Link
              to={{
                pathname: "/update",
                state: {
                  dishId: dish.id,
                  name: dish.name,
                  price: dish.price,
                  description: dish.description,
                  menuName: dish.menuName,
                },
              }}
            >
              <Button variant="dark" size="sm" type="submit" onClick={() => {}}>
                Update
              </Button>
            </Link>
          ) : (
            ""
          )}
          <span> </span>
          {isInAdmin ? (
            <Button
              variant="danger"
              size="sm"
              type="submit"
              onClick={() => {
                deleteDish(dish.id);
                window.location.reload(false);
              }}
            >
              Delete
            </Button>
          ) : (
            ""
          )}
        </span>
      </p>
    </div>
  );
};

Dish.propTypes = {
  dish: PropTypes.any,
  deleteDish: PropTypes.func,
};

export default Dish;
