import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "../imgs/LOGOFULL.png";

const navbar = () => {
  return (
    <div>
      <Navbar collapseOnSelect className="nav" expand="lg">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar">
          <Nav className="">
            <Nav.Link href="#index">Inicio</Nav.Link>
            <NavDropdown title="Categorias" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#picantes">
                Burgers picantes
              </NavDropdown.Item>
              <NavDropdown.Item href="#ofertas">
                Ofertas del dia
              </NavDropdown.Item>
              <NavDropdown.Item href="#veggie">#VeggieLife</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#about"> Sobre nosotros</Nav.Link>
          </Nav>
          <Nav className="ml-auto pr-4 bd-highlight">
            <img
              src={logo}
              className="logo d-none d-sm-block d-xs-none d-md-block d-lg-block "
            />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default navbar;
