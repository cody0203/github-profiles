import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import UserReposOverView from './repo-overview.component';

import { selectRepos } from '../../../../state/user/user.selector';

const mapStateToProps = createStructuredSelector({
  repos: selectRepos
});

const UserReposOverViewContainer = connect(mapStateToProps)(UserReposOverView);

export default UserReposOverViewContainer;
