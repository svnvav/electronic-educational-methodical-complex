import React from 'react';
import './menu.css';

import MenuItem from './menu-item.js'

export default function Menu ({showMenu, chapters, handleItemClick}) {

  return (
    <div className={"menu " + (showMenu ? "menu-shown" : "menu-hidden")}>
      <ul className="menu-list-wrapper">
        {
          [
            <MenuItem key="curriculum" type="curriculum" text="Учебная программа" handleClick={handleItemClick}/>,
            ...prepareItemsListFromChapters(chapters).map((item, i) => (
              <MenuItem key={i} chapterId={item.chapterId} text={item.text} type={item.type} handleClick={handleItemClick}/>
            )),
            <MenuItem key="final-label" type="label" text="Итоговая проверка" handleClick={handleItemClick}/>,
            <MenuItem key="final-test" type="test" text="Тестирование" handleClick={handleItemClick}/>,
            <MenuItem key="final-tasks" type="finalTasks" text="Задачи" handleClick={handleItemClick}/>
          ]
        }
      </ul>
    </div>
  );
}

function prepareItemsListFromChapters(chapters){
  let items = [];
  chapters.forEach((chapter, i) => {
    items.push({
      type: "label",
      chapterId: i,
      text: chapter.title
    });
    items.push({
      type: "materials",
      chapterId: i,
      text: "Материалы подготовки"
    });
    items.push({
      type: "questions",
      chapterId: i,
      text: "Контрольные вопросы"
  });
    items.push({
      type: "tasks",
      chapterId: i,
      text: "Задачи"
    });
  });
  return items;
}