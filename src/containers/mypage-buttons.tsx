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

interface IState {
  openMenus: boolean;
}

class MypageButtons extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.toggleMenus = this.toggleMenus.bind(this);
    this.handleClickEdit = this.handleClickEdit.bind(this);
    this.state = {
      openMenus: false
    };
  }

  public render() {
    const { openMenus } = this.state;
    return (
      <React.Fragment>
        {!openMenus && (
          <div onMouseEnter={this.toggleMenus}>
            <FontAwesomeIcon icon="ellipsis-v" className="fa-2x menu" />
          </div>
        )}
        {openMenus && (
          <div className="mypage-buttons" onMouseLeave={this.toggleMenus}>
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
        )}
      </React.Fragment>
    );
  }

  private toggleMenus = () => {
    this.setState({
      openMenus: !this.state.openMenus
    });
  };

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
