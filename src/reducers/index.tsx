import { SetValue } from "../actions";
import { SET_DATA, SET_TITLE, SET_X_AXIS, SET_Y_AXIS } from "../constants/";
import { IStoreState } from "../types/";

export function reducer(state: IStoreState, action: SetValue): IStoreState {
  switch (action.type) {
    case SET_TITLE:
      return { ...state, title: action.title };
    case SET_X_AXIS:
      return { ...state, xAxis: action.xAxis };
    case SET_Y_AXIS:
      return { ...state, yAxis: action.yAxis };
    case SET_DATA:
      return { ...state, data: action.data };
    default:
      return state;
  }
}
