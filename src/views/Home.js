import React, { Component } from 'react';
import classes from '../styles/Home.module.css';
import { BrowserRouter, Link } from 'react-router-dom';
import axios from 'axios';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			emailError: '',
			password: '',
			passwordError: ''
		};
	}
	validate = () => {
		let isError = false;
		const errors = {
			emailError: '',
			passwordError: ''
		};

		if (this.state.email.indexOf('@') === -1) {
			isError = true;
			errors.emailError = 'Requires valid email';
		}
		if (this.state.password.length < 3) {
			isError = true;
			errors.passwordError = 'Please provide a password';
		}
		this.setState({
			...this.state,
			...errors
		});

		return isError;
	};

	onSubmit = async (e) => {
		e.preventDefault();
		const error = await this.validate();
		if (!error) {
			const send = {
				email: this.state.email,
				password: this.state.password
			};

			await axios
				.post(`https://lms-server-octopus.herokuapp.com/api/v1/auth/signin`, send)
				.then((res) => {
					localStorage.setItem('token', res.data.data.token);
					this.setState({
						email: '',
						password: ''
					});
					// redirect comes in here
				})
				.catch((error) => {
					this.setState({
						passwordError: error.response.data.error,
						emailError: error.response.data.error
					});
				});
		}
	};
	change = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};
	render() {
		return (
			<div>
				<div className={classes.form}>
					<div className={classes.head}>
						<p className={classes.title}>L.M.S - Sign in</p>
						<p className={classes.sub_title}>Please fill the form</p>
					</div>
					<form onSubmit={(e) => this.onSubmit(e)}>
						<ul>
							<li className={classes.input_wrap}>
								<label htmlFor="email" className={classes.label}>
									Email address
								</label>
								<div className={classes.input_dev}>
									<input
										type="text"
										placeholder="Enter email"
										aria-label="email"
										name="email"
										className={classes.input}
										value={this.state.email}
										onChange={(e) => this.change(e)}
									/>
								</div>
								<p className={classes.message} aria-label="emailError">
									{this.state.emailError}
								</p>
							</li>
							<li className={classes.input_wrap}>
								<label htmlFor="email" className={classes.label}>
									Password
								</label>
								<div className={classes.input_dev}>
									<input
										type="password"
										name="password"
										aria-label="password"
										placeholder="Enter password"
										className={classes.input}
										value={this.state.password}
										onChange={(e) => this.change(e)}
									/>
								</div>
								<p className={classes.message} aria-label="passwordError">
									{this.state.passwordError}
								</p>
							</li>
							<div className={classes.action}>
								<BrowserRouter>
									<Link to="/" className={classes.link}>
										Have no account??
									</Link>
								</BrowserRouter>
								<button className={classes.button} aria-label="submit">
									sign in
								</button>
							</div>
						</ul>
					</form>
				</div>
				<div className={classes.one} />
				<div className={classes.two} />
				<div className={classes.three} />
			</div>
		);
	}
}
