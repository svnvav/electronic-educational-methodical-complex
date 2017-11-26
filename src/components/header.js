import React from 'react';
import './header.css';

import MenuButton from './menu-button.js'
import AboutButton from './about-button.js'

export default function Header({showMenu, showAbout, handleMenuClick, handleAboutClick}) {
  return (
    <div className="header">
      <MenuButton isActive={showMenu} handleClick={handleMenuClick}/>
      <AboutButton isActive={showAbout} handleClick={handleAboutClick}/>
    </div>
  );
}
