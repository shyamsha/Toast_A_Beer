import { ToastBeerState, BeerActionTypes } from "./types";
import { Reducer } from "redux";

const initialState: ToastBeerState = {
  loading: false,
  beers: null,
  beer: null,
  errors: {
    beer: undefined,
  },
};

type A<T = string, U = any> = { type: T; payload: U };

const reducer: Reducer<ToastBeerState, A> = (
  state: ToastBeerState = initialState,
  action: A
) => {
  switch (action.type) {
    case BeerActionTypes.RANDOM_BEER_REQUEST:
      return {
        ...state,
        loading: true,
        errors: { ...state.errors, beer: undefined },
      };
    case BeerActionTypes.RANDOM_BEER_SUCCESS:
      return { ...state, loading: false, beer: action.payload };
    case BeerActionTypes.RANDOM_BEER_ERROR:
      return {
        ...state,
        loading: false,
        errors: { ...state.errors, beer: action.payload },
      };

    
    default:
      return state;
  }
};

export { initialState as toastBeerInitialState, reducer as toastBeerReducer };
