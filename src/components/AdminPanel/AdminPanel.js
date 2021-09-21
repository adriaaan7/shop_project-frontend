import React from "react";
import "./AdminPanel.css";
import Header from "../Header/Header";
import AddItem from "../AddItem/AddItem";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import RynekMenu from "../MenuPanel/RynekMenu";
import HaloMenu from "../MenuPanel/HaloMenu";
import Logo from "../Logo/Logo";
import rynekLogo from "../res/rynek.jpg";
import haloLogo from "../res/halo.jpg";

const AdminPanel = () => {
  const [showAddButton, setShowAddButton] = useState(false);

  const [itemsArr, setItems] = useState([]);

  const getItems = async () => {
    const itemsFromBackEnd = await fetchItems();
    setItems(itemsFromBackEnd);
  };

  useEffect(() => {
    getItems();
  }, []);

  const fetchItems = async () => {
    const response = await fetch("http://localhost:8080/menu/all");
    const data = await response.json();

    return data;
  };

  const deleteDish = async (id) => {
    console.log(`Deleting item with ID:${id}`);
    await axios
      .delete(`http://localhost:8080/menu/${id}`)
      .then((res) => console.log(res));

    setItems(itemsArr.filter((item) => item.id !== id));
  };

  const addItemToDB = async (name, price, description, restaurant) => {
    await axios
      .post("http://localhost:8080/menu/add", null, {
        params: {
          name: name,
          price: price,
          description: description,
          menuName: restaurant,
        },
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <Container>
      <div className="admin-header">
        <Header
          title="Adding dishes"
          toggleAddForm={() => {
            setShowAddButton(!showAddButton);
          }}
          showAddButton={showAddButton}
        />
        {showAddButton ? <AddItem addItem={addItemToDB} /> : ""}
      </div>
      <Row>
        <div className="container-admin">
          <Col>
            <div className="menu-container">
              <Logo logo={rynekLogo} />
              <RynekMenu deleteDish={deleteDish}></RynekMenu>
            </div>
          </Col>

          <Col>
            <div className="menu-container">
              <Logo logo={haloLogo} />
              <HaloMenu deleteDish={deleteDish}></HaloMenu>
            </div>
          </Col>
        </div>
      </Row>
    </Container>
  );
};

export default AdminPanel;
