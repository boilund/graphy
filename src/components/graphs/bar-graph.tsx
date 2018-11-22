import * as React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { IData } from "../../actions/";
import { Isize } from "../../utilities/getGraphSize";
import "./graph-style.css";

interface IProps {
  data: IData[];
  size: Isize;
  title?: string;
  yAxis: string;
}

const BarGraph: React.SFC<IProps> = (props: IProps) => {
  const { data, title, yAxis, size } = props;

  return (
    <React.Fragment>
      <h2>{title ? title : "Bar Graph"}</h2>
      <BarChart
        width={size.width}
        height={size.height}
        data={data.slice()}
        margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
        className="center"
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="columnX" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="columnY" fill="#8884d8" name={yAxis} />
      </BarChart>
    </React.Fragment>
  );
};

export default BarGraph;
