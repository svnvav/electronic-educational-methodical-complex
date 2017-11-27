import React, {Component} from 'react';
import './final-tasks.css';

import FinalTasksItem from './final-tasks-item.js'

export default function FinalTasks ({data}){
  return (
    <div className="final-tasks">
      <h1>Блок итоговых задач</h1>
      <p>Для выполнения каждой задачи введите ответ в поле ввода и нажмиет кнопку "Проверить"</p>
      {data.map((task, i) => <FinalTasksItem key={"finalTask" + i} text={task.text} rightAnswer={task.rightAnswer} userAnswer={task.userAnswer}/>)}
    </div>
  );
}