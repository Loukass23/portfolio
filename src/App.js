import React, { Component } from 'react';
import './App.css';

import Layout from './layout/Layout'
import Navbar from './layout/Navbar'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Layout />
      </div>
    )
  }
}


export default App;
