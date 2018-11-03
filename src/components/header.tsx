import * as React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import "./header.css";

import logo from "./logoAndBrand.png";

class Header extends React.Component {
  public render() {
    return (
      <header className="App-header">
        <Navbar collapseOnSelect={true} className="navbar">
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">
                <img src={logo} alt="graphy logo" className="logo" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav className="nav">
              <LinkContainer to="/my-graphs">
                <NavItem eventKey={1} className="nav-item">
                  My graphs
                </NavItem>
              </LinkContainer>
              <LinkContainer to="/login">
                <NavItem eventKey={2} className="nav-item">
                  Login
                </NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}

export default Header;
