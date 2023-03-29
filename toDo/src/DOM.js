//form elements
const container = document.getElementById('toDoFormcontainer');
export let titleInput = document.getElementById('title');
export let notesInput = document.getElementById('notes');
export let submitBtn = document.getElementById('submit');
let inputs = document.querySelectorAll('input');

//render layout and general elements
const header = document.createElement('div');
header.classList.add('header');
const content = document.createElement('div');
content.classList.add('content');
const sidebar = document.createElement('div');
sidebar.classList.add('sidebar');
const footer = document.createElement('div');
footer.classList.add('footer');
export const addNewToDo = document.createElement('button');
addNewToDo.classList.add('openToDoForm')
addNewToDo.textContent = 'New To Do';
content.appendChild(container, addNewToDo);
export const renderElements = document.body.append(header, content, sidebar, footer, addNewToDo);


//render to do elements
export function renderToDo(todo){
    const toDoContainer = document.createElement('div');
    const toDoTitle = document.createElement('h3');
    const toDoNotes = document.createElement('p');
    // const checkBox = document.createElement('div');
    // const toDoDate = document.createElement('div');

    toDoContainer.classList.add('toDoContainer');
    toDoTitle.classList.add('toDoTitle');
    toDoNotes.classList.add('toDoNotes');
    // checkBox.classList.add('checkBox');
    // toDoDate.classList.add('toDoDate');

    toDoTitle.textContent = `${todo.title}`;
    toDoNotes.textContent = `${todo.notes}`;

    toDoContainer.append(toDoTitle, toDoNotes);
    content.append(toDoContainer);

    return{
        toDoContainer
    }
}



