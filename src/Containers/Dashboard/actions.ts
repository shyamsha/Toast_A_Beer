import { BeersActionTypes, FeedViewBeer } from "./types";
import { action } from "typesafe-actions";

export const beersRequest = () => 
action(BeersActionTypes.BEERS_REQUEST);
export const beersSuccess = (res: FeedViewBeer[]) =>
action(BeersActionTypes.BEERS_SUCCESS, res);
export const beersError = (message: Error) =>
action(BeersActionTypes.BEERS_ERROR, message);