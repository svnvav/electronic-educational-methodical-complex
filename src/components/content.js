import React from 'react';
import './content.css';

import Test from './test.js';
import FinalTasks from './final-tasks.js';

export default function Content ({type, chapterId, data}) {
  let content = "";

  switch (chapterId) {
    case "curriculum":
      content = data.curriculum;
      break;
    case "final":
      if(type === "test") content = <Test data={data.final.test}/>;
      if(type === "tasks") content = <FinalTasks data={data.final.tasks}/>;
      break;
    default:
      content = data.chapters[chapterId][type]
  }

  return (
    <div className="content">
      {(typeof content === 'object') ? content : <div dangerouslySetInnerHTML={{__html: content}}/>}
    </div>
  );
}