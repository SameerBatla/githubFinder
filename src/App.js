import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Layout/Navbar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
// import UserItem from './Components/Layout/Users/UserItem';
import Users from './Components/Users/Users';
import axios from 'axios';
import Search from './Components/Users/Search';
library.add(fab);

export class App extends Component {
  state = {
    users: [],
    loading: false
  };
  async componentDidMount() {
    console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
    this.setState({
      loading: true
    });
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({
      users: res.data,
      loading: false
    });
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        {/* <UserItem /> */}
        <div className="container">
          <Search />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
