import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import "./UpdateDish.css";
import { Button, Modal, InputGroup, FormControl, Form } from "react-bootstrap";

const UpdateDish = () => {
  const [show, setShow] = useState(true);
  const [dishName, setDishName] = useState("");
  const [dishPrice, setDishPrice] = useState();
  const [dishDescription, setDishDescription] = useState("");
  const [restaurant, setRestaurant] = useState("");

  // retrieving values from Link props from Item component
  const location = useLocation();
  const { dishId, name, price, description, menuName } = location.state;

  useEffect(() => {
    menuName === "Rynek" ? setRestaurant("Rynek") : setRestaurant("Halo");
  }, []);

  const handleClose = () => setShow(false);
  const updateDish = async (id, name, price, description, restaurant) => {
    await axios.put(`http://localhost:8080/menu/${id}`, null, {
      params: {
        name: name,
        price: price,
        description: description,
        menuName: restaurant,
      },
    });
  };

  return (
    <div className="update-dish">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update dish</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div id="warning-message"></div>
          <InputGroup className="mb-3">
            <FormControl
              placeholder={name}
              aria-label="Dish name"
              aria-describedby="basic-addon1"
              value={dishName}
              onChange={(e) => {
                setDishName(e.target.value);
              }}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <FormControl
              aria-label="Price"
              placeholder={price}
              value={dishPrice}
              onChange={(e) => {
                setDishPrice(e.target.value);
              }}
            />
          </InputGroup>

          <InputGroup>
            <FormControl
              as="textarea"
              aria-label="With textarea"
              placeholder={description}
              value={dishDescription}
              onChange={(e) => {
                setDishDescription(e.target.value);
              }}
            />
          </InputGroup>

          <Form.Select
            value={restaurant}
            onChange={(e) => {
              setRestaurant(e.target.value);
            }}
          >
            <option>{menuName}</option>
            {menuName === "Halo" ? (
              <option value="Rynek">Rynek</option>
            ) : (
              <option value="Halo">Halo</option>
            )}
          </Form.Select>
        </Modal.Body>
        <Modal.Footer>
          <Link to="/admin">
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                if (
                  dishName === "" ||
                  dishPrice === undefined ||
                  dishDescription === ""
                ) {
                  console.log("Please provide input for all of the elements");
                } else {
                  updateDish(
                    dishId,
                    dishName,
                    dishPrice,
                    dishDescription,
                    restaurant
                  );
                  window.location.reload(false);
                }
              }}
            >
              Update dish
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UpdateDish;
