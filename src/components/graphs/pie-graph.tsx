import * as React from "react";
import { Pie, PieChart } from "recharts";
import { IData } from "../../actions/";
import { Isize } from "../../utilities/getGraphSize";
import "./graph-style.css";

interface IProps {
  data: IData[];
  size: Isize;
  title?: string;
  yAxis: string;
}

const PieGraph: React.SFC<IProps> = (props: IProps) => {
  const { data, title, size } = props;

  return (
    <React.Fragment>
      <h2>{title ? title : "Pie Graph"}</h2>
      <PieChart width={size.width} height={size.height}>
        <Pie
          data={data.slice()}
          nameKey="columnX"
          dataKey="columnY"
          cx={"50%"}
          cy={"50%"}
          outerRadius={"80%"}
          fill="#8884d8"
          label={true}
        />
      </PieChart>
    </React.Fragment>
  );
};

export default PieGraph;
