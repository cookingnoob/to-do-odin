import { notesInput, titleInput, submitBtn, projectName, submitBtnA, dueDate, } from "./DOM";
import { renderToDo } from "./renderToDo";
import { generalTodo, projectArrays } from "./toDoArrays";
import { renderProject } from "./renderProject";
import { Todo } from "./createTodo";
import { parseISO, format } from 'date-fns'


//creates a new to do when you click submit, it gets pushed to the generalTodo array
submitBtn.addEventListener('click', getInputValues);
function getInputValues(event){
    event.preventDefault();
    let newTitle = titleInput.value;
    let newNotes = notesInput.value;
    let newDate = dueDate.value;
    let parseDate = parseISO(newDate);
    let formatDate = format(parseDate, 'PPPP');
    const dynamicTodo = new Todo (newTitle, newNotes, formatDate);
    generalTodo.push(dynamicTodo); // cambiar este método a uno que cheque en que array estás
    renderToDo(dynamicTodo);
}

//creates a new array inside the generalToDo array, in other words the project list
submitBtnA.addEventListener('click', getProjectName);
function getProjectName(event){ 
    event.preventDefault();
    let projectInput = projectName.value;
    [projectInput] = []
    projectArrays.push([projectInput]);
    renderProject([projectInput]);
}

