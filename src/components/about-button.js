import React from 'react';
import './about-button.css';

export default function AboutButton ({isActive, handleClick}) {
  return (
    <div
      className={"about-button " + (isActive && "about-button-clicked")}
      onClick={()=>handleClick()}
    >
      ?
    </div>
  );
}