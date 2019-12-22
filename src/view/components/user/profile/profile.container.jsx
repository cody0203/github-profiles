import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import UserProfile from './profile.component';
import { selectUserData } from '../../../../state/user/user.selector';

const mapStateToProps = createStructuredSelector({
  user: selectUserData
});

const UserProfileContainer = connect(mapStateToProps)(UserProfile);

export default UserProfileContainer;
