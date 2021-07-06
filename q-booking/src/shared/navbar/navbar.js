import { Navbar, Nav, Container,  NavDropdown } from 'react-bootstrap';
import './nav.css';
import {NavLink} from 'react-router-dom';

const Navbarr =()=> {
        return ( 
            <Navbar className='navbar sticky-top' collapseOnSelect expand="lg">
                <Container>
                <Navbar.Brand  href="#home" ><h1 className='nav-logo'>Q-Booking</h1></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav " className="justify-content-end">
                    <Nav className="me-auto nav-links " >
                        <Nav.Link as={NavLink} to='/home' id='left-links' >Home </Nav.Link>
                        <Nav.Link as={NavLink} to='/about' id='left-links'>About</Nav.Link>
                        <NavDropdown title="Services" id="collasible-nav-dropdown" >
                            <NavDropdown.Item as={NavLink} to='/resturant' id='dropdown-item' >Resturant</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to ="/coffee" id='dropdown-item'>Coffes</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Medical" id="collasible-nav-dropdown" >
                            <NavDropdown.Item as={NavLink} to ="/hospital" id='dropdown-item'>Hospitals</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to ="/clinc" className='dropdown-item'>Clinic</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        <Nav>
                        
                        <Nav.Link eventKey={2} as={NavLink} to ="/sign" id='left-links' >
                           Sign in
                     
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
         )
        
    }
 
export default Navbarr;