import React from 'react'
import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navbars = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className='nav-container'>
        <div className='nav-name'><Navbar.Brand href="/" style={{color: "#00b4d8",  fontWeight: 800}}>noWorries</Navbar.Brand></div>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto nav-items">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/queue">Queue</Nav.Link>
              <Nav.Link href="#link">Connect With Us</Nav.Link>
              <NavDropdown title="Signed In as: User" id="basic-nav-dropdown"> 
                <NavDropdown.Item href="/my-profile">My Profile</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  )
}

export default Navbars
