import * as React from "react";
import {
  Button,
  Col,
  FormControl,
  FormControlProps,
  Grid,
  Row,
  Table
} from "react-bootstrap";
import Complete from "./complete";

// const data = [
//   { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
//   { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
//   { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
//   { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
//   { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
//   { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
//   { name: "Page G", uv: 3490, pv: 4300, amt: 2100 }
// ];

interface IData {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

interface IState {
  data: IData[];
  id: number;
  row: number;
  title: string;
  type: string;
  xAxis: string;
  yAxis: string;
}

const initialState = {
  data: [],
  id: 0,
  row: 1,
  title: "",
  type: "line-chart",
  xAxis: "",
  yAxis: ""
};

class CreateNewGraph extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = initialState;
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleXAxisChange = this.handleXAxisChange.bind(this);
    this.handleYAxisChange = this.handleYAxisChange.bind(this);
  }

  public render() {
    const { data, row, type, title } = this.state;

    const tableContents = new Array(row).fill({
      amt: 0,
      name: "",
      pv: 0,
      uv: 0
    });

    tableContents.splice(0, data.length, ...data);

    const inputTable = tableContents.map((item: IData, index: number) => {
      return (
        <tr key={index}>
          <td>
            <FormControl
              type="text"
              value={item.uv}
              placeholder="value"
              // onChange={this.handleChange}
            />
          </td>
          <td>
            <FormControl
              type="text"
              value={item.pv}
              placeholder="value"
              // onChange={this.handleChange}
            />
          </td>
        </tr>
      );
    });

    return (
      <main className="main">
        <Grid>
          <Row>
            <Col sm={12}>
              <h2>Create graph flow</h2>
              <p>Here we will create a new graph</p>
            </Col>
            <h3>Graph title set</h3>
            <Col sm={12}>
              <FormControl
                type="text"
                placeholder="Enter graph title"
                value={title}
                onChange={this.handleTitleChange}
              />
            </Col>
            <h3>Data set</h3>
            <Col sm={10}>
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
            <Col sm={2}>
              <Button onClick={this.addRow}>Add row</Button>
            </Col>
          </Row>

          <Complete />

        </Grid>
      </main>
    );
  }

  private handleTitleChange = (e: any): void => {
    this.setState({
      title: e.target.value
    });
  };

  private handleXAxisChange = (e: any): void => {
    this.setState({
      xAxis: e.target.value
    });
  };

  private handleYAxisChange = (e: any): void => {
    this.setState({
      yAxis: e.target.value
    });
  };

  private addRow = (e: any): void => {
    const { row } = this.state;

    this.setState({
      row: row + 1
    });
  };
}

export default CreateNewGraph;
