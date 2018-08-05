import * as React from "react";
import { Col, FormControl, Grid, Row, Table } from "react-bootstrap";
import SetXYaxis from "./set-xy-axis";

// const data = [
//   { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
//   { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
//   { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
//   { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
//   { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
//   { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
//   { name: "Page G", uv: 3490, pv: 4300, amt: 2100 }
// ];

interface IState {
  data: number[];
  type: string;
  value: number;
}

class CreateNewGraph extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      data: [],
      type: "line-chart",
      value: 0
    };
  }

  public handleChange = (e: any): void => {
    this.setState({
      value: e.target.value
    });
  };

  public render() {
    const { type, value } = this.state;

    return (
      <main className="main">
        <Grid>
          <Row>
            <Col sm={12}>
              <h2>Create graph flow</h2>
              <p>Here we will create a new graph</p>
            </Col>
            <Col sm={12}>
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
                        type="text"
                        placeholder="Enter title"
                        // onChange={this.handleChange}
                      />
                    </th>
                    <th>
                      <FormControl
                        type="text"
                        placeholder="Enter title"
                        // onChange={this.handleChange}
                      />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <FormControl
                        type="text"
                        value={value}
                        placeholder="value"
                        onChange={this.handleChange}
                      />
                    </td>
                    <td>
                      <FormControl
                        type="text"
                        value={value}
                        placeholder="value"
                        // onChange={this.handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <FormControl
                        type="text"
                        value={value}
                        placeholder="value"
                        // onChange={this.handleChange}
                      />
                    </td>
                    <td>
                      <FormControl
                        type="text"
                        value={value}
                        placeholder="value"
                        // onChange={this.handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <FormControl
                        type="text"
                        value={value}
                        placeholder="value"
                        // onChange={this.handleChange}
                      />
                    </td>
                    <td>
                      <FormControl
                        type="text"
                        value={value}
                        placeholder="value"
                        // onChange={this.handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <FormControl
                        type="text"
                        value={value}
                        placeholder="value"
                        // onChange={this.handleChange}
                      />
                    </td>
                    <td>
                      <FormControl
                        type="text"
                        value={value}
                        placeholder="value"
                        // onChange={this.handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <FormControl
                        type="text"
                        value={value}
                        placeholder="value"
                        // onChange={this.handleChange}
                      />
                    </td>
                    <td>
                      <FormControl
                        type="text"
                        value={value}
                        placeholder="value"
                        // onChange={this.handleChange}
                      />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
          <SetXYaxis type={type} value={value} />
        </Grid>
      </main>
    );
  }
}

export default CreateNewGraph;
