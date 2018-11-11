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

import { getGraphSize } from "../utilities/getGraphSize";
import "./my-graphs.css";

interface IProps {
  graphs: IGraphData[];
  username: string;
  fetchGraphs(): void;
}

interface IState {
  windowWidth: number;
}

class MyGraphs extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.props.fetchGraphs();
    this.state = {
      windowWidth: 1000
    };
  }

  public componentDidMount() {
    this.setState({
      windowWidth: window.innerWidth
    });
  }

  public render() {
    const { username, graphs } = this.props;

    return (
      <main className="App-main">
        <Grid>
          <Row>
            <Col sm={12}>
              <h1>{username}</h1>
            </Col>
            {graphs.map((graph, index) => this.showGraph(graph, index))}
          </Row>
        </Grid>
      </main>
    );
  }

  private showGraph = (graph: IGraphData, index: number) => {
    const size = getGraphSize(this.state.windowWidth, "my-page");

    switch (graph.graphType) {
      case "line-graph":
        return (
          <Col xs={6} sm={4} key={index}>
            <div className="box">
              <LineGraph {...graph} size={size} />
            </div>
          </Col>
        );
      case "bar-graph":
        return (
          <Col xs={6} sm={4} key={index}>
            <div className="box">
              <BarGraph {...graph} size={size} />
            </div>
          </Col>
        );
      case "area-graph":
        return (
          <Col xs={6} sm={4} key={index}>
            <div className="box">
              <AreaGraph {...graph} size={size} />
            </div>
          </Col>
        );
      case "pie-graph":
        return (
          <Col xs={6} sm={4} key={index}>
            <div className="box">
              <PieGraph {...graph} size={size} />
            </div>
          </Col>
        );
      case "scatter-graph":
        return (
          <Col xs={6} sm={4} key={index}>
            <div className="box">
              <ScatterGraph {...graph} size={size} />
            </div>
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
    graphs: state.graphs,
    username: state.username
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
