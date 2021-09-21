import React from "react";
import RynekMenu from "./RynekMenu";
import HaloMenu from "./HaloMenu.js";
import { Col, Container, Row } from "react-bootstrap";
import "./MenuPanel.css";

const MenuPanel = () => {
  return (
    <Container>
      <Row className="menu-panel">
        <Col md={true}>
          <div className="menu-name">
            <h1>Pizza Rynek</h1>
          </div>
          <RynekMenu></RynekMenu>
        </Col>

        <Col md={true}>
          <div className="menu-name">
            <h1>Halo Pizza</h1>
          </div>
          <HaloMenu></HaloMenu>
        </Col>
      </Row>
    </Container>
  );
};

export default MenuPanel;
