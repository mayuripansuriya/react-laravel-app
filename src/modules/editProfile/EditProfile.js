import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {notify} from 'react-notify-toast';
import { IMAGE_URL } from '../../utils/constants';

export default class EditPage extends React.Component {
   state = {
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
            image:"",
            imagePreviewUrl: `${IMAGE_URL}${this.props.user.image}`,
            submitted: false
        };

    componentDidMount() {
        this.props.getById(this.props.match.params.id);
        this.setState({
            user:this.props.user
        })
    }
    handleChange = (event) => {

        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let { user } = this.state;

        const { dispatch } = this.props;
        this.setState({
            submitted:true
        })
       if (user.first_name  && user.email && user.address && user.city) {
            this.props.update(user.id, user.first_name, user.last_name, user.email, user.password ,user.password_confirmation , user.address, user.city, user.image)
            .then(
                user => {
                    notify.show('Profile edited successfull!', 'success', 1000);
                    window.location.href = '/user/' + user.value.data.user.id;
                }
            )
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

        const {user, submitted } = this.state;
        if(!user || user.first_name == "") {
            return <div> loading .... </div>
        }
        let {imagePreviewUrl}  = this.state;

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
                <h2>Edit</h2>
                <form name="form" onSubmit={this.handleSubmit}>
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
                        
                         <div className={'form-group' + (submitted && !user.email ? ' has-error' : '')}>
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" name="email" value={user.email} onChange={this.handleChange} />
                            {submitted && !user.email &&
                                <div className="help-block">Email is required</div>
                            }
                        </div>
                    
                        <div className="form-group">
                            <button className="btn btn-primary">Edit</button>
                            {registering && 
                                <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                            }
                            <Link to={"/user/" + user.id} className="btn btn-link">Cancel</Link>
                        </div>
                        
                    </div>
                
                </form>
            </div>
        );
    }
}
