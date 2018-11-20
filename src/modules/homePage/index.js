import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from '../../actions/User.actions';
import HomePage from './HomePage';

export default connect(
    state => {
    	return ({
    	 user : state.authentication.user.user,
    })},
    dispatch => bindActionCreators(Actions, dispatch)
)(HomePage)