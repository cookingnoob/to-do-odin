import { pruebaCheckBox } from "./checkTodo";
import {content} from "./DOM"

export function renderToDo(todo){
    const toDoContainer = document.createElement('div');
    const toDoTitle = document.createElement('h3');
    const toDoNotes = document.createElement('p');
    const toDoDate = document.createElement('p')
    const checkBox = document.createElement('div');

    toDoContainer.classList.add('toDoContainer');
    toDoTitle.classList.add('toDoTitle');
    toDoNotes.classList.add('toDoNotes');
    toDoDate.classList.add('toDoDate');
    checkBox.classList.add('checkBox');
    checkBox.addEventListener('click', pruebaCheckBox); //cambiarlo a toggle para que cambie de clase
   
    toDoTitle.textContent = `${todo.title}`;
    toDoNotes.textContent = `${todo.notes}`;
    toDoDate.textContent = `${todo.dueDate}`
    toDoContainer.append(toDoTitle, toDoNotes, checkBox, toDoDate);
    content.append(toDoContainer);

    return{
        toDoContainer
    }
}



