import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectUserData = createSelector([selectUser], user => user.user);

export const selectRepos = createSelector([selectUser], user => user.repos);

export const selectError = createSelector([selectUser], user => user.error);
