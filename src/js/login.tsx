import * as React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';

class Login extends React.Component {
  public render() {
    return (
      <main className="main">
        <Grid>
          <Row>
            <Col sm={12}>
              <h2>Login</h2>
              <p>You can log in here</p>
            </Col>
          </Row>
        </Grid>
      </main>
    );
  }
}

export default Login;