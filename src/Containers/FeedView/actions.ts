import { BeerActionTypes, FeedViewBeer } from "./types";
import { action } from "typesafe-actions";

export const randomBeerRequest = () => 
  action(BeerActionTypes.RANDOM_BEER_REQUEST);
export const randomBeerSuccess = (res: FeedViewBeer[]) =>
  action(BeerActionTypes.RANDOM_BEER_SUCCESS, res);
export const randomBeerError = (message: Error) =>
  action(BeerActionTypes.RANDOM_BEER_ERROR, message);
