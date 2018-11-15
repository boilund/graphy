import * as React from "react";
import { Provider } from "react-redux";
import Router from "../containers/Router";
import { store } from "../store/";
import "./App.css";

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
