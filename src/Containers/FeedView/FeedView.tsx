import React, { Component, Dispatch, Fragment } from "react";
import { List } from "antd";
import { randomBeerRequest } from "./actions";
import { FeedViewBeer } from "./types";
import { ApplicationState } from "../../store";
import { connect } from "react-redux";
import FeedViewItem from "./views/FeedViewItem";
import "../../App.css"
interface PropsFromState {
  loading: boolean;
  beer: FeedViewBeer[];
  error: {
    beer: string;
  };
}

interface PropsDispatchFromState {
  onRandomBeer: typeof randomBeerRequest;
}

type AllProps = PropsFromState & PropsDispatchFromState;

interface State {
  visible: boolean;
}

class FeedView extends Component<AllProps, State> {
  state: State = {
    visible: false,
  };

  componentDidMount() {
    this.props.onRandomBeer();
    // @ts-ignore
    // this.interval = setInterval(() => {
    //   this.props.onRandomBeer()
    // }, 5000);
  }

  componentWillUnmount() {
    // @ts-ignore
    // clearInterval(this.interval);
  }

  render() {
    const { beer, loading } = this.props;
    return (
      <Fragment>
        <div style={{padding:"4rem"}}>
          <List
            loading={loading}
            itemLayout="vertical"
            dataSource={beer!==null?beer:[]}
            bordered={true}
            header={<div className="App-header ">Random Beer</div>}
            renderItem={(item) => <FeedViewItem beer={item} />}
          />
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
});

export default connect<any>(mapStateToProps, mapDispatchToProps)(FeedView);
