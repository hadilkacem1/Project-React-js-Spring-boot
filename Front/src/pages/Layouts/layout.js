// src/components/Layout/Layout.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../header/Header'; // Correct path
import Sidebar from '../sidebar/Sidebar'; // Correct path


const layout = ({ children }) => {
  return (
    <Container fluid className="layout-container">
      <Row>
        {/* Sidebar */}
        <Col xs={2} className="p-0">
          <Sidebar />
        </Col>

        {/* Contenu principal */}
        <Col xs={10} className="p-0">
          <Header />
          <main className="main-content">
            {children} {/* Contenu dynamique des pages */}
          </main>
        </Col>
      </Row>
    </Container>
  );
};

export default layout;