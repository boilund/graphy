import * as React from 'react';
import { MenuItem, Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap';
import './header.css';

import logo from './logoAndBrand.png';

class Header extends React.Component {
  public render() {
    return (
      <header className="App-header">
        <Navbar className="navbar">
          <Navbar.Header>
            <Navbar.Brand>
              <a href='#home'><img src={logo} alt="logo" /></a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav className="nav">
            <NavItem eventKey={1} href="#">
              My graphs
            </NavItem>
            <NavItem eventKey={2} href="#">
              Share
            </NavItem>
            <NavDropdown eventKey={3} title="Login" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Login with your account</MenuItem>
              <MenuItem eventKey={3.2}>Create new account</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>
      </header>
    );
  }
}

export default Header;
