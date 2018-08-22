import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as actions from "../actions/";
import CreateNewGraph from "../components/create/create-new-graph";
import { IStoreState } from "../types/";

export function mapStateToProps(state: IStoreState) {
  return {
    data: state.data,
    title: state.title,
    xAxis: state.xAxis,
    yAxis: state.yAxis
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.SetValue>) {
  return {
    setData: (data: actions.IData[]) => dispatch(actions.setData(data)),
    setTitle: (title: string) => dispatch(actions.setTitle(title)),
    setXAxis: (xAxis: string) => dispatch(actions.setXAxis(xAxis)),
    setYAxis: (yAxis: string) => dispatch(actions.setYAxis(yAxis))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateNewGraph);
