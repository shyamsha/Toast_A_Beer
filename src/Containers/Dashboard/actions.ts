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

export const paginationRequest=(params:{page:number})=>
action(BeersActionTypes.GET_PAGINATION_REQUEST,params)
export const paginationSuccess=(res: FeedViewBeer[])=>
action(BeersActionTypes.GET_PAGINATION_SUCCESS,res)
export const paginationError=(message:Error)=>
action(BeersActionTypes.GET_PAGINATION_ERROR,message)

export const filterRequest=(params:{malt:string})=>
action(BeersActionTypes.GET_FILTER_REQUEST,params)
export const filterSuccess=(res: FeedViewBeer[])=>
action(BeersActionTypes.GET_FILTER_SUCCESS,res)
export const filterError=(message:Error)=>
action(BeersActionTypes.GET_FILTER_ERROR,message)

export const searchRequest=(params:{beer_name:string})=>
action(BeersActionTypes.GET_SEARCH_REQUEST,params)
export const SearchSuccess=(res: FeedViewBeer[])=>
action(BeersActionTypes.GET_SEARCH_SUCCESS,res)
export const searchError=(message:Error)=>
action(BeersActionTypes.GET_SEARCH_ERROR,message)