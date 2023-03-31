// la logica que toma los input del formulario
// toma esos inputs y los pasa como parametros a la clase to do
import { notesInput, titleInput, submitBtn, projectName, submitBtnA, dueDate, renderProject } from "./DOM";
import { generalTodo, Todo } from "./createTodo";
import { renderToDo } from "./DOM";

//creates a new to do when you click submit, it gets pushed to the generalTodo array
submitBtn.addEventListener('click', getInputValues);
function getInputValues(event){
    event.preventDefault();
    let newTitle = titleInput.value;
    let newNotes = notesInput.value;
    let newDate = dueDate.value;
    const dynamicTodo = new Todo (newTitle, newNotes, newDate);
    console.log(newDate);
    generalTodo.push(dynamicTodo);
    renderToDo(dynamicTodo);
}

//creates a new array inside the generalToDo array, in other words the project list
submitBtnA.addEventListener('click', getProjectName);
function getProjectName(event){ 
    event.preventDefault();
    let projectInput = projectName.value;
    [projectInput] = []
    generalTodo.push([projectInput]);
    console.log(generalTodo);
    renderProject([projectInput])
}

