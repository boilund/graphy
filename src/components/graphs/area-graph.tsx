import * as React from "react";
import { Col, Row } from "react-bootstrap";
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
      <Row>
        <Col sm={12} className="margin-bottom">
          <h3>{title ? title : "Area Graph"}</h3>
        </Col>
      </Row>
      <AreaChart
        width={600}
        height={400}
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
      <Row />
    </React.Fragment>
  );
};

export default AreaGraph;
