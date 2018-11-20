import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from '../../actions/User.actions';
import Profile from './Profile';

export default connect(
    state => { console.log(state.authentication, '-0-')
     return ({
    	 user : state.authentication.user,
    	 
    })},
    dispatch => bindActionCreators(Actions, dispatch)
)(Profile)