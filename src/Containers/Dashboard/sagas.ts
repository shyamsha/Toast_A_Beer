import { BeersActionTypes } from './types';
import { beerError, beersError, beersSuccess, beerSuccess, paginationError, paginationSuccess, filterError, filterSuccess, searchError, SearchSuccess } from './actions';
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

function* pagination({ payload: params }: SagaAction<{ page: number }>) {
  try {
    const res = yield call(Api.pagination,params);
    if (res.error) {
      yield put(paginationError(res.error));
    } else {
      yield put(paginationSuccess(res.data));
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(paginationError(err));
    } else {
      yield put(paginationError(unknownError("An unknown error occurred")));
    }
  }
}

function* filter({ payload: params }: SagaAction<{ malt: string }>) {
  try {
    const res = yield call(Api.filter,params);
    if (res.error) {
      yield put(filterError(res.error));
    } else {
      yield put(filterSuccess(res.data));
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(filterError(err));
    } else {
      yield put(filterError(unknownError("An unknown error occurred")));
    }
  }
}

function* search({ payload: params }: SagaAction<{ beer_name: string }>) {
  try {
    const res = yield call(Api.search,params);
    if (res.error) {
      yield put(searchError(res.error));
    } else {
      yield put(SearchSuccess(res.data));
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(searchError(err));
    } else {
      yield put(searchError(unknownError("An unknown error occurred")));
    }
  }
}

function* watchFetchRequest() {
  yield takeLatest(BeersActionTypes.BEERS_REQUEST, beers);
  yield takeLatest(BeersActionTypes.GET_BEER_REQUEST,beer);
  yield takeLatest(BeersActionTypes.GET_PAGINATION_REQUEST,pagination)
  yield takeLatest(BeersActionTypes.GET_FILTER_REQUEST,filter)
  yield takeLatest(BeersActionTypes.GET_SEARCH_REQUEST,search)
}

export function* toastBeersSaga() {
  yield all([fork(watchFetchRequest)]);
}
