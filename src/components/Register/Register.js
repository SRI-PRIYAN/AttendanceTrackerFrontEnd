import React from 'react'
import './Register.css'

class Register extends React.Component {
	render() {
		return (
			<div className="register">
				<h1>Register</h1>
				<div>
					<input type="text" name="name" id="name" placeholder="Name" />
				</div>
				<div>
					<input type="email" name="email" id="email" placeholder="Email" />
				</div>
				<div>
					<input type="password" name="pass" id="pass" placeholder="Password" />
				</div>
				<div>
					<button className="btn">SignUp</button>
				</div>
			</div>
		);
	}
}

export default Register;