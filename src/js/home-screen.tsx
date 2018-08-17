import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { Col, Grid, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./home-screen.css";

class HomeScreen extends React.Component {
  public render() {
    return (
      <main className="App-main">
        <Grid fluid={true}>
          <Row>
            <Col sm={3} className="yellow">
              <div>
                <FontAwesomeIcon icon="signal" className="fa-6x icons" />
              </div>
            </Col>
            <Col sm={3} className="green">
              <div>
                <FontAwesomeIcon icon="chart-pie" className="fa-6x icons" />
              </div>
            </Col>
            <Col sm={3} className="purple">
              <div>
                <FontAwesomeIcon icon="chart-bar" className="fa-6x icons" />
              </div>
            </Col>
            <Col sm={3} className="red">
              <div>
                <FontAwesomeIcon icon="chart-area" className="fa-6x icons" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={3} className="purple">
              <Link to="./creating">
                <div>
                  <FontAwesomeIcon icon="chart-line" className="fa-6x icons" />
                </div>
              </Link>
            </Col>
            <Col sm={3} className="red">
              <div>
                <FontAwesomeIcon icon="signal" className="fa-6x icons" />
              </div>
            </Col>
            <Col sm={3} className="yellow">
              <div>
                <FontAwesomeIcon icon="chart-area" className="fa-6x icons" />
              </div>
            </Col>
            <Col sm={3} className="green">
              <div>
                <FontAwesomeIcon icon="chart-pie" className="fa-6x icons" />
              </div>
            </Col>
          </Row>
        </Grid>
      </main>
    );
  }
}

export default HomeScreen;
