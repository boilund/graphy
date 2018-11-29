import * as React from "react";
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
import { Isize } from "../../utilities/getGraphSize";
import "./graph-style.css";

interface IProps {
  color: string;
  data: IData[];
  size: Isize;
  title?: string;
  yAxis: string;
}

const LineGraph: React.SFC<IProps> = (props: IProps) => {
  const { color, data, title, yAxis, size } = props;

  return (
    <React.Fragment>
      <h2>{title ? title : "Line Graph"}</h2>
      <LineChart
        width={size.width}
        height={size.height}
        data={data.slice()}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        className="center"
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="columnX" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="columnY" name={yAxis} stroke={color} />
      </LineChart>
    </React.Fragment>
  );
};

export default LineGraph;
