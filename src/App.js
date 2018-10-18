import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Header";
import { Search } from "./Search";
import { GithubProfile } from "./GithubProfile";

/**
 * React app
 * @augments {Component<null, { user: string}>}
 */
class App extends Component {
  state = {
    user: null
  };

  componentDidMount() {
    const matches =
      window.location.search && window.location.search.match(/user=(\w+)/);

    if (matches) {
      this.setState({
        user: matches[1]
      });
    }
  }
  /**
   * @param {IGithubUser} user
   */
  onSearch = user => {
    console.log(user);
    window.history.replaceState(null, user.login, `?user=${user.login}`);
  };
  render() {
    return (
      <div className="App">
        <Header logo={logo} text="Welcome to CRA" />
        <Search
          query={this.state.user}
          onSearch={this.onSearch}
          render={user => <GithubProfile {...user} />}
        />
      </div>
    );
  }
}

export default App;
