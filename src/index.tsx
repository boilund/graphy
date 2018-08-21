import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChartArea,
  faChartBar,
  faChartLine,
  faChartPie,
  faSignal
} from "@fortawesome/free-solid-svg-icons";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, Store } from "redux";
// import App from "./components/App";
// import { Title } from "./actions/";
import CreateNewGraph from "./containers/create-new-graph";
import "./index.css";
// import registerServiceWorker from "./registerServiceWorker";
import { title } from "./reducers/";
import { IStoreState } from "./types/";

library.add(faChartArea, faChartBar, faChartLine, faChartPie, faSignal);

const devTools: any = (window as any).__REDUX_DEVTOOLS_EXTENSION__
  ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()(createStore)
  : createStore;

const initialState = { title: "" };
const store: Store<IStoreState> = devTools(title, initialState);

ReactDOM.render(
  <Provider store={store}>
    <CreateNewGraph />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
// registerServiceWorker();
