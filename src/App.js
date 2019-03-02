import React, { Component } from 'react';
import './App.css';

import Layout from './layout/Layout'
import Navbar from './layout/Navbar2'

class App extends Component {
  render() {
    return (
      <div className="portfolio">
        <Navbar />
        <Layout />
      </div>
    )
  }
}


export default App;
