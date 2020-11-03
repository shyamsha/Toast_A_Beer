import { BeersActionTypes } from './types';
import { beersError, beersSuccess } from './actions';
import { put, call, takeLatest, all, fork } from "redux-saga/effects";
import * as Api from "../../services/Api";
import { unknownError } from "../../utils/api-helper";

// type SagaAction<T> = Action & { payload: T };

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

function* watchFetchRequest() {
  yield takeLatest(BeersActionTypes.BEERS_REQUEST, beers);
}

export function* toastBeersSaga() {
  yield all([fork(watchFetchRequest)]);
}