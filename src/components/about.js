import React from 'react';
import './about.css';

export default function About ({showAbout, contentText}) {
  return (
    <div>
      <div
        className="about-transparent-background"
        style={{
          opacity: showAbout ? 0.7 : 0,
          transform: `translate3d(0, ${showAbout ? 0 : -100}vh, 0)`
        }}
      />
      <div
        className="about"
        style={{
          opacity: showAbout ? 1 : 0,
          transform: `translate3d(0, ${showAbout ? 0 : -100}vh, 0)`
        }}
      >
        <div className="about-text-wrapper">
          <div className="about-text">
            {contentText}
          </div>
        </div>
      </div>
    </div>
  );
}