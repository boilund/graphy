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
import { IData } from "../actions/";
import AreaGraph from "../components/graphs/area-graph";
import BarGraph from "../components/graphs/bar-graph";
import LineGraph from "../components/graphs/line-graph";
import PieGraph from "../components/graphs/pie-graph";
import ScatterGraph from "../components/graphs/scatter-graph";
import "./create-new-graph.css";

import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { Dispatch } from "redux";
import * as actions from "../actions/";
import { IStoreState } from "../types/";

interface IProps {
  data: IData[];
  graphType: string;
  title: string;
  xAxis: string;
  yAxis: string;
  setData(data: IData[]): void;
  setGraphType(graphType: string): void;
  setTitle(title: string): void;
  setXAxis(xAxis: string): void;
  setYAxis(yAxis: string): void;
}

interface IState {
  inputData: IData[];
  // id: number;
  row: number;
}

const initialState = {
  inputData: [{ columnX: 0, columnY: 0 }],
  // id: 0,
  row: 1
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

  public render() {
    const { inputData, row } = this.state;
    const { title, xAxis, yAxis } = this.props;

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
                bsStyle="success"
                className={index === lastItem ? "" : "hidden"}
                onClick={this.addRow}
              >
                <FontAwesomeIcon icon="plus-circle" />
              </Button>
              <Button
                bsStyle="danger"
                onClick={this.removeRow}
                id={"remove" + index}
              >
                <FontAwesomeIcon icon="minus-circle" />
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
              <h3>Graph title set</h3>
              <FormControl
                type="text"
                placeholder="Enter graph title"
                value={title}
                onChange={this.handleTitleChange}
              />
              <h3>Data set</h3>
              <Table
                striped={true}
                bordered={true}
                condensed={true}
                hover={true}
              >
                <thead>
                  <tr>
                    <th>
                      <FormControl
                        id="r1c1"
                        type="text"
                        placeholder="Enter X axis name"
                        value={xAxis}
                        onChange={this.handleXAxisChange}
                      />
                    </th>
                    <th>
                      <FormControl
                        id="r1c2"
                        type="text"
                        placeholder="Enter Y axis name"
                        value={yAxis}
                        onChange={this.handleYAxisChange}
                      />
                    </th>
                  </tr>
                </thead>
                <tbody>{inputTable}</tbody>
              </Table>
            </Col>
            <Col sm={12} md={6} className="margin-x graph-column">
              {this.setGraph()}
            </Col>
          </Row>
          <Row>
            <Col sm={12} className="margin-0">
              <LinkContainer to="/my-graphs">
                <Button
                  bsStyle="success"
                  className="save-button"
                  bsSize="large"
                  block={true}
                >
                  Save
                </Button>
              </LinkContainer>
            </Col>
          </Row>
        </Grid>
      </main>
    );
  }

  private setGraph = () => {
    const { id: graphType } = this.props.match.params;
    const { data, title, yAxis } = this.props;
    this.props.setGraphType(graphType);

    switch (graphType) {
      case "line-graph":
        return <LineGraph data={data} title={title} yAxis={yAxis} />;
      case "bar-graph":
        return <BarGraph data={data} title={title} yAxis={yAxis} />;
      case "area-graph":
        return <AreaGraph data={data} title={title} yAxis={yAxis} />;
      case "pie-graph":
        return <PieGraph data={data} title={title} yAxis={yAxis} />;
      case "scatter-graph":
        return <ScatterGraph data={data} title={title} yAxis={yAxis} />;
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

export function mapDispatchToProps(dispatch: Dispatch<actions.SetValue>) {
  return {
    setData: (data: actions.IData[]) => dispatch(actions.setData(data)),
    setGraphType: (graphType: string) =>
      dispatch(actions.setGraphType(graphType)),
    setTitle: (title: string) => dispatch(actions.setTitle(title)),
    setXAxis: (xAxis: string) => dispatch(actions.setXAxis(xAxis)),
    setYAxis: (yAxis: string) => dispatch(actions.setYAxis(yAxis))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateNewGraph);
