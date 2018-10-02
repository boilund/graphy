import * as React from "react";
import { Col } from "react-bootstrap";
import { Pie, PieChart } from "recharts";
import { IData } from "../../actions/";
import "./graph-style.css";

interface IProps {
  data: IData[];
  title?: string;
  yAxis: string;
}

const PieGraph: React.SFC<IProps> = (props: IProps) => {
  const { data, title } = props;

  return (
    <Col sm={12} md={6} className="margin-bottom">
      <h3>{title ? title : "Pie Graph"}</h3>
      <PieChart width={500} height={400}>
        <Pie
          data={data.slice()}
          nameKey="columnX"
          dataKey="columnY"
          cx={250}
          cy={150}
          outerRadius={100}
          fill="#8884d8"
          label={true}
        />
      </PieChart>
    </Col>
  );
};

export default PieGraph;
