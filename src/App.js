import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Layout/Navbar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
// import UserItem from './Components/Layout/Users/UserItem';
import Users from './Components/Layout/Users/Users';
library.add(fab);

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        {/* <UserItem /> */}
        <div className="container">
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
