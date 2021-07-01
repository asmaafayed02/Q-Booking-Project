import React, { Component } from 'react';
import { Navbar, Nav, Container,  NavDropdown } from 'react-bootstrap';
import './nav.css'

class Navbarr extends Component {
    state = {  }
    render() { 
        return ( 
            <Navbar className='navbar' collapseOnSelect expand="lg">
                <Container>
                <Navbar.Brand  href="#home" ><h3 className='nav-logo'>Q-Booking</h3></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav ">
                    <Nav className="me-auto nav-links" >
                        <Nav.Link href="#" id='left-links'>Home</Nav.Link>
                        <Nav.Link href="#" id='left-links'>About</Nav.Link>
                        <NavDropdown title="Services" id="collasible-nav-dropdown" >
                            <NavDropdown.Item id='dropdown-item' href="#">Resturant</NavDropdown.Item>
                            <NavDropdown.Item id='dropdown-item' href="#">Coffee</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Medical" id="collasible-nav-dropdown" >
                            <NavDropdown.Item id='dropdown-item' href="#">Hospitals</NavDropdown.Item>
                            <NavDropdown.Item id='dropdown-item' href="#">Clinic</NavDropdown.Item>
                            <NavDropdown.Item id='dropdown-item' href="#">Pharamacy</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        <Nav>
                        
                        <Nav.Link eventKey={2} href="#" id='left-links'>
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
         );
    }
}
 
export default Navbarr;