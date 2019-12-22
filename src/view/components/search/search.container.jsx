import { connect } from 'react-redux';
import Search from './seach.components';
import { fetchUserStart } from '../../../state/user/user.actions';

const mapDispatchToProps = dispatch => ({
  fetchUserStart: searchKey => dispatch(fetchUserStart(searchKey))
});

const SearchContainer = connect(null, mapDispatchToProps)(Search);

export default SearchContainer;
