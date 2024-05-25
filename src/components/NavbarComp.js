import React, { useState } from "react";
import "../Styles/main.css"; // Pastikan jalur ini benar
import "../Styles/darkmode.css";
import { Navbar, Nav, Button } from "react-bootstrap";

const NavbarComp = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode); // Toggle dark mode on body
  };

  return (
    <Navbar
      expand="lg"
      className={`navbar-custom ${darkMode ? "dark-mode" : ""}`}
    >
      <Navbar.Brand href="#home" className="brand">
        <div className="firstname">math</div>
        <div className="lastname">tech</div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto text-center">
          <Nav.Link href="integral" className="mx-2">
            Integral
          </Nav.Link>
          <Nav.Link href="limit" className="mx-2">
            Limit
          </Nav.Link>
          <Nav.Link href="derivative" className="mx-2">
            Derivative
          </Nav.Link>
          <Button onClick={toggleDarkMode} className="toggle-button mx-2">
            {darkMode ? "Light Mode" : "Dark Mode"}
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComp;
