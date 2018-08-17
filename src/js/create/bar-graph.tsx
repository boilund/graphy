import * as React from "react";
import { Col, Row } from "react-bootstrap";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { IData } from "./creat-new-graph";
import "./graph-style.css";

interface IProps {
  data: IData[];
  yAxis: string;
}

const BarGraph: React.SFC<IProps> = (props: IProps) => {
  const { data } = props;

  return (
    <React.Fragment>
      <Row>
        <Col sm={12} className="margin-bottom">
          <h3>Bar Graph</h3>
        </Col>
      </Row>
      <Row>
        <BarChart
          width={600}
          height={300}
          data={data.slice()}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          className="center"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </Row>
    </React.Fragment>
  );
};

export default BarGraph;
