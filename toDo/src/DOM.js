import { pruebaCheckBox } from "./checkTodo";

// el boton para agregar to do y el formulario de proyectos tiene de top 0 hasta arriba de la web
//creo que es porque no se hizo bien el append

//form elements
const toDoFormcontainer = document.getElementById('toDoFormcontainer');
const arrayFormContainer = document.getElementById('arrayFormContainer');//A
export let titleInput = document.getElementById('title');
export let notesInput = document.getElementById('notes');
export let dueDate = document.getElementById('dueDate');
export let submitBtn = document.getElementById('submit');
export let projectName = document.getElementById('project');
export let submitBtnA = document.getElementById('submitA'); 
let inputs = document.querySelectorAll('input');



//render layout and general elements
const header = document.createElement('div');
export const content = document.createElement('div');
export const sidebar = document.createElement('div');
const footer = document.createElement('div');
export const addNewToDo = document.createElement('button');
export const addNewArray = document.createElement('button');
export let allToDosContainer = document.createElement('div');

header.classList.add('header');
content.classList.add('content');
sidebar.classList.add('sidebar');
footer.classList.add('footer');
addNewToDo.classList.add('openToDoForm');
addNewArray.classList.add('openArrayForm');
allToDosContainer.classList.add('allToDosContainer')

addNewToDo.textContent = 'New To Do';
addNewArray.textContent = 'New Project';

sidebar.append(addNewArray, arrayFormContainer);
content.appendChild(allToDosContainer);
header.append(toDoFormcontainer, addNewToDo,)

const renderElements = document.body.append(header, content, sidebar, footer, addNewToDo, allToDosContainer);
