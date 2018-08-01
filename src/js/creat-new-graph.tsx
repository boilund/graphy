import * as React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';

class CreateNewGraph extends React.Component {
  public render() {
    return (
      <main className="main">
        <Grid>
          <Row>
            <Col sm={12}>
              <h2>Create graph flow</h2>
              <p>Here we will create a new graph</p>
            </Col>
          </Row>
        </Grid>
      </main>
    );
  }
}

export default CreateNewGraph;