import { call, put, all, takeLatest } from 'redux-saga/effects';
import { userActionTypes } from './user.types';
import { fetchUserFailure, fetchUserSuccess } from './user.actions';
import { getUser, getRepos } from '../../utils/api';

function* fetchUserStartAsync({ payload }) {
  try {
    const data = yield call(getUser, payload);
    const repos = yield call(getRepos, payload);

    yield put(fetchUserSuccess(data, repos));
  } catch (error) {
    yield put(fetchUserFailure(error.message));
  }
}

function* onFetchUserStart() {
  yield takeLatest(userActionTypes.FETCH_USER_START, fetchUserStartAsync);
}

export function* userSaga() {
  yield all([call(onFetchUserStart)]);
}
