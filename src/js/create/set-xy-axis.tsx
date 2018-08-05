import * as React from "react";
import { Col, ControlLabel, FormControl, Row } from "react-bootstrap";
import Complete from "./complete";

interface IProps {
  type: string;
  value: number;
  // data: { key: number }[];
}

interface IState {
  xAxis: string;
  yAxis: string;
}

class SetXYaxis extends React.Component<IProps, IState> {
  public render() {
    const { value } = this.props;

    return (
      <React.Fragment>
        <Row>
          <Col sm={12}>
            <h3>X and Y set</h3>
          </Col>
          <Col sm={6}>
            <ControlLabel>Select X</ControlLabel>
            <FormControl componentClass="select" placeholder="select">
              <option value="select">select</option>
              <option value="other">...</option>
            </FormControl>
          </Col>
          <Col sm={6}>
            <ControlLabel>Select Y</ControlLabel>
            <FormControl componentClass="select" placeholder="select">
              <option value="select">select</option>
              <option value="other">...</option>
            </FormControl>
          </Col>
        </Row>
        <Complete value={value} />
      </React.Fragment>
    );
  }
}

export default SetXYaxis;
