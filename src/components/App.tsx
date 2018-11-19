import * as React from "react";
import { Provider } from "react-redux";
import Router from "../containers/Router";
import { store } from "../store/";
import "./App.css";

const App: React.SFC = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
