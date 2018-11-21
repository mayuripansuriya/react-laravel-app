import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from '../../actions/User.actions';
import EditProfile from './EditProfile';

export default connect(
    state =>  { 
    	let user = state.authentication.user;
    	if(state.authentication.user.user) {
    		 user = state.authentication.user.user
    	}
     return ({
    	 user : user,
    	 error:state.authentication.error
    	 
    })},
    dispatch => bindActionCreators(Actions, dispatch)
)(EditProfile)