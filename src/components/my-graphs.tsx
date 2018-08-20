import * as React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';

class MyGraphs extends React.Component {
  public render() {
    return (
      <main className="main">
        <Grid>
          <Row>
            <Col sm={12}>
              <h2>My graphs page</h2>
              <p>You have three kind of graphs</p>
            </Col>
          </Row>
        </Grid>
      </main>
    );
  }
}

export default MyGraphs;