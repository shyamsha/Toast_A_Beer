import React, { Component, Dispatch, ReactNode } from "react";
import { connect } from "react-redux";
import { ApplicationState } from "../../store";
import { beerRequest, } from "./actions";
import { FeedViewBeer } from "./types";
import "../../App.css";
import { PageHeader, Descriptions, Typography } from "antd";

const { Paragraph } = Typography;

interface PropsFromState {
  loading: boolean;
  beers: FeedViewBeer[];
  beer: FeedViewBeer[];
  error: {
    beers: string;
    beer: string;
  };
  match: {
    isExact: boolean;
    params: { id: string };
    path: string;
    url: string;
  };
}

interface PropsDispatchFromState {
  onBeer: typeof beerRequest;
}

type AllProps = PropsFromState & PropsDispatchFromState;

interface State {
}

class BeerItemDetails extends Component<AllProps, State> {
  state: State = {
  };

  renderContent = (item: FeedViewBeer) => (
    <div>
      <Descriptions size="small" column={4}>
        <Descriptions.Item label="First Brewed">
          {item.first_brewed}
        </Descriptions.Item>
        <Descriptions.Item label="Attenuation Level">
          {item.attenuation_level}
        </Descriptions.Item>
        <Descriptions.Item label="Temperature">
          {item.method.fermentation.temp.value} celsius
        </Descriptions.Item>
        <Descriptions.Item label="Boil Volume">
          {item.boil_volume.value} liters
        </Descriptions.Item>
        <Descriptions.Item label="Beer measurement">
          {item.ibu}
        </Descriptions.Item>
        <Descriptions.Item label="Alcohol by volume">
          {item.ibu}
        </Descriptions.Item>
        <Descriptions.Item label="pH">{item.ph}</Descriptions.Item>
        <Descriptions.Item label="Yeasts">
          {item.ingredients.yeast}
        </Descriptions.Item>
      </Descriptions>
      <div className="title">Ingredients</div>
      {item.ingredients.malt.map((ele) => (
        <Paragraph>{ele.name} ,</Paragraph>
      ))}
      <div className="title">Description</div>
      <Paragraph>{item.description}</Paragraph>
      <div className="title">Food Pairing</div>
      {item.food_pairing.map((ele) => (
        <Paragraph>{ele}</Paragraph>
      ))}
      <div className="title">Brewers Tips</div>
      <Paragraph>{item.brewers_tips}</Paragraph>
    </div>
  );

  Content = ({ children }: { children: ReactNode }) => {
    return (
      <div className="content">
        <div className="main">{children}</div>
      </div>
    );
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.onBeer({ id: Number(id) });
  }

  render() {
    const { beer } = this.props;
    return (
      <div>
        <PageHeader
          className="site-page-header-responsive"
          onBack={() => window.history.back()}
          title={beer[0].name}
          subTitle={beer[0].tagline}
        >
          <this.Content>{this.renderContent(beer[0])}</this.Content>
        </PageHeader>
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
  onBeer: (params: { id: number }) => dispatch(beerRequest(params)),
});

export default connect<any>(
  mapStateToProps,
  mapDispatchToProps
)(BeerItemDetails);
