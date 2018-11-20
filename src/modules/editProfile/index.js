import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from '../../actions/User.actions';
import EditProfile from './EditProfile';

export default connect(
    state => ({
    	   user :  state.authentication.user.user,
    }),
    dispatch => bindActionCreators(Actions, dispatch)
)(EditProfile)