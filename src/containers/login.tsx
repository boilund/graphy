import * as React from "react";
import { Button, Col, Grid, Row } from "react-bootstrap";
import { RouteComponentProps, withRouter } from "react-router";
import google from "../imgs/google-logo.png";
import "./login.css";

import { History } from "history";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import * as actions from "../actions";
import { IStoreState } from "../types";

interface IProps {
  history: History;
  user: firebase.User | null;
  signIn(): void;
}

const Login: React.SFC<IProps> = (props: IProps) => {
  const { history, user, signIn } = props;
  if (user) {
    history.push("/");
  }

  return (
    <main className="App-main login-main">
      <Grid>
        <Row className="login-row">
          <Col xs={10} xsOffset={1} md={4} mdOffset={4} className="login-box">
            <h1 className="login-box-header">Login to Graphy</h1>
            <Button className="btn-block login-btn" onClick={signIn}>
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
};

export function mapStateToProps(state: IStoreState) {
  return {
    user: state.user
  };
}

export function mapDispatchToProps(
  dispatch: ThunkDispatch<IStoreState, undefined, actions.Action>
) {
  return {
    signIn: () => dispatch(actions.signIn())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter<IProps & RouteComponentProps<{}>>(Login));
