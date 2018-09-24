import * as React from "react";
import { Col, Row } from "react-bootstrap";
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
    <React.Fragment>
      <Row>
        <Col sm={12} className="margin-bottom">
          <h3>{title ? title : "Pie Graph"}</h3>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <PieChart width={800} height={400}>
            <Pie
              data={data.slice()}
              nameKey="columnX"
              dataKey="columnY"
              cx={200}
              cy={200}
              outerRadius={60}
              fill="#8884d8"
              label={true}
            />
          </PieChart>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default PieGraph;
