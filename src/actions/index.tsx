import * as firebase from "firebase/app";
import { ThunkAction } from "redux-thunk";
import * as constants from "../constants";
import { firebaseAuth, firebaseGoogleProvider } from "../firebase";
import { IStoreState } from "../types";

export interface IGraphData {
  data: IData[];
  graphType: string;
  id: string;
  title: string;
  xAxis: string;
  yAxis: string;
}

export interface ISetGraphs {
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

export interface IFetchUser {
  user: firebase.User | null;
  type: constants.FETCH_USER;
}

export type Action =
  | ISetGraphs
  | ISetData
  | ISetID
  | ISetType
  | ISetTitle
  | ISetXAxis
  | ISetYAxis
  | IFetchUser;

type ThunkResult<R> = ThunkAction<R, IStoreState, undefined, Action>;

export const fetchGraphs = (): ThunkResult<void> => dispatch => {
  const myData = localStorage.getItem("myGraph");
  if (myData) {
    const graphs = JSON.parse(myData);
    dispatch({ graphs, type: constants.SET_GRAPH_DATA });
  }
};

export const setGraphs = (
  graphs: IGraphData[]
): ThunkResult<void> => dispatch => {
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

export const fetchUser = (): ThunkResult<void> => dispatch => {
  firebaseAuth.onAuthStateChanged(user => {
    if (user) {
      dispatch({
        type: constants.FETCH_USER,
        user
      });
    } else {
      dispatch({
        type: constants.FETCH_USER,
        user: null
      });
    }
  });
};

