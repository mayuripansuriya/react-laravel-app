import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid, Row, Col, Panel } from 'react-bootstrap';

// import { userActions } from '../_actions';

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                firstName: '',
                lastName: '',
                address: '',
                city: '',
                email: '',
                password: ''
            },
        };
    }

    componentDidMount() {
        this.props.getById(this.props.match.params.id);
    }

    render() {
        // if (!this.props.user) {
        //     return <div>Loding .....</div>;
        // }
        const { user  } = this.props;
        const { submitted } = this.state;
        console.log(user)
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Profile</h2>
                <Panel>
                    <Panel.Body><span><b>First Name</b>: {user.first_name}</span></Panel.Body>
                    <Panel.Body><span><b>Last Name</b>: {user.last_name}</span></Panel.Body>
                    <Panel.Body> <span><b>Address: </b>{user.address}</span></Panel.Body>
                    <Panel.Body><span><b>City: </b>{user.city}</span></Panel.Body>
                </Panel>     
                <Link to='/' class="btn btn-primary">back</Link>                                                    
                 <span><Link to={"/user/edit/" + user.id} style={{"float":"right"}} class="btn btn-success">Edit</Link></span>                                                  
            </div>
        );
    }
}