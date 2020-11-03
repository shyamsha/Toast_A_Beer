import { BeersActionTypes, FeedViewBeer } from "./types";
import { action } from "typesafe-actions";

export const beersRequest = () => 
action(BeersActionTypes.BEERS_REQUEST);
export const beersSuccess = (res: FeedViewBeer[]) =>
action(BeersActionTypes.BEERS_SUCCESS, res);
export const beersError = (message: Error) =>
action(BeersActionTypes.BEERS_ERROR, message);

export const beerRequest = (params: { id: number }) => 
action(BeersActionTypes.GET_BEER_REQUEST,params);
export const beerSuccess = (res: FeedViewBeer) =>
action(BeersActionTypes.GET_BEER_SUCCESS, res);
export const beerError = (message: Error) =>
action(BeersActionTypes.GET_BEER_ERROR, message);