import React, { Fragment, Component, FC } from "react";
import { Route, Switch } from "react-router";
import FeedView from "../Containers/FeedView/FeedView";

class AppNavigator extends Component<any, any> {

  App: FC = () => (
    <Fragment>
      <Switch>
        <Route path={`/`} component={FeedView} exact />
      </Switch>
    </Fragment>
  );


  render() {

    return <this.App />;

  }
}

export default AppNavigator;
