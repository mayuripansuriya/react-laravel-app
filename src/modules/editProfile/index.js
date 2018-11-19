import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from '../../actions/Home.actions';
import EditProfile from './EditProfile';

export default connect(
    state => ({
    	   user : state.users
    }),
    dispatch => bindActionCreators(Actions, dispatch)
)(EditProfile)