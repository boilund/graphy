import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChartArea,
  faChartBar,
  faChartLine,
  faChartPie,
  faComment,
  faDownload,
  faMinusCircle,
  faPencilAlt,
  faPlusCircle,
  faShareAlt,
  faSignal
} from "@fortawesome/free-solid-svg-icons";
import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";

library.add(
  faChartArea,
  faChartBar,
  faChartLine,
  faChartPie,
  faComment,
  faDownload,
  faMinusCircle,
  faPencilAlt,
  faPlusCircle,
  faShareAlt,
  faSignal
);

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
