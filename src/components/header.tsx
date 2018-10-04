import * as React from "react";
import { MenuItem, Nav, Navbar, NavDropdown, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import "./header.css";

import logo from "./logoAndBrand.png";

class Header extends React.Component {
  public render() {
    return (
      <header className="App-header">
        <Navbar className="navbar">
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">
                <img src={logo} alt="graphy logo" />
              </Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav className="nav">
            <LinkContainer to="/my-graphs">
              <NavItem eventKey="/my-graphs">My graphs</NavItem>
            </LinkContainer>
            <NavDropdown
              eventKey="/login"
              title="Login"
              id="basic-nav-dropdown"
            >
              <LinkContainer to="/login">
                <MenuItem eventKey="/login">Login</MenuItem>
              </LinkContainer>
              <LinkContainer to="/create-account">
                <MenuItem eventKey="/create-account">
                  Create new account
                </MenuItem>
              </LinkContainer>
            </NavDropdown>
          </Nav>
        </Navbar>
      </header>
    );
  }
}

export default Header;
