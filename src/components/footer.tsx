
import * as React from 'react';
import './footer.css';

import {
  Col,
  Grid,
  Row,
} from "react-bootstrap";

class Footer extends React.Component {
  public render() {
    return (
      <footer className="footer">
        <Grid>
          <Row className="align-left">
            <Col sm={4}>
              <p className="footer-head">Contact</p>
              <p>+46 123 456 78 Lund Sweden</p>
            </Col>
            <Col sm={4}>
              <p className="footer-head">News</p>
            </Col>
            <Col sm={4}>
              <p className="footer-head">SNS</p>

            </Col>
          </Row>
          <Row className="align-center">
            <Col sm={12}>
              <p>©2018 graphy</p>
            </Col>
          </Row>
        </Grid>
      </footer>
    );
  }
}

export default Footer;
