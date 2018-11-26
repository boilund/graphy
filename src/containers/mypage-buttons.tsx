import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { IData, IGraphData } from "../actions";
import "./mypage-buttons.css";

import { History } from "history";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import * as actions from "../actions";
import { IStoreState } from "../types";

interface IProps {
  graph: IGraphData;
  history: History;
  setData(data: IData[]): void;
  setID(id: string): void;
  setTitle(title: string): void;
  setXAxis(xAxis: string): void;
  setYAxis(yAxis: string): void;
}

class MypageButtons extends React.Component<IProps, {}> {
  constructor(props: any) {
    super(props);
    this.handleClickEdit = this.handleClickEdit.bind(this);
  }

  public render() {
    return (
      <div className="mypage-buttons">
        <span
          className="mypage-icon d-inline-block"
          onClick={this.handleClickEdit}
        >
          <FontAwesomeIcon icon="pencil-alt" className="mypage-fa" />
        </span>
        <span className="mypage-icon d-inline-block">
          <FontAwesomeIcon icon="download" className="mypage-fa" />
        </span>
        <span className="mypage-icon d-inline-block">
          <FontAwesomeIcon icon="share-alt" className="mypage-fa" />
        </span>
      </div>
    );
  }

  private handleClickEdit = (): void => {
    const { graph, setData, setID, setTitle, setXAxis, setYAxis } = this.props;
    this.props.history.push(`/creating/${graph.graphType}/${graph.id}`);
    setData(graph.data);
    setID(graph.id);
    setTitle(graph.title);
    setXAxis(graph.xAxis);
    setYAxis(graph.yAxis);
  };
}

export function mapStateToProps(state: IStoreState) {
  return {
    user: state.user
  };
}

export function mapDispatchToProps(
  dispatch: ThunkDispatch<IStoreState, undefined, actions.Action>
) {
  return {
    setData: (data: actions.IData[]) => dispatch(actions.setData(data)),
    setID: (id: string) => dispatch(actions.setID(id)),
    setTitle: (title: string) => dispatch(actions.setTitle(title)),
    setXAxis: (xAxis: string) => dispatch(actions.setXAxis(xAxis)),
    setYAxis: (yAxis: string) => dispatch(actions.setYAxis(yAxis))
  };
}

export default withRouter(
  connect<
    {},
    ThunkDispatch<IStoreState, undefined, actions.Action>,
    RouteComponentProps<{ history: History }>
  >(
    mapStateToProps,
    mapDispatchToProps
  )(MypageButtons)
);
