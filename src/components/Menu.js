import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../images/Just Devine Gelato - Solid Colour Logo.pdf (1).png";
import "../styles/Menu.css";

function Menu() {
  return (
    <Navbar
      expand="lg"
      className="custom-navbar"
      style={{ padding: "0px 8px" }}
      sticky="top"
    >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className=" custom-nav ml-auto ">
          <Nav.Link href="/" exact>
            Home
          </Nav.Link>
          <Nav.Link href="/flavours">Flavours</Nav.Link>
          <Nav.Link href="/about-us">About Us</Nav.Link>
          <Nav.Link href="/faqs">FAQs</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Brand href="/" className="ml-auto custom-logo-container">
        <img src={logo} alt="Heladería Logo" className="custom-logo" />
      </Navbar.Brand>
    </Navbar>
  );
}

export default Menu;
