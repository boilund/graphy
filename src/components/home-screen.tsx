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
            <Col sm={3} className="yellow square">
              <div>
                <FontAwesomeIcon icon="signal" className="fa-6x icons" />
              </div>
            </Col>
            <Col sm={3} className="green square">
              <div>
                <FontAwesomeIcon icon="chart-pie" className="fa-6x icons" />
              </div>
            </Col>
            <Link to="./creating/bar-graph">
              <Col sm={3} className="purple square">
                <FontAwesomeIcon icon="chart-bar" className="fa-6x icons" />
              </Col>
            </Link>
            <Link to="./creating/area-graph">
              <Col sm={3} className="red square">
                <FontAwesomeIcon icon="chart-area" className="fa-6x icons" />
              </Col>
            </Link>
          </Row>
          <Row>
            <Link to="./creating/line-graph">
              <Col sm={3} className="purple square">
                <FontAwesomeIcon icon="chart-line" className="fa-6x icons" />
              </Col>
            </Link>
            <Col sm={3} className="red square">
              <div>
                <FontAwesomeIcon icon="signal" className="fa-6x icons" />
              </div>
            </Col>
            <Col sm={3} className="yellow square">
              <div>
                <FontAwesomeIcon icon="chart-area" className="fa-6x icons" />
              </div>
            </Col>
            <Col sm={3} className="green square">
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
