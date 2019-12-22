import { userActionTypes } from './user.types';

export const fetchUserStart = searchKey => ({
  type: userActionTypes.FETCH_USER_START,
  payload: searchKey
});

export const fetchUserSuccess = user => ({
  type: userActionTypes.FETCH_USER_SUCCESS,
  payload: user
});

export const fetchUserFailure = error => ({
  type: userActionTypes.FETCH_USER_FAILURE,
  payload: error
});
