import * as React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import logo from "../imgs/logoAndBrand.png";
import "./header.css";

import { connect } from "react-redux";
import { IStoreState } from "../types";

interface IProps {
  loginState: boolean;
}

class Header extends React.Component<IProps, {}> {
  public render() {
    const { loginState } = this.props;
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
              {loginState && (
                <LinkContainer to="/my-graphs">
                  <NavItem eventKey={1} className="nav-item">
                    My graphs
                  </NavItem>
                </LinkContainer>
              )}
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

export function mapStateToProps(state: IStoreState) {
  return {
    loginState: state.loginState
  };
}

export default connect(mapStateToProps)(Header);
