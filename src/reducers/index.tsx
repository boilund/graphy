import { Action } from "../actions";
import {
  SET_DATA,
  SET_GRAPH_DATA,
  SET_ID,
  SET_LOGIN_STATE,
  SET_TITLE,
  SET_TYPE,
  SET_USER_ID,
  SET_USER_NAME,
  SET_X_AXIS,
  SET_Y_AXIS
} from "../constants/";
import { initialState } from "../store/";
import { IStoreState } from "../types/";

export function reducer(
  state: IStoreState = initialState,
  action: Action
): IStoreState {
  switch (action.type) {
    case SET_DATA:
      return { ...state, data: action.data };
    case SET_GRAPH_DATA:
      return { ...state, graphs: action.graphs };
    case SET_ID:
      return { ...state, id: action.id };
    case SET_LOGIN_STATE:
      return { ...state, loginState: action.loginState };
    case SET_TITLE:
      return { ...state, title: action.title };
    case SET_TYPE:
      return { ...state, graphType: action.graphType };
    case SET_USER_ID:
      return { ...state, userId: action.userId };
    case SET_USER_NAME:
      return { ...state, username: action.username };
    case SET_X_AXIS:
      return { ...state, xAxis: action.xAxis };
    case SET_Y_AXIS:
      return { ...state, yAxis: action.yAxis };
    default:
      return state;
  }
}
