import * as React from "react";
import { Col, Grid, Row } from "react-bootstrap";
import { IData } from "../actions/";
import AreaGraph from "../components/graphs/area-graph";
import BarGraph from "../components/graphs/bar-graph";
import LineGraph from "../components/graphs/line-graph";

import { connect } from "react-redux";
import { IStoreState } from "../types";

import "./my-graphs.css";

interface IProps {
  data: IData[];
  graphType: string;
  title: string;
  xAxis: string;
  yAxis: string;
}

class MyGraphs extends React.Component<IProps, {}> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <main className="main">
        <Grid>
          <Row>
            <Col sm={12}>{this.setGraph()}</Col>
          </Row>
        </Grid>
      </main>
    );
  }

  private setGraph = () => {
    const { data, graphType, title, yAxis } = this.props;

    switch (graphType) {
      case "line-graph":
        return (
          <div className="box">
            <LineGraph data={data} title={title} yAxis={yAxis} />
          </div>
        );
      case "bar-graph":
        return (
          <div className="box">
            <BarGraph data={data} title={title} yAxis={yAxis} />
          </div>
        );
      case "area-graph":
        return (
          <div className="box">
            <AreaGraph data={data} title={title} yAxis={yAxis} />
          </div>
        );
      default:
        return;
    }
  };
}

export function mapStateToProps(state: IStoreState) {
  return {
    data: state.data,
    graphType: state.graphType,
    title: state.title,
    xAxis: state.xAxis,
    yAxis: state.yAxis
  };
}

export default connect(mapStateToProps)(MyGraphs);
