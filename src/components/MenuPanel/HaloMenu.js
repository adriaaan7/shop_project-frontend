import React from "react";
import { useState, useEffect } from "react";
import Dishes from "../Dishes/Dishes.js";
import { Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";

const HaloMenu = ({ deleteDish }) => {
  const [menu, setMenu] = useState([]);

  const restaurant = "halo";
  const url = `http://localhost:8080/menu/${restaurant}`;

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    const items = await fetchMenuItems();
    setMenu(items);
  };

  const fetchMenuItems = async () => {
    const itemsFromDatabase = await fetch(url);
    const data = await itemsFromDatabase.json();
    await JSON.parse(JSON.stringify(itemsFromDatabase));
    return data;
  };

  return (
    <Container>
      <Row>
        <Col>
          <div className="item-grid">
            {menu.length > 0 ? (
              <Dishes items={menu} deleteDish={deleteDish} />
            ) : (
              <span class="item-grid-message">No dishes in the menu yet</span>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

HaloMenu.propTypes = {
  deleteDish: PropTypes.func,
};
export default HaloMenu;
