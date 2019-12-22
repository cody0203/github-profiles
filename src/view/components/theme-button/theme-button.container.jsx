import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ThemeButton from './theme-button.component';
import { selectTheme } from '../../../state/setting/setting.selector';
import { changeTheme } from '../../../state/setting/setting.actions';

const mapStateToProps = createStructuredSelector({
  theme: selectTheme
});

const mapDispatchToProps = dispatch => ({
  changeTheme: theme => dispatch(changeTheme(theme))
});

const ThemeButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ThemeButton);

export default ThemeButtonContainer;
