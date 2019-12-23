import React from 'react';

import FormInput from '../form-input/form-input.component.jsx';

import CustomButton from '../custom-button/custom-button.component.jsx';

import { signInWithGoogle, auth } from '../../firebase/firebase.utils.js';

import './sign-in.styles.scss';

class SignIn extends React.Component {
	constructor(props) {
		super();

		this.state = {
			email: '',

			password: ''
		};
	}

	handleSubmit = async event => {
		event.preventDefault();

		const { email, password } = this.state;
		
		try {
			await auth.signInWithEmailAndPassword(email, password);

			window.location.href = "/";
		}
		catch(error) {
			alert(error.message);
		}
		
		this.setState({email: '', password: ''}); // Clears form-input field
	}

	handleChange = event => {
		const { value, name } = event.target;

		this.setState({ [name]: value })
	}

	render() {
		return(
			<div className="sign-in">
				<h2 className="title"> I already have an account </h2>
				<span> Sign in with your e-mail and password </span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="email"
						type="email"
						label="E-mail"
						value={this.state.email}
						handleChange={this.handleChange}
						required />
					<FormInput
						name="password"
						type="password"
						label="Password"
						value={this.state.password}
						handleChange={this.handleChange}
						required />
					<div className="buttons">
						<CustomButton type="submit"> Sign in </CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn={true}> Sign in with Google </CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;