import React from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
    <header className="header position-sticky top-0 ">
    <Navbar expand="lg" className="bg-white shadow-sm py-2 headerNav">
      <Container fluid className="customContainer">
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img src={Logo} alt="Logo" className="me-2 img-fluid" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="ms-auto gap-3">
              <Nav.Link as={Link} to="/">Features</Nav.Link>
              <Nav.Link as={Link} to="/">About Us</Nav.Link>
              <Nav.Link as={Link} to="/">Contact Us</Nav.Link>
              <Nav.Link as={Link} to="/terms">Terms of Use</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
    </header>
  );
};

export default Header;