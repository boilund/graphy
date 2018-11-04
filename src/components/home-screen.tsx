import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { Col, Grid, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./home-screen.css";

import scatter from "../imgs/scatter-icon.svg";

class HomeScreen extends React.Component {
  public render() {
    return (
      <main className="App-main">
        <Grid>
          <Row>
            <Col xs={6} sm={4}>
              <div className="yellow comment-square">
                <h1 className="message">Select graph</h1>
                <FontAwesomeIcon
                  icon="comment"
                  className="fa-6x comment-icon"
                />
              </div>
            </Col>
            <Link to="./creating/line-graph">
              <Col xs={6} sm={4}>
                <div className="square green">
                  <FontAwesomeIcon icon="chart-line" className="fa-6x icons" />
                </div>
              </Col>
            </Link>
            <Link to="./creating/bar-graph">
              <Col xs={6} sm={4}>
                <div className="square purple">
                  <FontAwesomeIcon icon="chart-bar" className="fa-6x icons" />
                </div>
              </Col>
            </Link>
            <Link to="./creating/area-graph">
              <Col xs={6} sm={4}>
                <div className="square purple">
                  <FontAwesomeIcon icon="chart-area" className="fa-6x icons" />
                </div>
              </Col>
            </Link>
            <Link to="./creating/pie-graph">
              <Col xs={6} sm={4}>
                <div className="square yellow">
                  <FontAwesomeIcon icon="chart-pie" className="fa-6x icons" />
                </div>
              </Col>
            </Link>
            <Link to="./creating/scatter-graph">
              <Col xs={6} sm={4}>
                <div className="square red">
                  <img src={scatter} alt="scatter graph" className="icons" />
                </div>
              </Col>
            </Link>
          </Row>
        </Grid>
      </main>
    );
  }
}

export default HomeScreen;
