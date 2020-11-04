import React, { Component, Dispatch, Fragment } from "react";
import { Button, List } from "antd";
import { randomBeerRequest } from "./actions";
import { FeedViewBeer } from "./types";
import { ApplicationState } from "../../store";
import { connect } from "react-redux";
import FeedViewItem from "./views/FeedViewItem";
import "../../App.css"
import { push } from "connected-react-router";
import { RouteEnums } from "../../navigator/RouteEnums";
interface PropsFromState {
  loading: boolean;
  beer: FeedViewBeer[];
  error: {
    beer: string;
  };
}

interface PropsDispatchFromState {
  onRandomBeer: typeof randomBeerRequest;
  onNavigate: typeof push;
}

type AllProps = PropsFromState & PropsDispatchFromState;

interface State {
}

class FeedView extends Component<AllProps, State> {
  state: State = {
  };

  redirect=()=>{
    this.props.onNavigate(`/${RouteEnums.DASHBOARD}`)
  }

  componentDidMount() {
    this.props.onRandomBeer();
    // @ts-ignore
    this.interval = setInterval(() => {
      this.props.onRandomBeer()
    }, 5000);
  }

  componentWillUnmount() {
    // @ts-ignore
    clearInterval(this.interval);
  }

  render() {
    const { beer, loading } = this.props;
    return (
      <Fragment>
        <div className="list">
          <List
            loading={loading}
            itemLayout="vertical"
            dataSource={beer!==null?beer:[]}
            bordered={true}
            header={<div className="App-header ">Random Beer</div>}
            renderItem={(item) => <FeedViewItem beer={item} />}
          />
        </div>
        <div className="button">
          <Button type="primary" onClick={this.redirect}>Go To Dashboard</Button>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps: any = ({ toastBeer }: ApplicationState) => ({
  loading: toastBeer.loading,
  beer: toastBeer.beer,
  error: toastBeer.errors,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  onRandomBeer: () => dispatch(randomBeerRequest()),
  onNavigate:(route: string, state?: {})=>dispatch(push(route,state))
});

export default connect<any>(mapStateToProps, mapDispatchToProps)(FeedView);
