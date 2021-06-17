import React from "react";
import { Navbar } from "react-bootstrap";

const footer = () => {
  return (
    <div>
      <Navbar className="nav">
        <Navbar.Brand href="">Animate a probar ;)</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Hecho por: <a href="#login">Matias Maruzza - 2021</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default footer;
