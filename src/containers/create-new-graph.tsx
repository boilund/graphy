import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import {
  Button,
  ButtonToolbar,
  Col,
  FormControl,
  FormControlProps,
  FormGroup,
  Grid,
  Row,
  Table
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { IData, IGraphData } from "../actions/";
import AreaGraph from "../components/graphs/area-graph";
import BarGraph from "../components/graphs/bar-graph";
import LineGraph from "../components/graphs/line-graph";
import PieGraph from "../components/graphs/pie-graph";
import ScatterGraph from "../components/graphs/scatter-graph";
import "./create-new-graph.css";

import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { ThunkDispatch } from "redux-thunk";
import * as actions from "../actions/";
import { IStoreState } from "../types/";

import { generateUuid } from "../utilities/generateUuid";
import { getGraphSize } from "../utilities/getGraphSize";
import { pickColor } from "../utilities/pickColor";

interface IProps {
  color: string;
  data: IData[];
  graphType: string;
  id: string | null;
  title: string;
  user: firebase.User | null;
  xAxis: string;
  yAxis: string;
  setColor(color: string): void;
  setData(data: IData[]): void;
  setGraphType(graphType: string): void;
  setGraph(graph: IGraphData, user: firebase.User | null): void;
  setID(id: string | null): void;
  setTitle(title: string): void;
  setXAxis(xAxis: string): void;
  setYAxis(yAxis: string): void;
}

interface IState {
  inputData: IData[];
  row: number;
  windowWidth: number;
}

const initialState = {
  inputData: [{ columnX: 0, columnY: 0 }],
  row: 1,
  windowWidth: 1000
};

class CreateNewGraph extends React.Component<
  RouteComponentProps<{ id: string }> & IProps,
  IState
> {
  constructor(props: any) {
    super(props);
    this.state = initialState;
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleXAxisChange = this.handleXAxisChange.bind(this);
    this.handleYAxisChange = this.handleYAxisChange.bind(this);
    this.addRow = this.addRow.bind(this);
  }

  public componentDidMount() {
    this.setState({
      inputData: this.props.data,
      windowWidth: window.innerWidth
    });
    this.props.setColor(pickColor());
  }

  public render() {
    const { inputData, row } = this.state;
    const { title, xAxis, yAxis, user } = this.props;

    const tableContents = new Array(row).fill({
      columnX: 0,
      columnY: 0
    });

    tableContents.splice(0, inputData.length, ...inputData);
    const lastItem = tableContents.length - 1;

    const inputTable = tableContents.map((item: IData, index: number) => {
      return (
        <tr key={index}>
          <td>
            <FormGroup
              className="form-group"
              validationState={this.getValidationState(item.columnX, "X")}
            >
              <FormControl
                type="text"
                value={item.columnX}
                placeholder="Enter value"
                name="columnX"
                onChange={this.handleDataChange.bind(this, index)}
              />
            </FormGroup>
          </td>
          <td>
            <FormGroup
              className="form-group"
              validationState={this.getValidationState(item.columnY, "Y")}
            >
              <FormControl
                type="text"
                value={item.columnY}
                placeholder="Enter value"
                name="columnY"
                onChange={this.handleDataChange.bind(this, index)}
              />
            </FormGroup>
          </td>
          <td className="buttons">
            <ButtonToolbar>
              <Button
                onClick={this.removeRow}
                id={"remove" + index}
                style={{ backgroundColor: "#F79191", border: "none" }}
              >
                <FontAwesomeIcon
                  icon="minus-circle"
                  style={{ color: "white" }}
                />
              </Button>
              <Button
                className={index === lastItem ? "" : "hidden"}
                onClick={this.addRow}
                style={{ backgroundColor: "#88B0A3", border: "none" }}
              >
                <FontAwesomeIcon
                  icon="plus-circle"
                  style={{ color: "white" }}
                />
              </Button>
            </ButtonToolbar>
          </td>
        </tr>
      );
    });

    return (
      <main className="App-main">
        <Grid>
          <Row>
            <Col sm={12} md={6}>
              <h1 className="sr-only">Create a graph</h1>
              <div className="form-space">
                <h2 className="text-left title">1. Graph title set</h2>
                <FormControl
                  type="text"
                  placeholder="Enter graph title"
                  value={title}
                  onChange={this.handleTitleChange}
                />
              </div>
              <div className="form-space">
                <h2 className="text-left title">2. Data set</h2>
                <Table condensed={true}>
                  <thead>
                    <tr>
                      <th>
                        <FormControl
                          id="r1c1"
                          type="text"
                          placeholder="X axis name"
                          value={xAxis}
                          onChange={this.handleXAxisChange}
                        />
                      </th>
                      <th>
                        <FormControl
                          id="r1c2"
                          type="text"
                          placeholder="Y axis name"
                          value={yAxis}
                          onChange={this.handleYAxisChange}
                        />
                      </th>
                      <th>{null}</th>
                    </tr>
                  </thead>
                  <tbody>{inputTable}</tbody>
                </Table>
              </div>
            </Col>
            <Col sm={12} md={6} className="margin-x graph-column">
              <div className="form-preview">
                <h2 className="text-left title">3. Preview</h2>
                {this.showGraph()}
              </div>
              <Button
                className="save-button"
                bsSize="large"
                block={true}
                onClick={this.save}
                disabled={!user}
              >
                Save
              </Button>
              {!user && (
                <LinkContainer to="/login">
                  <a>You need to login if you want to save your graph</a>
                </LinkContainer>
              )}
            </Col>
          </Row>
        </Grid>
      </main>
    );
  }

  private showGraph = () => {
    const { id: graphType } = this.props.match.params;
    const { color, data, title, yAxis } = this.props;

    this.props.setGraphType(graphType);

    const size = getGraphSize(this.state.windowWidth, "create-page");
    const graphProps = { color, data, title, yAxis, size };

    switch (graphType) {
      case "line-graph":
        return <LineGraph {...graphProps} />;
      case "bar-graph":
        return <BarGraph {...graphProps} />;
      case "area-graph":
        return <AreaGraph {...graphProps} />;
      case "pie-graph":
        return <PieGraph {...graphProps} />;
      case "scatter-graph":
        return <ScatterGraph {...graphProps} />;
      default:
        return;
    }
  };

  private handleTitleChange = (e: any): void => {
    this.props.setTitle(e.target.value);
  };

  private handleXAxisChange = (e: any): void => {
    this.props.setXAxis(e.target.value);
  };

  private handleYAxisChange = (e: any): void => {
    this.props.setYAxis(e.target.value);
  };

  private validateNumber = (value: any): boolean => {
    if (isNaN(value)) {
      return false;
    }
    return true;
  };

  private getValidationState = (
    value: any,
    axis: string
  ): "error" | "success" | "warning" | null | undefined => {
    const { id: graphType } = this.props.match.params;
    const isNumber = this.validateNumber(value);

    switch (graphType) {
      case "scatter-graph":
        if (isNumber) {
          return "success";
        }
        return "error";

      default:
        if (axis === "X") {
          return "success";
        }
        if (isNumber) {
          return "success";
        }
        return "error";
    }
  };

  private handleDataChange = (
    index: number,
    e: React.FormEvent<FormControlProps>
  ): void => {
    const { inputData } = this.state;
    const { name } = e.currentTarget;
    let { value } = e.currentTarget;
    const { id: graphType } = this.props.match.params;

    switch (graphType) {
      case "scatter-graph":
        if (value !== undefined && this.validateNumber(value)) {
          value = +value;
        }
        break;

      default:
        if (
          name === "columnY" &&
          value !== undefined &&
          this.validateNumber(value)
        ) {
          value = +value;
        }
        break;
    }

    const targetData = {
      ...inputData[index],
      [name as any]: value
    };

    inputData.splice(index, 1, targetData);

    this.setState({
      inputData
    });
    // set data to Redux store
    this.props.setData(inputData);
  };

  private addRow = (e: any): void => {
    const { row, inputData } = this.state;
    inputData.push({ columnX: "", columnY: 0 });

    this.setState({
      inputData,
      row: row + 1
    });
  };

  private removeRow = (e: any): void => {
    const { row, inputData } = this.state;
    const reg = /\d+/;
    const targetId = e.currentTarget.id.match(reg)[0];

    inputData.splice(targetId, 1);
    this.setState({
      inputData,
      row: row - 1
    });
  };

  private save = (): void => {
    const {
      color,
      data,
      graphType,
      title,
      xAxis,
      yAxis,
      user,
      id
    } = this.props;

    const currentGraph = {
      color,
      data,
      graphType,
      id: id === null ? generateUuid() : id,
      title,
      xAxis,
      yAxis
    };

    this.props.setGraph(currentGraph, user);
    this.props.history.push("/my-graphs");
  };
}

export function mapStateToProps(state: IStoreState) {
  return {
    color: state.color,
    data: state.data,
    graphType: state.graphType,
    id: state.id,
    title: state.title,
    user: state.user,
    xAxis: state.xAxis,
    yAxis: state.yAxis
  };
}

export function mapDispatchToProps(
  dispatch: ThunkDispatch<IStoreState, undefined, actions.Action>
) {
  return {
    setColor: (color: string) => dispatch(actions.setColor(color)),
    setData: (data: actions.IData[]) => dispatch(actions.setData(data)),
    setGraph: (graph: actions.IGraphData, user: firebase.User | null) =>
      dispatch(actions.setGraph(graph, user)),
    setGraphType: (graphType: string) =>
      dispatch(actions.setGraphType(graphType)),
    setID: (id: string | null) => dispatch(actions.setID(id)),
    setTitle: (title: string) => dispatch(actions.setTitle(title)),
    setXAxis: (xAxis: string) => dispatch(actions.setXAxis(xAxis)),
    setYAxis: (yAxis: string) => dispatch(actions.setYAxis(yAxis))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateNewGraph);
