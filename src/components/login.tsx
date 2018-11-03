import * as React from "react";
import {
  Button,
  Col,
  ControlLabel,
  FormControl,
  FormGroup,
  Grid,
  HelpBlock,
  Row
} from "react-bootstrap";
import "./login.css";

interface IState {
  password: string;
  username: string;
}

class Login extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      password: "",
      username: ""
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  public render() {
    const { password, username } = this.state;
    return (
      <main className="login-main">
        <Grid>
          <Row className="login-row">
            <Col xs={8} xsOffset={2} sm={4} smOffset={4} className="login-box">
              <h2>Login to Graphy</h2>
              <form>
                <FormGroup
                  controlId="formControlsUsername"
                  className="text-left"
                >
                  <ControlLabel>Username</ControlLabel>
                  <FormControl
                    id="formControlsUsername"
                    type="text"
                    value={username}
                    onChange={this.handleUsernameChange}
                  />
                  <FormControl.Feedback />
                </FormGroup>
                <FormGroup
                  controlId="formControlsPassword"
                  className="text-left"
                >
                  <ControlLabel>Password</ControlLabel>
                  <FormControl
                    id="formControlsPassword"
                    type="password"
                    value={password}
                    onChange={this.handlePasswordChange}
                  />
                  <FormControl.Feedback />
                  <HelpBlock className="text-right">Forgot password?</HelpBlock>
                </FormGroup>
              </form>
              <Button className="btn-block login-btn">Login</Button>
              <Button className="btn-block signin-btn">
                Create an account
              </Button>
            </Col>
          </Row>
        </Grid>
      </main>
    );
  }

  private handleUsernameChange = (e: any): void => {
    this.setState({
      username: e.target.value
    });
  };

  private handlePasswordChange = (e: any): void => {
    this.setState({
      password: e.target.value
    });
  };
}

export default Login;
