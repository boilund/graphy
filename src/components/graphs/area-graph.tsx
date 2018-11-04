import * as React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
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

const AreaGraph: React.SFC<IProps> = (props: IProps) => {
  const { data, title, yAxis } = props;

  return (
    <React.Fragment>
      <h2>{title ? title : "Area Graph"}</h2>
      <AreaChart
        width={500}
        height={300}
        data={data.slice()}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        className="center"
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="columnX" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="columnY"
          name={yAxis}
          stroke="#8884d8"
          fill="#8884d8"
        />
      </AreaChart>
    </React.Fragment>
  );
};

export default AreaGraph;
