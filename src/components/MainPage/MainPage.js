import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../Button/Button";
import "./MainPage.css";

const MainPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="menu-button">
            <Link to="/menu">
              <Button text="Menu" />
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MainPage;
