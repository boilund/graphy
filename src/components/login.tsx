import * as React from "react";
import { Button, Col, Grid, Row } from "react-bootstrap";
import google from "../imgs/google-logo.png";
import "./login.css";

import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import * as actions from "../actions/";
import { IStoreState } from "../types";

interface IProps {
  user: firebase.User | null;
  signIn(): void;
  signOut(): void;
}

class Login extends React.Component<IProps, {}> {
  constructor(props: any) {
    super(props);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  public render() {
    const { user } = this.props;

    return (
      <main className="App-main login-main">
        <Grid>
          <Row className="login-row">
            <Col xs={8} xsOffset={2} sm={4} smOffset={4} className="login-box">
              <h1 className="login-box-header">
                {user ? "Logout from Graphy" : "Login to Graphy"}
              </h1>
              {user ? (
                <Button className="logout-btn" onClick={this.logout}>
                  Logout
                </Button>
              ) : (
                <React.Fragment>
                  <Button className="btn-block login-btn" onClick={this.login}>
                    <img
                      className="google-logo"
                      src={google}
                      alt="Google logo"
                    />
                    Login with Google account
                  </Button>
                  <Button className="btn-block signin-btn">
                    New to Graphy? Create an account
                  </Button>
                </React.Fragment>
              )}
            </Col>
          </Row>
        </Grid>
      </main>
    );
  }

  private login = (): void => {
    this.props.signIn();
  };

  private logout = (): void => {
    this.props.signOut();
  };
}

export function mapStateToProps(state: IStoreState) {
  return {
    user: state.user
  };
}

export function mapDispatchToProps(
  dispatch: ThunkDispatch<IStoreState, undefined, actions.Action>
) {
  return {
    signIn: () => dispatch(actions.signIn()),
    signOut: () => dispatch(actions.signOut())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
