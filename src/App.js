import React, { Component, Fragment } from 'react';

import Navbar from './components/layout/Navbar';
import userItem from './components/users/userItem';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar title='Locate Github' icon='fab fa-github' />
        <userItem/>
      </div>
    );
  }
}

export default App;
