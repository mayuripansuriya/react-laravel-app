import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid, Row, Col, Panel } from 'react-bootstrap';

// import { userActions } from '../_actions';

export default class ProfilePage extends React.Component {
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
        // this.props.dispatch(userActions.getById(this.props.match.params.id));
    }

    render() {
        // if (!this.props.user) {
        //     return <div>Loding .....</div>;
        // }
        const { user  } = this.props;
        const { submitted } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Profile</h2>
                <Panel>
                    
                </Panel>     
                <Link to='/' class="btn btn-primary">back</Link>                                                    
                
            </div>
        );
    }
}