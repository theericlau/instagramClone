import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionsCreators';

import Main from './Main';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;