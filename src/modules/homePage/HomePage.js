import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid, Row, Col, Panel } from 'react-bootstrap';

// import { userActions } from '../_actions';

export default class HomePage extends React.Component {
     render() {
        const { user } = this.props;

        if(!user) {
            window.location.reload();
            return <div>loading...</div>;
        }
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Hi {user.first_name}!</h1>
                <p>You're now logged in!!</p>
                <span><Link to={"/user/" + user.id}><button class="btn btn-primary">View Profile</button></Link></span>
                <span><Link to="/login" class="btn btn-success" style={{"float":"right"}}>Logout</Link></span>
                
            </div>
        );
    }
}