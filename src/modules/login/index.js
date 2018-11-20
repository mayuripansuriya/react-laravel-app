import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from '../../actions/User.actions';
import Login from './Login';

export default connect(
    state => {
    	console.log(state);
    	return ({
    	 user : state.authentication.user,
    	 isLoggedIn: state.authentication.isLoggedIn,
    	 loginErrorMessage: state.authentication.loginErrorMessage
    })},
    dispatch => bindActionCreators(Actions, dispatch)
)(Login)