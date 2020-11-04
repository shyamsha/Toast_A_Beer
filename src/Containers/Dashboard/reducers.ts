import { ToastBeersState, BeersActionTypes } from "./types";
import { Reducer } from "redux";

const initialState: ToastBeersState = {
  loading: false,
  beers: null,
  beer: null,
  errors: {
    beers: undefined,
    beer: undefined,
  },
};

type A<T = string, U = any> = { type: T; payload: U };

const reducer: Reducer<ToastBeersState, A> = (
  state: ToastBeersState = initialState,
  action: A
) => {
  switch (action.type) {
    case BeersActionTypes.BEERS_REQUEST:
      return {
        ...state,
        loading: true,
        errors: { ...state.errors, beers: undefined },
      };
    case BeersActionTypes.BEERS_SUCCESS:
      return { ...state, loading: false, beers: action.payload };
    case BeersActionTypes.BEERS_ERROR:
      return {
        ...state,
        loading: false,
        errors: { ...state.errors, beers: action.payload },
      };
    case BeersActionTypes.GET_BEER_REQUEST:
      return {
        ...state,
        loading: true,
        errors: { ...state.errors, beer: undefined },
      };
    case BeersActionTypes.GET_BEER_SUCCESS:
      return { ...state, loading: false, beer: action.payload };
    case BeersActionTypes.GET_BEER_ERROR:
      return {
        ...state,
        loading: false,
        errors: { ...state.errors, beer: action.payload },
      };
    case BeersActionTypes.GET_PAGINATION_REQUEST:
      return {
        ...state,
        loading: true,
        errors: { ...state.errors, beers: undefined },
      };
    case BeersActionTypes.GET_PAGINATION_SUCCESS:
      return { ...state, loading: false, beers: action.payload };
    case BeersActionTypes.GET_PAGINATION_ERROR:
      return {
        ...state,
        loading: false,
        errors: { ...state.errors, beers: action.payload },
      };
    case BeersActionTypes.GET_FILTER_REQUEST:
      return {
        ...state,
        loading: true,
        errors: { ...state.errors, beers: undefined },
      };
    case BeersActionTypes.GET_FILTER_SUCCESS:
      return { ...state, loading: false, beers: action.payload };
    case BeersActionTypes.GET_FILTER_ERROR:
      return {
        ...state,
        loading: false,
        errors: { ...state.errors, beers: action.payload },
      };
      case BeersActionTypes.GET_SEARCH_REQUEST:
        return {
          ...state,
          loading: true,
          errors: { ...state.errors, beers: undefined },
        };
      case BeersActionTypes.GET_SEARCH_SUCCESS:
        return { ...state, loading: false, beers: action.payload };
      case BeersActionTypes.GET_SEARCH_ERROR:
        return {
          ...state,
          loading: false,
          errors: { ...state.errors, beers: action.payload },
        };
    default:
      return state;
  }
};

export { initialState as toastBeersInitialState, reducer as toastBeersReducer };
