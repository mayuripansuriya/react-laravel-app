import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import { IMAGE_URL } from '../../utils/constants';

export default class ProfilePage extends React.Component {
    componentDidMount() {
        this.props.getById(this.props.match.params.id);
    }

    render() {
        if (!this.props.user) {
            return <div>Loding .....</div>;
        }
        const { user  } = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Profile</h2>
                <Panel>
                    <Panel.Body><span><b>First Name</b>: {user.first_name}</span></Panel.Body>
                    <Panel.Body><span><b>Last Name</b>: {user.last_name}</span></Panel.Body>
                    <Panel.Body><span><b>Email</b>: {user.email}</span></Panel.Body>
                    <Panel.Body> <span><b>Address: </b>{user.address}</span></Panel.Body>
                    <Panel.Body><span><b>City: </b>{user.city}</span></Panel.Body>
                    <Panel.Body><span><b>Image: </b><img src={`${IMAGE_URL}${user.image}`} style={{"width": "100px"}} className={'img-preview'} /></span></Panel.Body>
                </Panel>     
                <Link to='/' class="btn btn-primary">back</Link>                                                    
                 <span><Link to={"/user/" + user.id + "/edit"} style={{"float":"right"}} class="btn btn-success">Edit</Link></span>                                                  
            </div>
        );
    }
}