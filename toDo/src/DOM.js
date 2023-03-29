//form elements
const container = document.getElementById('toDoFormcontainer');
export let titleInput = document.getElementById('title');
export let notesInput = document.getElementById('notes');
export let submitBtn = document.getElementById('submit');
// export let addNewToDo = document.querySelector('openForm')
let inputs = document.querySelectorAll('input');

//render elements
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
addNewToDo.textContent = 'New To Do'
export const renderElements = document.body.append(header, content, sidebar, footer, addNewToDo);

content.appendChild(container, addNewToDo);







