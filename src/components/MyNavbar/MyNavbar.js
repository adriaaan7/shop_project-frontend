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
          <h5>Home</h5>
          <Logo logo={homeLogo} />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/menu">
            <h5>Menu</h5>
            <Logo logo={menuLogo} />
          </Nav.Link>
          <Nav.Link href="/admin">
            <h5>Admin</h5>
            <Logo logo={adminLogo} />
          </Nav.Link>
          <Nav.Link href="/contact">
            <h5>Contact</h5>
            <Logo logo={contactLogo} />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
