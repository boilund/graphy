import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
              <div><FontAwesomeIcon icon="signal" className="fa-6x icons" /></div>
            </Col>
            <Col sm={3} className="green">
              <div><FontAwesomeIcon icon="chart-pie" className="fa-6x icons" /></div>
            </Col>
            <Col sm={3} className="purple">
              <div><FontAwesomeIcon icon="chart-bar" className="fa-6x icons" /></div>
            </Col>
            <Col sm={3} className="red">
              <div><FontAwesomeIcon icon="chart-area" className="fa-6x icons" /></div>
            </Col>
          </Row>
          <Row>
            <Col sm={3} className="purple">
              <div><FontAwesomeIcon icon="chart-line" className="fa-6x icons" /></div>
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