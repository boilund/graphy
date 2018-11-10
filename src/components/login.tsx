import * as React from "react";
import { Button, Col, Grid, Row } from "react-bootstrap";
import { firebaseApp, firebaseAuth, firebaseGoogleProvider } from "../firebase";
import google from "../imgs/google-logo.png";
import "./login.css";

import google from "../imgs/google-logo.png";

class Login extends React.Component<{}, {}> {
  constructor(props: any) {
    super(props);
    this.login = this.login.bind(this);
  }

  public componentDidMount() {
    firebaseAuth
      .getRedirectResult()
      .then((result: any) => {
        if (result.credential) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const token = result.credential.accessToken;
          // ...
          // tslint:disable-next-line:no-console
          console.log(token);
        }
        // The signed-in user info.
        const user = result.user;
        // tslint:disable-next-line:no-console
        console.log(user.displayName);
        this.props.setUserName(user.displayName);
        this.props.setUserId(user.uid);
      })
      .catch((error: any) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        // tslint:disable-next-line:no-console
        console.error(errorCode, errorMessage, email, credential);
      });

    firebaseApp.auth().onAuthStateChanged((user: any) => {
      if (user) {
        // tslint:disable-next-line:no-console
        console.log(user);
        // User is signed in.
      } else {
        // tslint:disable-next-line:no-console
        console.log("no user");
        // No user is signed in.
      }
    });
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
    firebaseGoogleProvider.addScope("profile");
    firebaseGoogleProvider.addScope("email");
    firebaseAuth.signInWithRedirect(firebaseGoogleProvider);
  };
}
  };
}

export default Login;
