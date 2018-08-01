import * as React from 'react';
import { MenuItem, Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './header.css';

import logo from './logoAndBrand.png';

class Header extends React.Component {
  public render() {
    return (
      <header className="App-header">
        <Navbar className="navbar">
          <Navbar.Header>
            <Navbar.Brand>
              <Link to='/'>
                <img src={logo} alt="logo" />
              </Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav className="nav">
            <NavItem eventKey={1}>
              <Link to='/myGraphs'>
                My graphs
              </Link>
            </NavItem>
            <NavDropdown eventKey={2} title="Login" id="basic-nav-dropdown">
              <MenuItem eventKey={2.1}>
                <Link to='/login'>
                  Login
                </Link>
              </MenuItem>
              <MenuItem eventKey={3.2}>Create new account</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>
      </header>
    );
  }
}

export default Header;
