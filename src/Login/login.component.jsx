import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginAction } from '../actions/loginAction';
import credentials from '../mockData/credentials.json';
import Dashboard from '../Dashboard/dashboard.component';
import './login.scss';
class Login extends Component {
	constructor() {
		super();
		this.state = {
			username: '',
			password: ''
		};
	}

	inputChange = (value, name) => {
		this.setState({ [name]: value });
	};

	handleLogin = e => {
		const { username, password } = this.state;
		if (username === credentials.username && password === credentials.password) {
			this.props.loginAction(true);
		}
	};

	render() {
		const { username, password } = this.state;
		if (this.props.isLoggedIn) {
			return <Dashboard />;
		}
		return (
			<div className="log-form">
				<h2>Login to your account</h2>
				<div className="form">
					<input
						type="text"
						placeholder="Username"
						value={username}
						onChange={e => this.inputChange(e.target.value, 'username')}
					/>
					<input
						type="password"
						placeholder="Password"
						value={password}
						onChange={e => this.inputChange(e.target.value, 'password')}
					/>
					<button type="submit" className="btn" onClick={this.handleLogin}>
						Login
					</button>
				</div>
			</div>
		);
	}
}
const mapStateToProps = state => ({
	...state,
	isLoggedIn: state.loginReducer.isLoggedIn
});
const mapDispatchToProps = dispatch => ({
	loginAction: x => dispatch(loginAction(x))
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
