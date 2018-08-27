import * as React from "react";
import { Col, Row } from "react-bootstrap";
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
import "./graph-style.css";

interface IProps {
  data: IData[];
  title?: string;
  yAxis: string;
}

const BarGraph: React.SFC<IProps> = (props: IProps) => {
  const { data, title, yAxis } = props;

  return (
    <React.Fragment>
      <Row>
        <Col sm={12} className="margin-bottom">
          <h3>{title ? title : "Bar Graph"}</h3>
        </Col>
      </Row>
      <Row>
        <BarChart
          width={600}
          height={300}
          data={data.slice()}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          className="center"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="columnX" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="columnY" fill="#8884d8" name={yAxis} />
        </BarChart>
      </Row>
    </React.Fragment>
  );
};

export default BarGraph;
