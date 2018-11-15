import * as React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import logo from "../imgs/logoAndBrand.png";
import "./header.css";

import { connect } from "react-redux";
import { IStoreState } from "../types";

interface IProps {
  user: firebase.User | null;
}

class Header extends React.Component<IProps, {}> {
  public render() {
    const { user } = this.props;
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
              {user && (
                <LinkContainer to="/my-graphs">
                  <NavItem eventKey={1} className="nav-item">
                    My graphs
                  </NavItem>
                </LinkContainer>
              )}
              <LinkContainer to="/login">
                <NavItem eventKey={2} className="nav-item">
                  {user ? "Logout" : "Login"}
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
    user: state.user
  };
}

export default connect(
  mapStateToProps,
  undefined
)(Header);
