import { applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { reducer } from "../reducers/";
import { IStoreState } from "../types/";

export const initialState = {
  data: [{ columnX: "", columnY: 0 }],
  graphType: "",
  id: "",
  title: "",
  xAxis: "",
  yAxis: ""
};

export const store: Store<IStoreState> = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
