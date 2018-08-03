import * as React from 'react';
import { Col, ControlLabel, FormControl, Grid, Row, Table } from 'react-bootstrap';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
  {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
  {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
  {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
  {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
  {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
  {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

interface IState {
  value: number;
}

class CreateNewGraph extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      value: 100,
    }
  }

  public handleChange = (e: any): void => {
    this.setState({
      value: e.target.value,
    });
  }

  public render() {
    const { value } = this.state;

    return (
      <main className="main">
        <Grid>
          <Row>
            <Col sm={12}>
              <h2>Create graph flow</h2>
              <p>Here we will create a new graph</p>
              <LineChart width={730} height={250} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                <Line type="monotone" dataKey="amt" stroke="#8ac38d" />
              </LineChart>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <h3>Data set</h3>
              <Table striped={true} bordered={true} condensed={true} hover={true}>
                <thead>
                  <tr>
                    <th>
                      <FormControl
                          type="text"
                          // value={value}
                          placeholder="Enter title"
                          // onChange={this.handleChange}
                      />
                    </th>
                    <th>
                      <FormControl
                          type="text"
                          // value={value}
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
                          // value={value}
                          placeholder="value"
                          // onChange={this.handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                  <td>
                      <FormControl
                        type="text"
                        // value={value}
                        placeholder="value"
                        // onChange={this.handleChange}
                        />
                    </td>
                    <td>
                      <FormControl
                          type="text"
                          // value={value}
                          placeholder="value"
                          // onChange={this.handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <FormControl
                        type="text"
                        // value={value}
                        placeholder="value"
                        // onChange={this.handleChange}
                        />
                    </td>
                    <td>
                      <FormControl
                          type="text"
                          // value={value}
                          placeholder="value"
                          // onChange={this.handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <FormControl
                        type="text"
                        // value={value}
                        placeholder="value"
                        // onChange={this.handleChange}
                        />
                    </td>
                    <td>
                      <FormControl
                          type="text"
                          // value={value}
                          placeholder="value"
                          // onChange={this.handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <FormControl
                        type="text"
                        // value={value}
                        placeholder="value"
                        // onChange={this.handleChange}
                        />
                    </td>
                    <td>
                      <FormControl
                          type="text"
                          // value={value}
                          placeholder="value"
                          // onChange={this.handleChange}
                      />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <h3>X and Y set</h3>
            </Col>
            <Col sm={6}>
              <ControlLabel>Select X</ControlLabel>
                <FormControl componentClass="select" placeholder="select">
                  <option value="select">select</option>
                  <option value="other">...</option>
                </FormControl>
            </Col>
            <Col sm={6}>
              <ControlLabel>Select Y</ControlLabel>
                <FormControl componentClass="select" placeholder="select">
                  <option value="select">select</option>
                  <option value="other">...</option>
                </FormControl>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <h3>Choose chart type</h3>
            </Col>
            <Col sm={2}>
              <Button bsStyle="primary" bsSize="large">Line chart</Button>
            </Col>
            <Col sm={2}>
              <Button bsStyle="primary" bsSize="large">Bar chart</Button>
            </Col>
            <Col sm={2}>
              <Button bsStyle="primary" bsSize="large">Area chart</Button>
            </Col>
            <Col sm={2}>
              <Button bsStyle="primary" bsSize="large">Pie chart</Button>
            </Col>
            <Col sm={2}>
              <Button bsStyle="primary" bsSize="large">Radar chart</Button>
            </Col>
            <Col sm={2}>
              <Button bsStyle="primary" bsSize="large">Scatter chart</Button>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <h3>Completed!</h3>
            </Col>
          </Row>
        </Grid>
      </main>
    );
  }
}

export default CreateNewGraph;