import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from '../../actions/User.actions';
import EditProfile from './EditProfile';

export default connect(
    state =>  { console.log(state.authentication.user, '-0-0------')
     return ({
    	 user : state.authentication.user,
    	 
    })},
    dispatch => bindActionCreators(Actions, dispatch)
)(EditProfile)