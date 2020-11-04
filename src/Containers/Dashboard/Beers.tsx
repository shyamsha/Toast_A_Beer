import React, { Component, Dispatch } from "react";
import {
  beerRequest,
  beersRequest,
  filterRequest,
  paginationRequest,
} from "./actions";
import { FeedViewBeer } from "./types";
import { ApplicationState } from "../../store";
import { connect } from "react-redux";
import "../../App.css";
import { List, Select, Space, Switch, Input } from "antd";
import "../../App.css";
import ListItems from "./views/ListItems";
import GridItems from "./views/GridItems";
import { push } from "connected-react-router";
import { LeftSquareTwoTone, RightSquareTwoTone } from "@ant-design/icons";

const { Option } = Select;
const { Search } = Input;

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
  onPagination: typeof paginationRequest;
  onFilter: typeof filterRequest;
}

type AllProps = PropsFromState & PropsDispatchFromState;

interface State {
  checked: boolean;
  page: number;
  filterValue: string;
  searchValue: string;
}

class Beers extends Component<AllProps, State> {
  state: State = {
    checked: false,
    page: 1,
    filterValue: "",
    searchValue: "",
  };

  layoutCheck = (checked: boolean) => {
    this.setState({ checked: checked });
  };

  prev = () => {
    this.setState({ page: this.state.page - 1 }, () => {
      if (this.state.page > 1)
        this.props.onPagination({ page: this.state.page });
    });
  };

  next = () => {
    this.setState({ page: this.state.page + 1 }, () => {
      this.props.onPagination({ page: this.state.page });
    });
  };

  handleChange = (value: string) => {
    this.setState({ filterValue: value }, () => {
      if (this.state.filterValue !== "") {
        this.props.onFilter({ malt: this.state.filterValue });
      }
      if (this.state.filterValue !== "" && this.state.filterValue === "None") {
        this.props.onBeers();
      }
    });
  };

  onSearch = (value: string) => {
    this.setState({ searchValue: value }, () => {
      if (this.state.searchValue !== "") {
      }
      if (this.state.filterValue === "") {
      }
    });
  };

  componentDidMount() {
    this.props.onBeers();
  }

  render() {
    const { loading, beers } = this.props;
    return (
      <div>
        <div className="list">
          <div className="container">
            <div className="items">
              <Space>
                <div>
                  <Space>
                    <LeftSquareTwoTone
                      onClick={this.prev}
                      style={{ fontSize: "2rem" }}
                    />
                    <RightSquareTwoTone
                      onClick={this.next}
                      style={{ fontSize: "2rem" }}
                    />
                  </Space>
                </div>
                <div>
                  <Select
                    style={{ width: 220 }}
                    onChange={this.handleChange}
                    placeholder="Select a Ingredient"
                  >
                    <Option value="None">None</Option>
                    <Option value="Maris_Otter_Extra_Pale">
                      Maris Otter Extra Pale
                    </Option>
                    <Option value="Caramalt">Caramalt</Option>
                    <Option value="Munich">Munich</Option>
                    <Option value="Propino_Pale_Malt">Propino Pale Malt</Option>
                    <Option value="Flaked_Oats">Flaked Oats</Option>
                    <Option value="Wheat_Malt">Wheat Malt"</Option>
                    <Option value="Chocolate">Chocolate</Option>
                  </Select>
                </div>
              </Space>
            </div>
            <div className="enditems">
              <Space>
                <div>
                  <Search
                    placeholder="input search text"
                    onSearch={this.onSearch}
                    enterButton
                  />
                </div>
                <div className="switch">
                  <Switch onChange={this.layoutCheck} />
                  <span style={{ paddingLeft: "0.5rem" }}>List</span>
                </div>
              </Space>
            </div>
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
  onPagination: (params: { page: number }) =>
    dispatch(paginationRequest(params)),
  onFilter: (params: { malt: string }) => dispatch(filterRequest(params)),
});

export default connect<any>(mapStateToProps, mapDispatchToProps)(Beers);
