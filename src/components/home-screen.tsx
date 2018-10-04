import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { Col, Grid, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./home-screen.css";

import radar from "../imgs/radar-icon.svg";
import scatter from "../imgs/scatter-icon.svg";

class HomeScreen extends React.Component {
  public render() {
    return (
      <main className="App-main">
        <Grid>
          <Row>
            <Col xs={6} sm={4} md={3}>
              <div className="yellow comment-square">
                <h2 className="message">Select graph type</h2>
                <FontAwesomeIcon
                  icon="comment"
                  className="fa-6x comment-icon"
                />
              </div>
            </Col>
            <Link to="./creating/line-graph">
              <Col xs={6} sm={4} md={3}>
                <div className="square green">
                  <FontAwesomeIcon icon="chart-line" className="fa-6x icons" />
                </div>
              </Col>
            </Link>
            <Link to="./creating/bar-graph">
              <Col xs={6} sm={4} md={3}>
                <div className="square purple">
                  <FontAwesomeIcon icon="chart-bar" className="fa-6x icons" />
                </div>
              </Col>
            </Link>
            <Link to="./creating/area-graph">
              <Col xs={6} sm={4} md={3}>
                <div className="square red">
                  <FontAwesomeIcon icon="chart-area" className="fa-6x icons" />
                </div>
              </Col>
            </Link>
            <Link to="./creating/pie-graph">
              <Col xs={6} sm={4} md={3}>
                <div className="square green">
                  <FontAwesomeIcon icon="chart-pie" className="fa-6x icons" />
                </div>
              </Col>
            </Link>
            <Link to="./creating/scatter-graph">
              <Col xs={6} sm={4} md={3}>
                <div className="square red">
                  <img src={scatter} alt="scatter graph" className="icons" />
                </div>
              </Col>
            </Link>
            <Link to="./creating/radar-graph">
              <Col xs={6} sm={4} md={3}>
                <div className="square yellow">
                  <img src={radar} alt="radar graph" className="radar icons" />
                </div>
              </Col>
            </Link>
            <Col xs={6} sm={4} md={3}>
              <div className="square purple">
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
