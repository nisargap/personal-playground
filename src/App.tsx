import React, { Component } from 'react';
import netlifyIdentity from 'netlify-identity-widget';
import { loginUser, logoutUser } from './lib/identityActions/';

class App extends Component {
  componentDidMount() {
    const user = localStorage.getItem("currentOpenUser");
    if (user) {
      this.setState({user: JSON.parse(user)});
    } else {
      console.log("Logging in user");
      loginUser();
    }
    netlifyIdentity.on("login", (user: any) => this.setState({user}, loginUser));
    netlifyIdentity.on("logout", (_user: any) => this.setState({user: null}, logoutUser));
  }
  render() {
    return (
      <div>
        <h1>Personal Playground</h1>
        <button onClick={() => netlifyIdentity.open()}>
          Login
        </button>
        <button onClick={() => logoutUser()}>
          Logout
        </button>
      </div>
    );
  }
}

export default App;
