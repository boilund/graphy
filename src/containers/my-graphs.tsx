import * as React from "react";
import { Col, Grid, Row } from "react-bootstrap";
import { IData } from "../actions/";
import AreaGraph from "../components/graphs/area-graph";
import BarGraph from "../components/graphs/bar-graph";
import LineGraph from "../components/graphs/line-graph";
import PieGraph from "../components/graphs/pie-graph";
import ScatterGraph from "../components/graphs/scatter-graph";

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
            <Col sm={12}>
              <h1>Your Page</h1>
            </Col>
            {this.setGraph()}
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
          <Col md={6} className="box">
            <LineGraph data={data} title={title} yAxis={yAxis} />
          </Col>
        );
      case "bar-graph":
        return (
          <Col md={6} className="box">
            <BarGraph data={data} title={title} yAxis={yAxis} />
          </Col>
        );
      case "area-graph":
        return (
          <Col md={6} className="box">
            <AreaGraph data={data} title={title} yAxis={yAxis} />
          </Col>
        );
      case "pie-graph":
        return (
          <Col md={6} className="box">
            <PieGraph data={data} title={title} yAxis={yAxis} />
          </Col>
        );
      case "scatter-graph":
        return (
          <Col md={6} className="box">
            <ScatterGraph data={data} title={title} yAxis={yAxis} />
          </Col>
        );
      default:
        return (
          <Col md={12} className="box">
            <div className="no-graph">You don't have any graph</div>
          </Col>
        );
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
