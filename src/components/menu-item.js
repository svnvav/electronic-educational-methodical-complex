import React from 'react';
import './menu-item.css';

export default function MenuItem ({chapterId, type, text, handleClick, handleMouseEnter}) {
  return (
    <li
      className={"menu-item menu-item-" + type}
      onClick={()=>{handleClick(); handleMouseEnter(type, chapterId);}}
    >
      {text}
    </li>
  );
}