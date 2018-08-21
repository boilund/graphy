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
import { createStore } from "redux";
// import App from "./components/App";
import { Title } from "./actions/";
import CreateNewGraph from "./containers/create-new-graph";
import "./index.css";
// import registerServiceWorker from "./registerServiceWorker";
import { title } from "./reducers/";
import { IStoreState } from "./types/";

library.add(faChartArea, faChartBar, faChartLine, faChartPie, faSignal);

const store = createStore<IStoreState, Title, null, null>(title, {
  title: ""
});

ReactDOM.render(
  <Provider store={store}>
    <CreateNewGraph />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
// registerServiceWorker();
