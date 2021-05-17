import React from "react";

class Login extends React.Component {
  render() {
    return (
      <div className="form">
        <h1 className="form-title">Login</h1>

        <div className="form-elt">
          <input type="email" name="email" id="email" placeholder="Email" />
        </div>

        <div className="form-elt">
          <input type="password" name="pass" id="pass" placeholder="Password" />
        </div>

        <div className="form-elt">
          <button className="btn">LogIn</button>
        </div>
      </div>
    );
  }
}

export default Login;
