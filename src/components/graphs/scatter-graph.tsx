import * as React from "react";
import { Col } from "react-bootstrap";
import {
  CartesianGrid,
  Scatter,
  ScatterChart,
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

const ScatterGraph: React.SFC<IProps> = (props: IProps) => {
  const { data, title } = props;

  return (
    <Col sm={12} md={6} className="margin-bottom">
      <h3>{title ? title : "Scatter Graph"}</h3>
      <ScatterChart
        width={500}
        height={500}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <CartesianGrid />
        <XAxis dataKey={"columnX"} type="number" name="stature" unit="cm" />
        <YAxis dataKey={"columnY"} type="number" name="weight" unit="kg" />
        <Scatter name={title} data={data.slice()} fill="#8884d8" />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
      </ScatterChart>
    </Col>
  );
};

export default ScatterGraph;
