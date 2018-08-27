import * as React from "react";
import { Col, Grid, Row } from "react-bootstrap";
import { IData } from "../actions/";
import AreaGraph from "../components/graphs/area-graph";
import BarGraph from "../components/graphs/bar-graph";
import LineGraph from "../components/graphs/line-graph";

import { connect } from "react-redux";
import { IStoreState } from "../types";

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
              <div className="box">
                <div>{this.setGraph()}</div>
              </div>
            </Col>
          </Row>
        </Grid>
      </main>
    );
  }

  private setGraph = () => {
    const { data, graphType, title, yAxis } = this.props;

    switch (graphType) {
      case "line-graph":
        return <LineGraph data={data} title={title} yAxis={yAxis} />;
      case "bar-graph":
        return <BarGraph data={data} title={title} yAxis={yAxis} />;
      case "area-graph":
        return <AreaGraph data={data} title={title} yAxis={yAxis} />;
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
