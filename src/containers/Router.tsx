import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Footer from "../components/footer";
import HomeScreen from "../components/home-screen";
import CreateUpdateGraph from "./create-update-graph";
import Header from "./header";
import Login from "./login";
import MyGraphs from "./my-graphs";

import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import * as actions from "../actions/";
import { IStoreState } from "../types";

interface IProps {
  fetchUser(): void;
}

class Router extends React.Component<IProps, {}> {
  public componentDidMount() {
    this.props.fetchUser();
  }

  public render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact={true} path="/" component={HomeScreen} />
            <Route path="/creating/:id" component={CreateUpdateGraph} />
            <Route path="/my-graphs" component={MyGraphs} />
            <Route path="/login" component={Login} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export function mapDispatchToProps(
  dispatch: ThunkDispatch<IStoreState, undefined, actions.Action>
) {
  return {
    fetchUser: () => dispatch(actions.fetchUser())
  };
}

export default connect(
  undefined,
  mapDispatchToProps
)(Router);
