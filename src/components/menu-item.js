import React from 'react';
import './menu-item.css';

export default function MenuItem ({chapterId, type, text, handleClick}) {
  return (
    <li
      className={"menu-item menu-item-" + type}
    >
      {text}
    </li>
  );
}