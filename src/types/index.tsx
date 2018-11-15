import { IData, IGraphData } from "../actions/";

export interface IStoreState {
  readonly data: IData[];
  readonly graphType: string;
  readonly graphs: IGraphData[];
  readonly id: string;
  readonly loginState: boolean;
  readonly title: string;
  readonly user: firebase.User | null;
  readonly userId: string;
  readonly username: string;
  readonly xAxis: string;
  readonly yAxis: string;
}
