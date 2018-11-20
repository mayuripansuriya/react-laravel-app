import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// import { userActions } from '../_actions';

export default class EditPage extends React.Component {
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
    }

    componentDidMount() {
        this.props.getById(this.props.match.params.id);
        console.log('-==-=-=-=-')
        this.setState({
            user:this.props.user
        })
    }
    handleChange(event) {

        const { name, value } = event.target;
        console.log(name, value);
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
       if (user.first_name && user.last_name && user.email && user.address && user.city) {
            // dispatch(userActions.update(user));
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
                <h2>Edit</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                   
                
                </form>
            </div>
        );
    }
}
