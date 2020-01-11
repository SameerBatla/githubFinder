import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Layout/Navbar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
// import UserItem from './Components/Layout/Users/UserItem';
import Users from './Components/Users/Users';
import axios from 'axios';
import Search from './Components/Users/Search';
import { Alert } from './Components/Layout/Alert';
library.add(fab);

export class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
  };
  // async componentDidMount() {
  //   // console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
  //   this.setState({
  //     loading: true
  //   });
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   this.setState({
  //     users: res.data,
  //     loading: false
  //   });
  // }
  searchUsers = async text => {
    this.setState({
      loading: true
    });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({
      users: res.data.items,
      loading: false
    });
  };
  clearUsers = () => {
    this.setState({
      users: [],
      loading: false
    });
  };
  setAlert = (msg, type) => {
    this.setState({
      alert: { msg: msg, type: type }
    });

    setTimeout(() => this.setState({ alert: null }), 3000);
  };
  render() {
    const { users, loading } = this.state;
    return (
      <div className="App">
        <Navbar />
        {/* <UserItem /> */}
        <div className="container">
          <Alert alert={this.state.alert} />
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
