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

export interface FeedView {
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

export enum BeerActionTypes {
  BEERS_REQUEST = "@@beers/feed/BEERS_REQUEST",
  BEERS_SUCCESS = "@@beers/feed/BEERS_SUCCESS",
  BEERS_ERROR = "@@beers/feed/BEERS_ERROR",

  GET_BEER_REQUEST = "@@beer/feed/GET_BEER_REQUEST",
  GET_BEER_SUCCESS = "@@beer/feed/GET_BEER_SUCCESS",
  GET_BEER_ERROR = "@@beer/feed/GET_BEER_ERROR",

  RANDOM_BEER_REQUEST = "@@beer/feed/RANDOM_BEER_REQUEST",
  RANDOM_BEER_SUCCESS = "@@beer/feed/RANDOM_BEER_SUCCESS",
  RANDOM_BEER_ERROR = "@@beer/feed/RANDOM_BEER_ERROR",
}

export interface ToastBeerState {
  readonly loading: boolean;
  readonly beers: FeedView[] | null;
  readonly beer: FeedView | null;
  readonly errors: {
    beers?: string;
    beer?: string;
  };
}
