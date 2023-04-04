import { notesInput, titleInput, submitBtn, projectName, submitBtnA, dueDate, renderProject, renderToDo } from "./DOM";
import { generalTodo, Todo } from "./createTodo";
import { parseISO } from 'date-fns'


//creates a new to do when you click submit, it gets pushed to the generalTodo array
submitBtn.addEventListener('click', getInputValues);
function getInputValues(event){
    event.preventDefault();
    let newTitle = titleInput.value;
    let newNotes = notesInput.value;
    let newDate = dueDate.value;
    let formatDate = parseISO(newDate);
    const dynamicTodo = new Todo (newTitle, newNotes, newDate);
    console.log(formatDate);
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
    renderProject([projectInput]);
}

