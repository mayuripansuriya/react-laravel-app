import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Grid, Row, Col, Panel } from 'react-bootstrap';
// import { userActions } from '../_actions';

export default class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                first_name: '',
                last_name: '',
                address: '',
                city: '',
                email: '',
                password: '',
                password_confirmation: '',
                image: ''
            },
            step:1,
            image:"",
            imagePreviewUrl: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeTabNext = this.changeTabNext.bind(this);
        this.changeTabPrev = this.changeTabPrev.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        let { user } = this.state;
        console.log("user", this.state.user);
        const { dispatch } = this.props;
        this.setState({
            submitted:true
        })
        if(!user.first_name || !user.city || !user.address) {
           this.setState({
                step:1
            }) 
        } else if(!user.image) {
            this.setState({
                step:2
            }) 
        } else if(!user.email || !user.password) {
            this.setState({
                step:3
            })
        }
       if (user.first_name && user.last_name && user.email && user.password && user.address && user.city) {
            // dispatch(userActions.register(user));
       }
    }

    changeTabNext(step1) {        
        switch(step1) {
            case 1:
              return this.setState({
                                step:2
                            })
            case 2:
               return this.setState({
                                step:3
                            })
            case 3:
               return this.setState({
                                step:4
                            })
            default:
               return this.setState({
                                step:1
                            })
          }
    }

    changeTabPrev(step1) {
         switch(step1) {
            case 4:
               return this.setState({
                                step:3
                            })
            case 3:
               return this.setState({
                                step:2
                            })
            case 2:
               return this.setState({
                                step:1
                            })
            default:
               return this.setState({
                                step:1
                            })
          }
    }
    onChange = e => {
        let reader = new FileReader();
        let file = e.target.files[0];
        
        reader.onloadend = () => {
            this.setState({
                image: file,
                imagePreviewUrl: reader.result
            });

        let { user } = this.state;
        
        this.setState({
            user: {
                    ...user,
                    image: file
                }
            });
        }

        reader.readAsDataURL(file);
      }

    randerErrors(errors) {
        return Object.keys(errors).map( (error, i) => {
            return ( <li key={i}> { errors[error] } </li>) 
        })
    }  

    
    render() {
        const { registering, errors  } = this.props;
        console.log(this.props, '---0');

        const { user, submitted } = this.state;
        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} style={{"width": "100px"}} className={'img-preview'} />);
        } else {
            $imagePreview = (<div className="previewText">Please select an image.</div>);
        }
        return (
            <div className="col-md-6 col-md-offset-3">
                {
                    errors && this.randerErrors(errors)
                }
                <h2>Register</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                   { this.state.step === 1 ?
                        <div> 
                            <div className={'form-group' + (submitted && !user.first_name ? ' has-error' : '')}>
                                <label htmlFor="first_name">First Name</label>
                                <input type="text" className="form-control" name="first_name" value={user.first_name} onChange={this.handleChange} />
                                {submitted && !user.first_name &&
                                    <div className="help-block">First Name is required</div>
                                }
                            </div>
                            <div className={'form-group'}>
                                <label htmlFor="last_name">Last Name</label>
                                <input type="text" className="form-control" name="last_name" value={user.last_name} onChange={this.handleChange} />
                            
                            </div>
                             <div className={'form-group' + (submitted && !user.address ? ' has-error' : '')}>
                                <label htmlFor="address">Address</label>
                                <input type="text" className="form-control" name="address" value={user.address} onChange={this.handleChange} />
                                {submitted && !user.address &&
                                    <div className="help-block">Address is required</div>
                                }
                            </div>
                             <div className={'form-group' + (submitted && !user.city ? ' has-error' : '')}>
                                <label htmlFor="city">City</label>
                                <input type="text" className="form-control" name="city" value={user.city} onChange={this.handleChange} />
                                {submitted && !user.city &&
                                    <div className="help-block">City is required</div>
                                }
                            </div>
                             <button onClick={() => this.changeTabNext(1)} style={{"float":"right"}} class="btn btn-primary">next</button>
                        </div>  
                    : this.state.step === 2 ?
                        <div>
                            <div className={'form-group' + (submitted && !user.image ? ' has-error' : '')}>
                                <label htmlFor="image">Image</label>
                                <input type='file' id='image' name="image"  onChange={this.onChange} /> 
                                {submitted && !user.image &&
                                    <div className="help-block">Image is required</div>
                                }
                                <div className="img-preview">
                                            {$imagePreview}
                                        </div>
                            </div> 
                            <button onClick={() => this.changeTabPrev(2)}  class="btn btn-primary">prev</button>
                             <button onClick={() => this.changeTabNext(2)}  class="btn btn-primary" style={{"float":"right"}}>next</button>
                        </div>
                        :this.state.step === 3 ?
                        <div>
                             <div className={'form-group' + (submitted && !user.email ? ' has-error' : '')}>
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" name="email" value={user.email} onChange={this.handleChange} />
                                {submitted && !user.email &&
                                    <div className="help-block">Email is required</div>
                                }
                            </div>
                            <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" name="password" value={user.password} onChange={this.handleChange} />
                                {submitted && !user.password &&
                                    <div className="help-block">Password is required</div>
                                }
                            </div>
                            <div className={'form-group' + (submitted && !user.password_confirmation ? ' has-error' : '')}>
                                <label htmlFor="password_confirmation">Confirm Password</label>
                                <input type="password" className="form-control" name="password_confirmation" value={user.password_confirmation} onChange={this.handleChange} />
                                {submitted && !user.password_confirmation &&
                                    <div className="help-block">Password is required</div>
                                }
                            </div>
                            <button onClick={() => this.changeTabPrev(3)}  class="btn btn-primary">prev</button>
                            <button onClick={() => this.changeTabNext(3)}  class="btn btn-primary" style={{"float":"right"}}>next</button>
                        </div>
                        :this.state.step === 4 ?
                        <div>
                            <div className="form-group">
                            
                                 <Panel>
                                    <Panel.Body><span><b>First Name</b>: {this.state.user.first_name}</span></Panel.Body>
                                    <Panel.Body><span><b>Last Name</b>: {this.state.user.last_name}</span></Panel.Body>
                                    <Panel.Body> <span><b>Address: </b>{this.state.user.address}</span></Panel.Body>
                                    <Panel.Body><span><b>City: </b>{this.state.user.city}</span></Panel.Body>
                                </Panel>   
                            </div>
                              <button onClick={() => this.changeTabPrev(4)} class="btn btn-primary">prev</button>
                                <button className="btn btn-primary" style={{"float":"right"}}>Register</button>
                                {registering && 
                                    <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                }

                                <Link to="/login" className="btn btn-link" style={{"float":"right"}}>Cancel</Link>
                          
                        </div> : null
                    }
                
                </form>
            </div>
        );
    }
}