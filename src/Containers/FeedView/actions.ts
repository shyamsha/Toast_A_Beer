import { BeerActionTypes, FeedView } from "./types";
import { action } from "typesafe-actions";

export const randomBeerRequest = () => 
  action(BeerActionTypes.BEERS_REQUEST);
export const randomBeerSuccess = (res: FeedView[]) =>
  action(BeerActionTypes.BEERS_SUCCESS, res);
export const randomBeerError = (message: Error) =>
  action(BeerActionTypes.BEERS_ERROR, message);
