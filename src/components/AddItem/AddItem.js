import React from "react";
import { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { FormGroup, FloatingLabel } from "react-bootstrap";
import PropTypes from "prop-types";

const AddItem = ({ addItem }) => {
  const [dishName, setDishName] = useState("");
  const [dishPrice, setDishPrice] = useState();
  const [dishDescription, setDishDescription] = useState("");
  const [restaurant, setRestaurant] = useState("");

  return (
    <Form>
      <Row>
        <FormGroup as={Col} controlId="form-dish-name">
          <FloatingLabel controlId="floatingDishNameLabel" label="Dish name">
            <Form.Control
              type="text"
              placeholder="Enter dish name"
              value={dishName}
              onChange={(e) => {
                setDishName(e.target.value);
              }}
            />
          </FloatingLabel>
        </FormGroup>

        <FormGroup as={Col} controlId="form-dish-price">
          <FloatingLabel controlId="floatingDishPriceLabel" label="Dish price">
            <Form.Control
              type="text"
              placeholder="Enter dish price"
              value={dishPrice}
              onChange={(e) => {
                setDishPrice(e.target.value);
              }}
            />
          </FloatingLabel>
        </FormGroup>
      </Row>

      <Form.Group className="mb-3" controlId="form-dish-description">
        <FloatingLabel
          controlId="floatingDishDescriptionLabel"
          label="Dish description"
        >
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Dish description"
            value={dishDescription}
            onChange={(e) => {
              setDishDescription(e.target.value);
            }}
            style={{ resize: "none", height: "200px" }}
          />
        </FloatingLabel>
        <Form.Select
          value={restaurant}
          onChange={(e) => {
            setRestaurant(e.target.value);
          }}
        >
          <option>Select proper restaurant</option>
          <option value="Rynek">Rynek</option>
          <option value="Halo">Halo</option>
        </Form.Select>
      </Form.Group>

      <Button
        onClick={() => {
          if (
            dishName === "" ||
            dishPrice === undefined ||
            dishDescription === "" ||
            restaurant === ""
          ) {
            console.log("Please provide an input");
          } else {
            addItem(dishName, dishPrice, dishDescription, restaurant);
            window.location.reload(false);
          }
        }}
        variant="dark"
      >
        Add item
      </Button>
    </Form>
  );
};

AddItem.propTypes = {
  addItem: PropTypes.func,
};

export default AddItem;
