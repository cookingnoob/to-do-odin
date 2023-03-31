import { pruebaCheckBox } from "./checkTodo";

// el boton para agregar to do y el formulario de proyectos tiene de top 0 hasta arriba de la web
//creo que es porque no se hizo bien el append

//form elements
const container = document.getElementById('toDoFormcontainer');
const arrayFormContainer = document.getElementById('arrayFormContainer');//A
export let titleInput = document.getElementById('title');
export let notesInput = document.getElementById('notes');
export let dueDate = document.getElementById('dueDate');
export let submitBtn = document.getElementById('submit');
export let projectName = document.getElementById('project');//A
export let submitBtnA = document.getElementById('submitA'); //A for array
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
export const addNewArray = document.createElement('button');
addNewArray.classList.add('openArrayForm')//A
addNewArray.textContent = 'New Array';//A
sidebar.append(addNewArray, arrayFormContainer);
content.appendChild(container, addNewToDo);
export const renderElements = document.body.append(header, content, sidebar, footer, addNewToDo);


//render to do elements
export function renderToDo(todo){
    const toDoContainer = document.createElement('div');
    const toDoTitle = document.createElement('h3');
    const toDoNotes = document.createElement('p');
    const checkBox = document.createElement('div');
    // const toDoDate = document.createElement('div');

    toDoContainer.classList.add('toDoContainer');
    toDoTitle.classList.add('toDoTitle');
    toDoNotes.classList.add('toDoNotes');
    checkBox.classList.add('checkBox');
    checkBox.addEventListener('click', pruebaCheckBox); //cambiarlo a toggle para que cambie de clase
    // toDoDate.classList.add('toDoDate');

    toDoTitle.textContent = `${todo.title}`;
    toDoNotes.textContent = `${todo.notes}`;

    toDoContainer.append(toDoTitle, toDoNotes, checkBox);
    content.append(toDoContainer);

    return{
        toDoContainer
    }
}

export function renderProject(){
    const projectContainer = document.createElement('div');
    const projectTitle = document.createElement('h3');

    projectContainer.classList.add('projectContainer');
    projectTitle.classList.add('projectTitle');

    projectTitle.textContent = `${projectName.value}`;

    projectContainer.append(projectTitle);
    sidebar.append(projectContainer);

    return{
        projectContainer
    }
}

