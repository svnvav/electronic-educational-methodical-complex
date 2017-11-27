import React from 'react';
import './test-question-item.css';

export default function TestQuestionItem ({text, isRight, userChoice, handleClick}) {
  return (
    <div
      className={(userChoice ? "test-question-item-answered" : "test-question-item")}
      onClick={()=>handleClick()}
    >
      {text}
    </div>
  );
}