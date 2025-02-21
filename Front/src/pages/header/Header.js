// src/pages/header/Header.js
import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Assurez-vous d'importer le CSS de Bootstrap
import './Header.css'; // Importez un fichier CSS personnalisé pour des styles supplémentaires

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="custom-navbar">
      <Container>
        {/* Logo ou nom de l'application */}
        <Navbar.Brand href="#home" className="brand-logo">
          My App
        </Navbar.Brand>

        {/* Bouton pour le menu responsive */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggle" />

        {/* Contenu du Navbar */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> {/* Utilisez "ms-auto" pour aligner à droite */}
            <Nav.Link href="#home" className="nav-link">Home</Nav.Link>
            <Nav.Link href="#features" className="nav-link">Features</Nav.Link>
            <Nav.Link href="#pricing" className="nav-link">Pricing</Nav.Link>

            {/* Dropdown */}
            <NavDropdown title="Dropdown" id="basic-nav-dropdown" className="nav-dropdown">
              <NavDropdown.Item href="#action/3.1" className="dropdown-item">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className="dropdown-item">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className="dropdown-item">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" className="dropdown-item">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact" className="nav-link">Contact</Nav.Link>

            {/* Bouton Call-to-Action (CTA) */}
            <Button variant="primary" className="cta-button">
              Get Started
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;