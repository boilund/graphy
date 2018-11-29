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
import { Isize } from "../../utilities/getGraphSize";
import "./graph-style.css";

interface IProps {
  color: string;
  data: IData[];
  size: Isize;
  title?: string;
  yAxis: string;
}

const ScatterGraph: React.SFC<IProps> = (props: IProps) => {
  const { color, data, title, size } = props;

  return (
    <React.Fragment>
      <h2>{title ? title : "Scatter Graph"}</h2>
      <ScatterChart
        width={size.width}
        height={size.height}
        margin={{ top: 10, right: 30, bottom: 0, left: 0 }}
      >
        <CartesianGrid />
        <XAxis dataKey={"columnX"} type="number" name="stature" unit="cm" />
        <YAxis dataKey={"columnY"} type="number" name="weight" unit="kg" />
        <Scatter name={title} data={data.slice()} fill={color} />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
      </ScatterChart>
    </React.Fragment>
  );
};

export default ScatterGraph;
