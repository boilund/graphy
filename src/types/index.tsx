import { IData, IGraphData } from "../actions/";

export interface IStoreState {
  readonly data: IData[];
  readonly graphType: string;
  readonly graphs: IGraphData[];
  readonly id: string;
  readonly title: string;
  readonly user: firebase.User | null;
  readonly xAxis: string;
  readonly yAxis: string;
}
