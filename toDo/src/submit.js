// la logica que toma los input del formulario
// toma esos inputs y los pasa como parametros a la clase to do
import { notesInput, titleInput, submitBtn, projectName, submitBtnA } from "./DOM";
import { generalTodo, Todo } from "./createTodo";
import { renderToDo } from "./DOM";

submitBtn.addEventListener('click', getInputValues);

function getInputValues(event){
    event.preventDefault();
    let newTitle = titleInput.value;
    let newNotes = notesInput.value;
    const dynamicTodo = new Todo (newTitle, newNotes);
    generalTodo.push(dynamicTodo);
    renderToDo(dynamicTodo);
}
submitBtnA.addEventListener('click', getProjectName)

function getProjectName(event){ 
event.preventDefault();
let projectInput = projectName.value;
[projectInput] = []
generalTodo.push([projectInput]);
console.log(generalTodo);
// renderProject([projectInput]);
}


