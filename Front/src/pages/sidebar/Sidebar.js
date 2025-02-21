// src/components/Sidebar/Sidebar.js
import React from 'react';
import { Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importez le CSS de Bootstrap
import './Sidebar.css'; // Importez un fichier CSS personnalisé

const Sidebar = () => {
  return (
    <Container fluid className="sidebar-container">
      <Nav defaultActiveKey="/home" className="flex-column sidebar-nav">
        {/* Logo ou titre du Sidebar */}
        <div className="sidebar-header">
          <h3 className="sidebar-title">My App</h3>
        </div>

        {/* Liens de navigation */}
        <Nav.Link href="/home" className="sidebar-link">
          <i className="fas fa-home sidebar-icon"></i> Home
        </Nav.Link>
        <Nav.Link href="/dashboard" className="sidebar-link">
          <i className="fas fa-tachometer-alt sidebar-icon"></i> Dashboard
        </Nav.Link>
        <Nav.Link href="/ListUsers" className="sidebar-link">
          <i className="fas fa-folder sidebar-icon"></i> Utilisateurs
        </Nav.Link>
        <Nav.Link href="/settings" className="sidebar-link">
          <i className="fas fa-cog sidebar-icon"></i> Settings
        </Nav.Link>

        {/* Séparateur */}
        <div className="sidebar-divider"></div>

        {/* Liens supplémentaires */}
        <Nav.Link href="/help" className="sidebar-link">
          <i className="fas fa-question-circle sidebar-icon"></i> Help
        </Nav.Link>
        <Nav.Link href="/logout" className="sidebar-link">
          <i className="fas fa-sign-out-alt sidebar-icon"></i> Logout
        </Nav.Link>
      </Nav>
    </Container>
  );
};

export default Sidebar;