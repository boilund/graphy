import { applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { reducer } from "../reducers/";
import { IStoreState } from "../types/";

export const initialState = {
  color: "#FC7849",
  data: [{ columnX: "", columnY: 0 }],
  graphType: "",
  graphs: [],
  id: null,
  title: "",
  user: null,
  xAxis: "",
  yAxis: ""
};

export const store: Store<IStoreState> = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
