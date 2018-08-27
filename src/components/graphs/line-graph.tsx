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
import { IData } from "../../actions/";
import "./graph-style.css";

interface IProps {
  data: IData[];
  title?: string;
  yAxis: string;
}

const LineGraph: React.SFC<IProps> = (props: IProps) => {
  const { data, title, yAxis } = props;

  return (
    <React.Fragment>
      <Row>
        <Col sm={12} className="margin-bottom">
          <h3>{title ? title : "Line Graph"}</h3>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <LineChart
            width={730}
            height={250}
            data={data.slice()}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            className="center"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="columnX" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="columnY"
              name={yAxis}
              stroke="#8884d8"
            />
          </LineChart>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default LineGraph;
