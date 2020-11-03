import { BeersActionTypes } from './types';
import { beerError, beersError, beersSuccess, beerSuccess } from './actions';
import { put, call, takeLatest, all, fork } from "redux-saga/effects";
import * as Api from "../../services/Api";
import { unknownError } from "../../utils/api-helper";
import { Action } from 'redux';

type SagaAction<T> = Action & { payload: T };

function* beers() {
  try {
    const res = yield call(Api.getBeers);
    if (res.error) {
      yield put(beersError(res.error));
    } else {
      yield put(beersSuccess(res.data));
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(beersError(err));
    } else {
      yield put(beersError(unknownError("An unknown error occurred")));
    }
  }
}

function* beer({ payload: params }: SagaAction<{ id: number }>) {
  try {
    const res = yield call(Api.getSingleBeer,params);
    if (res.error) {
      yield put(beerError(res.error));
    } else {
      yield put(beerSuccess(res.data));
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(beerError(err));
    } else {
      yield put(beerError(unknownError("An unknown error occurred")));
    }
  }
}

function* watchFetchRequest() {
  yield takeLatest(BeersActionTypes.BEERS_REQUEST, beers);
  yield takeLatest(BeersActionTypes.GET_BEER_REQUEST,beer)
}

export function* toastBeersSaga() {
  yield all([fork(watchFetchRequest)]);
}
