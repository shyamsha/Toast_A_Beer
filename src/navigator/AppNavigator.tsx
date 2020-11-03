import React, { Fragment, Component, FC } from "react";
import { Route, Switch } from "react-router";
import Beers from "../Containers/Dashboard/Beers";
import FeedView from "../Containers/FeedView/FeedView";
import { RouteEnums } from "./RouteEnums";

class AppNavigator extends Component<any, any> {
  App: FC = () => (
    <Fragment>
      <Switch>
        <Route path={`/`} component={FeedView} exact />
        <Route path={`/${RouteEnums.DASHBOARD}`} component={Beers} exact />
      </Switch>
    </Fragment>
  );

  render() {
    return <this.App />;
  }
}

export default AppNavigator;
