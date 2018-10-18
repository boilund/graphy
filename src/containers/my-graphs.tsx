import * as React from "react";
import { Col, Grid, Row } from "react-bootstrap";
import { IData } from "../actions/";
import AreaGraph from "../components/graphs/area-graph";
import BarGraph from "../components/graphs/bar-graph";
import LineGraph from "../components/graphs/line-graph";
import PieGraph from "../components/graphs/pie-graph";
import ScatterGraph from "../components/graphs/scatter-graph";
import { IGraph } from "./create-new-graph";

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

    // tslint:disable-next-line:no-console
    console.log(localStorage.getItem("myGraph"), "my page");
  }

  public render() {
    const myData = localStorage.getItem("myGraph");
    let myGraphs = [];
    if (myData) {
      myGraphs = [...JSON.parse(myData).graphs];
    }

    return (
      <main className="main">
        <Grid>
          <Row>
            <Col sm={12}>
              <h1>Your Page</h1>
            </Col>
            {/* {this.setGraph()} */}
            {myGraphs.map((graph, index) => this.setGraph(graph, index))}
          </Row>
        </Grid>
      </main>
    );
  }

  private setGraph = (graph: IGraph, index: number) => {
    const { data, graphType, title, yAxis } = graph;
    // const { data, graphType, title, yAxis } = this.props;
    // tslint:disable-next-line:no-console
    console.log(graph, data, graphType, title, yAxis);

    switch (graphType) {
      case "line-graph":
        return (
          <Col md={6} className="box" key={index}>
            <LineGraph data={data} title={title} yAxis={yAxis} />
          </Col>
        );
      case "bar-graph":
        return (
          <Col md={6} className="box" key={index}>
            <BarGraph data={data} title={title} yAxis={yAxis} />
          </Col>
        );
      case "area-graph":
        return (
          <Col md={6} className="box" key={index}>
            <AreaGraph data={data} title={title} yAxis={yAxis} />
          </Col>
        );
      case "pie-graph":
        return (
          <Col md={6} className="box" key={index}>
            <PieGraph data={data} title={title} yAxis={yAxis} />
          </Col>
        );
      case "scatter-graph":
        return (
          <Col md={6} className="box" key={index}>
            <ScatterGraph data={data} title={title} yAxis={yAxis} />
          </Col>
        );
      default:
        return (
          <Col md={12} className="box" key={index}>
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
