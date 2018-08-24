import { IData } from "../actions/";

export interface IStoreState {
  readonly data: IData[];
  readonly graphType: string;
  readonly title: string;
  readonly xAxis: string;
  readonly yAxis: string;
}
