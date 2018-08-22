import { IData } from "../actions/";

export interface IStoreState {
  readonly title: string;
  readonly xAxis: string;
  readonly yAxis: string;
  readonly data: IData[];
}
