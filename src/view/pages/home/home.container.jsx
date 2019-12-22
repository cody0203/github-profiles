import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Home from './home.page';

import { selectError } from '../../../state/user/user.selector';

const mapStateToProps = createStructuredSelector({
  error: selectError
});

const HomeContainer = connect(mapStateToProps)(Home);

export default HomeContainer;
