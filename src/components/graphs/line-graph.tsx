import * as React from "react";
import { Col } from "react-bootstrap";
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
    <Col sm={12} md={6} className="margin-bottom">
      <h3>{title ? title : "Line Graph"}</h3>
      <LineChart
        width={500}
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
        <Line type="monotone" dataKey="columnY" name={yAxis} stroke="#8884d8" />
      </LineChart>
    </Col>
  );
};

export default LineGraph;
