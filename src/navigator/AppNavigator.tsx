import React, { Fragment, Component, Dispatch, FC } from "react";
import { Route, Switch } from "react-router";
import { connect } from "react-redux";

// import { ApplicationState } from "../store";


interface PropsFromState {}

interface PropsDispatchFromState {}

type AllProps = PropsFromState & PropsDispatchFromState;

interface State {
}

class AppNavigator extends Component<any, any> {
  state: State = {
  };


  App: FC = () => (
    <Fragment>
      <Switch>
        <Route path={`/`} component={()=>null} exact />
      </Switch>
    </Fragment>
  );


  render() {

    return <this.App />;

  }
}

const mapStateToProps: any = () => ({});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({});

export default connect<any>(mapStateToProps, mapDispatchToProps)(AppNavigator);
