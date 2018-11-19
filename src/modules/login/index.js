import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from '../../actions/Home.actions';
import Login from './Login';

export default connect(
    state => ({
    	 loggingIn : state.authentication
    }),
    dispatch => bindActionCreators(Actions, dispatch)
)(Login)