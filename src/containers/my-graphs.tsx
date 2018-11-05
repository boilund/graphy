import * as React from "react";
import { Col, Grid, Row } from "react-bootstrap";
import { IGraphData } from "../actions/";
import AreaGraph from "../components/graphs/area-graph";
import BarGraph from "../components/graphs/bar-graph";
import LineGraph from "../components/graphs/line-graph";
import PieGraph from "../components/graphs/pie-graph";
import ScatterGraph from "../components/graphs/scatter-graph";

import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import * as actions from "../actions/";
import { IStoreState } from "../types";

import "./my-graphs.css";

interface IProps {
  graphs: IGraphData[];
  fetchGraphs(): void;
}

class MyGraphs extends React.Component<IProps, {}> {
  constructor(props: any) {
    super(props);
    this.props.fetchGraphs();
  }

  public render() {
    const { graphs } = this.props;

    return (
      <main className="App-main">
        <Grid>
          <Row>
            <Col sm={12}>
              <h1>Your Page</h1>
            </Col>
            {graphs.map((graph, index) => this.showGraph(graph, index))}
          </Row>
        </Grid>
      </main>
    );
  }

  private showGraph = (graph: IGraphData, index: number) => {
    switch (graph.graphType) {
      case "line-graph":
        return (
          <Col xs={6} sm={4} className="box" key={index}>
            <LineGraph {...graph} />
          </Col>
        );
      case "bar-graph":
        return (
          <Col xs={6} sm={4} className="box" key={index}>
            <BarGraph {...graph} />
          </Col>
        );
      case "area-graph":
        return (
          <Col xs={6} sm={4} className="box" key={index}>
            <AreaGraph {...graph} />
          </Col>
        );
      case "pie-graph":
        return (
          <Col xs={6} sm={4} className="box" key={index}>
            <PieGraph {...graph} />
          </Col>
        );
      case "scatter-graph":
        return (
          <Col xs={6} sm={4} className="box" key={index}>
            <ScatterGraph {...graph} />
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
    graphs: state.graphs
  };
}

export function mapDispatchToProps(
  dispatch: ThunkDispatch<IStoreState, undefined, actions.Action>
) {
  return {
    fetchGraphs: () => dispatch(actions.fetchGraphs())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyGraphs);
