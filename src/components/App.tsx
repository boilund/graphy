import * as React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import { store } from "../store/";
import CreateNewGraph from "./create/create-new-graph";
import Footer from "./footer";
import Header from "./header";
import HomeScreen from "./home-screen";
import Login from "./login";
import MyGraphs from "./my-graphs";

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Header />
            <Switch>
              <Route exact={true} path="/" component={HomeScreen} />
              <Route path="/creating/:id" component={CreateNewGraph} />
              <Route path="/myGraphs" component={MyGraphs} />
              <Route path="/login" component={Login} />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
