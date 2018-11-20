import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from '../../actions/User.actions';
import Register from './Register';

export default connect(
    state =>{
    	return ({
    	   registering : state.registration,
    	   errors:state.errors
    })
    } ,
    dispatch => bindActionCreators(Actions, dispatch)
)(Register)