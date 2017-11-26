import React, { Component } from 'react';
import './header.css';

import MenuButton from './menu-button.js'
import AboutButton from './about-button.js'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <MenuButton/>
        <AboutButton/>
      </div>
    );
  }
}

export default Header;