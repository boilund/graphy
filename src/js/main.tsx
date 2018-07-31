import * as React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import './main.css';

class Main extends React.Component {
  public render() {
    return (
      <main className="main">
        <Grid>
          <Row>
            <Col sm={3} className="yellow">
              <p>1</p>
            </Col>
            <Col sm={3} className="green">
              <p>2</p>
            </Col>
            <Col sm={3} className="purple">
              <p>3</p>
            </Col>
            <Col sm={3} className="red">
              <p>4</p>
            </Col>
          </Row>
          <Row>
            <Col sm={3} className="purple">
              <p>5</p>
            </Col>
            <Col sm={3} className="red">
              <p>6</p>
            </Col>
            <Col sm={3} className="yellow">
              <p>7</p>
            </Col>
            <Col sm={3} className="green">
              <p>8</p>
            </Col>
          </Row>
        </Grid>


      </main>
    );
  }
}

export default Main;