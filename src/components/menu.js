import React from 'react';
import './menu.css';

import MenuItem from './menu-item.js'

export default function Menu ({showMenu, chapters, handleItemClick, handleItemMouseEnter}) {

  return (
    <div className={"menu " + (showMenu ? "menu-shown" : "menu-hidden")}>
      <ul className="menu-list-wrapper">
        {
          [
            <MenuItem key="curriculum" type="materials" chapterId="curriculum" text="Учебная программа" handleClick={handleItemClick} handleMouseEnter={showMenu && handleItemMouseEnter}/>,
            ...prepareItemsListFromChapters(chapters).map((item, i) => (
              <MenuItem key={i} chapterId={item.chapterId} text={item.text} type={item.type} handleClick={handleItemClick} handleMouseEnter={showMenu && handleItemMouseEnter}/>
            )),
            <MenuItem key="final-label" type="label" chapterId="final" text="Итоговая проверка" handleClick={handleItemClick} handleMouseEnter={showMenu && handleItemMouseEnter}/>,
            <MenuItem key="final-test" type="test" chapterId="final" text="Тестирование" handleClick={handleItemClick} handleMouseEnter={showMenu && handleItemMouseEnter}/>,
            <MenuItem key="final-tasks" type="tasks" chapterId="final" text="Задачи" handleClick={handleItemClick} handleMouseEnter={showMenu && handleItemMouseEnter}/>
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