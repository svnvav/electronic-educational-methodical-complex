import React, { Component } from 'react';
import './App.css';

import Header from './components/header.js';
import Content from './components/content.js';
import Menu from './components/menu.js';
import About from './components/about.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Menu/>
        <About/>
        <Content/>
      </div>
    );
  }
}

export default App;
