export interface Volume {
  value: number;
  unit: string;
}

export interface BoilVolume {
  value: number;
  unit: string;
}

export interface Temp {
  value: number;
  unit: string;
}

export interface MashTemp {
  temp: Temp;
  duration: number;
}

export interface Temp2 {
  value: number;
  unit: string;
}

export interface Fermentation {
  temp: Temp2;
}

export interface Method {
  mash_temp: MashTemp[];
  fermentation: Fermentation;
  twist?: any;
}

export interface Amount {
  value: number;
  unit: string;
}

export interface Malt {
  name: string;
  amount: Amount;
}

export interface Amount2 {
  value: number;
  unit: string;
}

export interface Hop {
  name: string;
  amount: Amount2;
  add: string;
  attribute: string;
}

export interface Ingredients {
  malt: Malt[];
  hops: Hop[];
  yeast: string;
}

export interface FeedViewBeer {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  volume: Volume;
  boil_volume: BoilVolume;
  method: Method;
  ingredients: Ingredients;
  food_pairing: string[];
  brewers_tips: string;
  contributed_by: string;
}

export enum BeersActionTypes {
  BEERS_REQUEST = "@@beers/feed/BEERS_REQUEST",
  BEERS_SUCCESS = "@@beers/feed/BEERS_SUCCESS",
  BEERS_ERROR = "@@beers/feed/BEERS_ERROR",

  GET_BEER_REQUEST = "@@beer/feed/GET_BEER_REQUEST",
  GET_BEER_SUCCESS = "@@beer/feed/GET_BEER_SUCCESS",
  GET_BEER_ERROR = "@@beer/feed/GET_BEER_ERROR",

  GET_PAGINATION_REQUEST = "@@beer/feed/GET_PAGINATION_REQUEST",
  GET_PAGINATION_SUCCESS = "@@beer/feed/GET_PAGINATION_SUCCESS",
  GET_PAGINATION_ERROR = "@@beer/feed/GET_PAGINATION_ERROR",

  GET_FILTER_REQUEST = "@@beer/feed/GET_FILTER_REQUEST",
  GET_FILTER_SUCCESS = "@@beer/feed/GET_FILTER_SUCCESS",
  GET_FILTER_ERROR = "@@beer/feed/GET_FILTER_ERROR",

  GET_SEARCH_REQUEST = "@@beer/feed/GET_SEARCH_REQUEST",
  GET_SEARCH_SUCCESS = "@@beer/feed/GET_SEARCH_SUCCESS",
  GET_SEARCH_ERROR = "@@beer/feed/GET_SEARCH_ERROR",
}

export interface ToastBeersState {
  readonly loading: boolean;
  readonly beers: FeedViewBeer[] | null;
  readonly beer:FeedViewBeer | null;
  readonly errors: {
    beers?: string;
    beer?:string;
  };
}
