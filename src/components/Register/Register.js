import React from "react";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      college: "",
      password: "",
    };
  }

  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  onCollegeChange = (event) => {
    this.setState({ college: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  onSubmit = () => {
    const { name, email, college, password } = this.state;

    fetch("http://localhost:4000/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        college,
        password,
      }),
    })
      .then((response) => response.json())
      .then((user) => console.log(user))
      .catch((err) => console.log("Error"));
  };

  render() {
    console.log(this.state);
    return (
      <div className="form">
        <h1 className="form-title">Register</h1>

        <div className="form-elt">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            onChange={this.onNameChange}
          />
        </div>

        <div className="form-elt">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={this.onEmailChange}
          />
        </div>

        <div className="form-elt">
          <input
            type="text"
            name="college"
            id="college"
            placeholder="college"
            onChange={this.onCollegeChange}
          />
        </div>

        <div className="form-elt">
          <input
            type="password"
            name="pass"
            id="pass"
            placeholder="Password"
            onChange={this.onPasswordChange}
          />
        </div>

        <div className="form-elt">
          <button className="btn" onClick={this.onSubmit}>
            SignUp
          </button>
        </div>
      </div>
    );
  }
}

export default Register;
