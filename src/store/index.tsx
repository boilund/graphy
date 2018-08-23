import { createStore, Store } from "redux";
import { reducer } from "../reducers/";
import { IStoreState } from "../types/";

export const initialState = {
  data: [{ columnX: "", columnY: 0 }],
  title: "",
  xAxis: "",
  yAxis: ""
};

const devTools: any = (window as any).__REDUX_DEVTOOLS_EXTENSION__
  ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()(createStore)
  : createStore;

export const store: Store<IStoreState> = devTools(reducer, initialState);
