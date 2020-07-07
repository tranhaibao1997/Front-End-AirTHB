import React from "react";
import { Navbar, NavDropdown, Nav, Container, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { StoreContext } from "../../ThemeContext";

import Axios from "axios";

function NavBar(props) {
  let history = useHistory();
  let token = localStorage.getItem("token");
  let { currentUser } = React.useContext(
    StoreContext
  );

  async function getCurrentUser() {
  
    let res = await Axios.get(
      "https://airthb-group6.herokuapp.com/auth/me",
     
    );
    console.log(res,"data");
  }

  const goHome = (event) => {
    event.preventDefault();
    history.push("/");
  };

  const createExp = (event) => {
    event.preventDefault();
    history.push("/experiences/create");
  };

  React.useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand>
            <a onClick={(event) => goHome(event)}>
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/airbnb-1869032-1583156.png"
                width="50px"
                height="50px"
              ></img>
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link>Host your home</Nav.Link>
              <Nav.Link onClick={(event) => createExp(event)}>
                Host an experience
              </Nav.Link>
              
              {
                currentUser[0] ?<><p>{currentUser}</p>
                 <Button variant="danger">Sign Out</Button>
                </> :<><Nav.Link style={{ marginRight: "10px" }}><Link style={{color:"rgba(0,0,0,.5)"}} to="/login">Log In</Link></Nav.Link>
                <Button variant="dark">Sign Up</Button></>
              }
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
