import React, { Component, Dispatch } from 'react'
import { beersRequest } from './actions';
import { FeedViewBeer } from './types';
import { ApplicationState } from "../../store";
import { connect } from "react-redux";

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
}


 class Beers extends Component<AllProps,State> {
   state:State={}
  render() {
    return (
      <div>
        <div>dashboard</div>
      </div>
    )
  }
}

const mapStateToProps: any = ({ toastBeer }: ApplicationState) => ({
  loading: toastBeer.loading,
  beers: toastBeer.beer,
  error: toastBeer.errors,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  onBeers: () => dispatch(beersRequest()),
});

export default connect<any>(mapStateToProps, mapDispatchToProps)(Beers)