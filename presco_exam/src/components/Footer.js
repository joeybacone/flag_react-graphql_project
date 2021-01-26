import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Card} from "react-bootstrap";
class Footer extends Component {
    render() {
        return (
<>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">myflags.com</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Flags</Nav.Link>
      
    </Nav>
    <Card.Text>
        © 2020 myflags.com
    </Card.Text>
    
  </Navbar>
</>
        );
    }
}

export default Footer
