import { ThunkAction } from "redux-thunk";
import * as constants from "../constants";
import { IStoreState } from "../types";

export interface IGraphData {
  data: IData[];
  graphType: string;
  id: string;
  title: string;
  xAxis: string;
  yAxis: string;
}

export interface ISetGraphData {
  graphs: IGraphData[];
  type: constants.SET_GRAPH_DATA;
}

export interface IData {
  columnX: string | number;
  columnY: number;
}

export interface ISetData {
  data: IData[];
  type: constants.SET_DATA;
}

export interface ISetID {
  id: string;
  type: constants.SET_ID;
}

export interface ISetType {
  graphType: string;
  type: constants.SET_TYPE;
}

export interface ISetTitle {
  title: string;
  type: constants.SET_TITLE;
}

export interface ISetXAxis {
  xAxis: string;
  type: constants.SET_X_AXIS;
}

export interface ISetYAxis {
  yAxis: string;
  type: constants.SET_Y_AXIS;
}

export type Action =
  | ISetGraphData
  | ISetData
  | ISetID
  | ISetType
  | ISetTitle
  | ISetXAxis
  | ISetYAxis;

type ThunkResult<R> = ThunkAction<R, IStoreState, undefined, Action>;

export const setGraphData = (
  graph: IGraphData
): ThunkResult<void> => dispatch => {
  // tslint:disable-next-line:no-console
  console.log("action");
  const myData = localStorage.getItem("myGraph");
  let graphs = [];
  if (myData) {
    graphs = [...JSON.parse(myData).graphs];
  }
  graphs.push(graph);

  localStorage.setItem("myGraph", JSON.stringify(graphs));
  dispatch({ graphs, type: constants.SET_GRAPH_DATA });
};

export function setData(data: IData[]): ISetData {
  return {
    data,
    type: constants.SET_DATA
  };
}

export function setGraphType(graphType: string): ISetType {
  return {
    graphType,
    type: constants.SET_TYPE
  };
}

export function setID(id: string): ISetID {
  return {
    id,
    type: constants.SET_ID
  };
}

export function setTitle(title: string): ISetTitle {
  return {
    title,
    type: constants.SET_TITLE
  };
}

export function setXAxis(xAxis: string): ISetXAxis {
  return {
    type: constants.SET_X_AXIS,
    xAxis
  };
}

export function setYAxis(yAxis: string): ISetYAxis {
  return {
    type: constants.SET_Y_AXIS,
    yAxis
  };
}
