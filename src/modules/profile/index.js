import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from '../../actions/User.actions';
import Profile from './Profile';

export default connect(
    state => { 
     return ({
    	 user : state.authentication.user,
    	 errorMessage: state.authentication.errorMessage,
    	 error: state.authentication.error,
    	 
    })},
    dispatch => bindActionCreators(Actions, dispatch)
)(Profile)