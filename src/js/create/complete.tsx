import * as React from "react";
import { Col, Row } from "react-bootstrap";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { IData } from "./creat-new-graph";

interface IProps {
  data: IData[];
}

const Complete: React.SFC<IProps> = (props: IProps) => {
  const { data } = props;

  return (
    <React.Fragment>
      <Row>
        <Col sm={12} style={{ marginBottom: 30 }}>
          <h3>Completed!</h3>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <LineChart
            width={730}
            height={250}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="columnX" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="columnY" stroke="#8884d8" />
          </LineChart>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Complete;
