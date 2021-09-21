import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useState } from "react";
import haloLogo from "../res/transparent-halo.png";
import Logo from "../Logo/Logo.js";
import homeLogo from "../res/baseline_home_black_24dp.png";
import menuLogo from "../res/baseline_list_black_24dp.png";
import contactLogo from "../res/contact-icon.png";
import adminLogo from "../res/baseline_admin_panel_settings_black_24dp.png";
import css from "./MyNavbar.css";

const MyNavbar = () => {
  return (
    <Navbar className="navbar">
      <Container>
        <Navbar.Brand href="/">
          <Logo logo={homeLogo} />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/menu">
            <Logo logo={menuLogo} />
          </Nav.Link>
          <Nav.Link href="/admin">
            <Logo logo={adminLogo} />
          </Nav.Link>
          <Nav.Link href="/contact">
            <Logo logo={contactLogo} />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
