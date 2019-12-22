import { call, put, all, takeLatest } from 'redux-saga/effects';
import { userActionTypes } from './user.types';
import { fetchUserFailure, fetchUserSuccess } from './user.actions';
import { getUser, getRepos } from '../../utils/api';

function* fetchUserStartAsync({ payload }) {
  try {
    const user = yield call(getUser, payload);
    const repos = yield call(getRepos, payload);

    console.log(user, repos);
    yield put(fetchUserSuccess({ user, repos }));
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
