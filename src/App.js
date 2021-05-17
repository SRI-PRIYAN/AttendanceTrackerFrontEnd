import React from "react";
import "./App.css";
import Register from "./components/Register/Register";
import Navigation from "./components/Navigation/Navigation";
import Login from "./components/Login/Login";

const initialState = {
  signedIn: false,
  route: "register",
};

class App extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }

  routeChange = (route) => {
    this.setState({
      signedIn: route === "dashboard",
      route,
    });
  };

  render() {
    console.log(this.state);
    const { signedIn, route } = this.state;
    let form;
    if (route === "login") {
      form = <Login />;
    } else {
      form = <Register />;
    }

    return (
      <div className="App">
        <Navigation signedIn={signedIn} routeChange={this.routeChange} />
        {form}
      </div>
    );
  }
}

export default App;
