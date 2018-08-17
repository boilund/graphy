import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import CreateNewGraph from "./create/creat-new-graph";
import Footer from "./footer";
import Header from "./header";
import HomeScreen from "./home-screen";
import Login from "./login";
import MyGraphs from "./my-graphs";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
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
      </div>
    );
  }
}

export default App;
