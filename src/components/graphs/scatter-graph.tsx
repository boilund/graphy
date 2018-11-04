import * as React from "react";
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
    <React.Fragment>
      <h2>{title ? title : "Scatter Graph"}</h2>
      <ScatterChart
        width={500}
        height={500}
        margin={{ top: 20, right: 20, bottom: 20, left: 0 }}
      >
        <CartesianGrid />
        <XAxis dataKey={"columnX"} type="number" name="stature" unit="cm" />
        <YAxis dataKey={"columnY"} type="number" name="weight" unit="kg" />
        <Scatter name={title} data={data.slice()} fill="#8884d8" />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
      </ScatterChart>
    </React.Fragment>
  );
};

export default ScatterGraph;
