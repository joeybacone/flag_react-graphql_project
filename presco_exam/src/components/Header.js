import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from "react-bootstrap";


class Header extends Component {
    render() {
        return (
<>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="home">myflags.com</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="home">Home</Nav.Link>
      <Nav.Link href="flags">Flags</Nav.Link>
    </Nav>
  </Navbar>
</>
        );
    }
}

export default Header
