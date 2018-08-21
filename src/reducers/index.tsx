import { SetValue } from "../actions";
import { SET_TITLE, SET_X_AXIS, SET_Y_AXIS } from "../constants/index";
import { IStoreState } from "../types/index";

export function reducer(state: IStoreState, action: SetValue): IStoreState {
  switch (action.type) {
    case SET_TITLE:
      return { ...state, title: action.title };
    case SET_X_AXIS:
      return { ...state, xAxis: action.xAxis };
    case SET_Y_AXIS:
      return { ...state, yAxis: action.yAxis };
    default:
      return state;
  }
}
