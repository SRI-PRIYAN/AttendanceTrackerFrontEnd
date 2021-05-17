import React from "react";
import "./Navigation.css";

const Navigation = (props) => {
  const { signedIn, routeChange } = props;

  if (signedIn) {
    return (
      <nav>
        <button className="btn-link" onClick={() => routeChange("login")}>
          SignOut
        </button>
      </nav>
    );
  } else {
    return (
      <nav>
        <button className="btn-link" onClick={() => routeChange("register")}>
          Register
        </button>
        <button className="btn-link" onClick={() => routeChange("login")}>
          Login
        </button>
      </nav>
    );
  }
};

export default Navigation;
