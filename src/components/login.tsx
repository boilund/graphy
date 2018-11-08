import * as React from "react";
import { Button, Col, Grid, Row } from "react-bootstrap";
import { firebaseAuth, firebaseGoogleProvider } from "../firebase";
import "./login.css";

import google from "../imgs/google-logo.png";

class Login extends React.Component<{}, {}> {
  constructor(props: any) {
    super(props);
    this.login = this.login.bind(this);
  }

  public render() {
    return (
      <main className="App-main login-main">
        <Grid>
          <Row className="login-row">
            <Col xs={8} xsOffset={2} sm={4} smOffset={4} className="login-box">
              <h1 className="login-box-header">Login to Graphy</h1>

              <Button className="btn-block login-btn" onClick={this.login}>
                <img className="google-logo" src={google} alt="Google logo" />
                Login with Google account
              </Button>
              <Button className="btn-block signin-btn">
                New to Graphy? Create an account
              </Button>
            </Col>
          </Row>
        </Grid>
      </main>
    );
  }

  private login = (e: any): void => {
    });
  };
}

export default Login;
