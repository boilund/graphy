import * as React from "react";
import { Pie, PieChart } from "recharts";
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

const PieGraph: React.SFC<IProps> = (props: IProps) => {
  const { color, data, title, size } = props;

  return (
    <React.Fragment>
      <h2>{title ? title : "Pie Graph"}</h2>
      <PieChart width={size.width} height={size.height} className="center">
        <Pie
          data={data.slice()}
          nameKey="columnX"
          dataKey="columnY"
          cx={"50%"}
          cy={"50%"}
          outerRadius={"80%"}
          fill={color}
          label={true}
        />
      </PieChart>
    </React.Fragment>
  );
};

export default PieGraph;
