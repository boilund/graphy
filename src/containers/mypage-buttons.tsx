import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { IGraphData } from "../actions";
import "./mypage-buttons.css";

import { History } from "history";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import * as actions from "../actions";
import { IStoreState } from "../types";

interface IProps {
  graph: IGraphData;
  history: History;
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
    const { graph } = this.props;
    this.props.history.push(`/creating/${graph.graphType}/${graph.id}`);
  };
}

export function mapDispatchToProps(
  dispatch: ThunkDispatch<IStoreState, undefined, actions.Action>
) {
  return {};
}

export default withRouter(
  connect<
    {},
    ThunkDispatch<IStoreState, undefined, actions.Action>,
    RouteComponentProps<{ history: History }>
  >(
    undefined,
    mapDispatchToProps
  )(MypageButtons)
);
