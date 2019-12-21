import React from 'react';

import FormInput from '../form-input/form-input.component.jsx';

import CustomButton from '../custom-button/custom-button.component.jsx';

import './sign-in.styles.scss';

class SignIn extends React.Component {
	constructor(props) {
		super();

		this.state = {
			email: '',

			password: ''
		};
	}

	handleSubmit = event => {
		event.preventDefault();

		this.setState({email: '', password: ''});
	}

	handleChange = event => {
		const {value, name} = event.target;

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
					<CustomButton type="submit"> Sign in </CustomButton>
				</form>
			</div>
		);
	}
}

export default SignIn;