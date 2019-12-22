import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import App from './app';
import { selectTheme } from './state/setting/setting.selector';

const mapStateToProps = createStructuredSelector({
  theme: selectTheme
});

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;
