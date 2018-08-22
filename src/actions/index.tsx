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

export interface IData {
  columnX: string | number;
  columnY: number;
}

export interface ISetData {
  data: IData[];
  type: constants.SET_DATA;
}

export type SetValue = ISetTitle | ISetXAxis | ISetYAxis | ISetData;

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

export function setData(data: IData[]): ISetData {
  return {
    data,
    type: constants.SET_DATA
  };
}
