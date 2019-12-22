import { userActionTypes } from './user.types';

const INITIAL_STATE = {
  user: null,
  repos: null,
  loading: false,
  error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.FETCH_USER_START:
      return {
        ...state,
        loading: true,
        error: null
      };
    case userActionTypes.FETCH_USER_SUCCESS:
      const { user, repos } = action.payload;
      return {
        ...state,
        user: user,
        repos: repos,
        loading: false
      };
    case userActionTypes.FETCH_USER_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
