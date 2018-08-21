import * as constants from "../constants";

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

export type SetValue = ISetTitle | ISetXAxis | ISetYAxis;

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
