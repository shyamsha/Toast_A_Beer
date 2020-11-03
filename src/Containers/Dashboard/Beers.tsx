import React, { Component, Dispatch } from "react";
import { beersRequest } from "./actions";
import { FeedViewBeer } from "./types";
import { ApplicationState } from "../../store";
import { connect } from "react-redux";
import "../../App.css";
import { List, Switch } from "antd";
import "../../App.css";
import ListItems from "./views/ListItems";
import GridItems from "./views/GridItems";
interface PropsFromState {
  loading: boolean;
  beers: FeedViewBeer[];
  error: {
    beers: string;
  };
}

interface PropsDispatchFromState {
  onBeers: typeof beersRequest;
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
        {JSON.stringify(this.state.checked)}
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
              renderItem={(item: FeedViewBeer) => <ListItems beers={item} />}
            />
          ) : null}
          {!this.state.checked ? (
            <List
              grid={{ gutter: 16, column: 5 }}
              loading={loading}
              dataSource={beers !== null ? beers : []}
              header={<div className="App-header ">Toast A Beer</div>}
              renderItem={(item: FeedViewBeer) => <GridItems beers={item} />}
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
  error: toastBeers.errors,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  onBeers: () => dispatch(beersRequest()),
});

export default connect<any>(mapStateToProps, mapDispatchToProps)(Beers);
