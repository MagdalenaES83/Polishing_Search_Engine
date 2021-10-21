import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Component } from "react";           
import {  GiWorld} from "react-icons/gi"
import Listindicator from "./Listindicator";



class Navbar1 extends Component {
  render() {
    return (
      <Navbar id="navbar" expand="lg">
        <Container>
          <Link to="/" className="navbar-brand">
          
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse
            id="navbarScroll"
            className="justify-content-between"
          >
            <Nav className="mr-auto my-2 my-lg-0" navbarScroll>
              <Link to="/company" className="nav-link"> <Button variant="success" id="favs">Company Details</Button>
                <GiWorld></GiWorld>
              </Link>
              <Link to="/" className="nav-link">
              <Button variant="success" id="favs">Fav List</Button><GiWorld></GiWorld>
              </Link>
              <Link to="/" className="nav-link">
                Home3  <GiWorld></GiWorld>
              </Link><Link to="/" className="nav-link">
                Home4  <GiWorld></GiWorld>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      <Listindicator /> 
      </Navbar>
    );
  }
}

export default Navbar1;
