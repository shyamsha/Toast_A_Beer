import { combineReducers, Dispatch, Action, AnyAction } from 'redux'
import { RouterState, connectRouter } from 'connected-react-router';
import { all, fork } from 'redux-saga/effects';
import { History } from 'history'
import { Reducer } from 'typesafe-actions';
import { ToastBeersState } from './Containers/Dashboard/types';
import { ToastBeerState } from './Containers/FeedView/types';
import { toastBeerReducer } from './Containers/FeedView/reducers';
import { toastBeerSaga } from './Containers/FeedView/sagas';
import { toastBeersReducer } from './Containers/Dashboard/reducers';
import { toastBeersSaga } from './Containers/Dashboard/sagas';


// The top-level state object.
//
// `connected-react-router` already injects the router state typings for us,
// so we can ignore them here.
export interface ApplicationState {
  toastBeers:ToastBeersState;
  toastBeer:ToastBeerState;
  router: RouterState<History.LocationState>
}

// Additional props for connected React components. This prop is passed by default with `connect()`
export interface ConnectedReduxProps<A extends Action = AnyAction> {
  dispatch: Dispatch<A>
}

// Whenever an action is dispatched, Redux will update each top-level application state property
// using the reducer with the matching name. It's important that the names match exactly, and that
// the reducer acts on the corresponding ApplicationState property type.
export const createRootReducer = (history: History) =>
  combineReducers({
    toastBeers: toastBeersReducer as Reducer<ToastBeersState, AnyAction>,
    toastBeer: toastBeerReducer as Reducer<ToastBeerState, AnyAction>,
    router: connectRouter(history)
  })

// Here we use `redux-saga` to trigger actions asynchronously. `redux-saga` uses something called a
// "generator function", which you can read about here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
export function* rootSaga() {
  yield all([fork(toastBeerSaga)])
  yield all([fork(toastBeersSaga)])
}
