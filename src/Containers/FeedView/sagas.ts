import { BeerActionTypes } from './types';
import { randomBeerError, randomBeerSuccess } from './actions';
import { put, call, takeLatest, all, fork } from "redux-saga/effects";
import * as Api from "../../services/Api";
import { unknownError } from "../../utils/api-helper";

// type SagaAction<T> = Action & { payload: T };

function* randomBeer() {
  try {
    const res = yield call(Api.randomBeer);
    if (res.error) {
      yield put(randomBeerError(res.error));
    } else {
      yield put(randomBeerSuccess(res.data));
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(randomBeerError(err));
    } else {
      yield put(randomBeerError(unknownError("An unknown error occurred")));
    }
  }
}



function* watchFetchRequest() {
  yield takeLatest(BeerActionTypes.RANDOM_BEER_REQUEST, randomBeer);
  
}

export function* toastBeerSaga() {
  yield all([fork(watchFetchRequest)]);
}
