import * as React from "react";
import "./footer.css";

import { Col, Grid, Row } from "react-bootstrap";

class Footer extends React.Component {
  public render() {
    return (
      <footer className="footer">
        <Grid>
          <Row>
            <Col sm={12} className="align-center">
              <p>Graphy - ©2018 Nana Mochihara</p>
            </Col>
          </Row>
        </Grid>
      </footer>
    );
  }
}

export default Footer;
