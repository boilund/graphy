import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as actions from "../actions/";
import CreateNewGraph from "../components/create/create-new-graph";
import { IStoreState } from "../types/index";

export function mapStateToProps({ title }: IStoreState) {
  return {
    title
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.SetTitle>) {
  return {
    setTitle: (title: string) => dispatch(actions.setTitle(title))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateNewGraph);
