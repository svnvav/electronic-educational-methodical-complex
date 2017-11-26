import React from 'react';
import './menu-button.css';

export default function MenuButton ({isActive, handleClick}) {
    return (
      <div
        className={"menu-button " + (isActive && "menu-button-clicked")}
        onClick={()=>handleClick()}
      >
        &#9776;
      </div>
    );
}