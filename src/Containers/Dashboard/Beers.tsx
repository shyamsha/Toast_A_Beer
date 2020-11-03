import React, { Component, Dispatch } from "react";
import { beerRequest, beersRequest } from "./actions";
import { FeedViewBeer } from "./types";
import { ApplicationState } from "../../store";
import { connect } from "react-redux";
import "../../App.css";
import { List, Switch } from "antd";
import "../../App.css";
import ListItems from "./views/ListItems";
import GridItems from "./views/GridItems";
import { push } from "connected-react-router";
interface PropsFromState {
  loading: boolean;
  beers: FeedViewBeer[];
  beer: FeedViewBeer;
  error: {
    beers: string;
    beer: string;
  };
}

interface PropsDispatchFromState {
  onBeers: typeof beersRequest;
  onBeer: typeof beerRequest;
  onRedirect: typeof push;
}

type AllProps = PropsFromState & PropsDispatchFromState;

interface State {
  checked: boolean;
}

class Beers extends Component<AllProps, State> {
  state: State = {
    checked: false,
  };

  layoutCheck = (checked: boolean) => {
    this.setState({ checked: checked });
  };

  componentDidMount() {
    this.props.onBeers();
  }

  render() {
    const { loading, beers } = this.props;
    return (
      <div>
        <div className="list">
          <div className="switch">
            <Switch onChange={this.layoutCheck} />
            <span style={{ paddingLeft: "0.5rem" }}>List</span>
          </div>
          {this.state.checked ? (
            <List
              loading={loading}
              itemLayout="vertical"
              dataSource={beers !== null ? beers : []}
              bordered={true}
              header={<div className="App-header ">Toast A Beer</div>}
              renderItem={(item: FeedViewBeer) => (
                <ListItems beers={item} onRedirect={this.props.onRedirect} />
              )}
            />
          ) : null}
          {!this.state.checked ? (
            <List
              grid={{ gutter: 16, column: 5 }}
              loading={loading}
              dataSource={beers !== null ? beers : []}
              header={<div className="App-header ">Toast A Beer</div>}
              renderItem={(item: FeedViewBeer) => (
                <GridItems beers={item} onRedirect={this.props.onRedirect} />
              )}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps: any = ({ toastBeers }: ApplicationState) => ({
  loading: toastBeers.loading,
  beers: toastBeers.beers,
  beer: toastBeers.beer,
  error: toastBeers.errors,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  onBeers: () => dispatch(beersRequest()),
  onBeer: (params: { id: number }) => dispatch(beerRequest(params)),
  onRedirect: (route: string, state?: {}) => dispatch(push(route, state)),
});

export default connect<any>(mapStateToProps, mapDispatchToProps)(Beers);
