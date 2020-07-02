import React from 'react';
import { Navbar, NavDropdown, Nav, Container, Button } from 'react-bootstrap'

function NavBar(props) {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src="https://cdn.iconscout.com/icon/free/png-256/airbnb-1869032-1583156.png" width="50px" height="50px"></img>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Host your home</Nav.Link>
                            <Nav.Link href="#deets">Host an experience</Nav.Link>
                            <Nav.Link href="#deets">Help</Nav.Link>
                            <Nav.Link href="#deets" style={{marginRight:"10px"}}>Log In</Nav.Link>
                            <Button variant="light">Sign Up</Button>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
}

export default NavBar;
