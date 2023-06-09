import { notesInput, titleInput, submitBtn, projectName, submitBtnA, dueDate, } from "./DOM";
import { renderToDo } from "./renderToDo";
import { generalTodo, projectArrays } from "./toDoArrays";
import { renderProject, renderDefaultProjects, currentProject} from "./renderProject";
import { Todo } from "./createTodo";
import { parseISO, format } from 'date-fns'


//creates a new to do when you click submit, it gets pushed to the generalTodo array
export const createTodo = () => submitBtn.addEventListener('click', getInputValues);

export function getInputValues(array){
    event.preventDefault();
    let newTitle = titleInput.value;
    let newNotes = notesInput.value;
    let newDate = dueDate.value;
    let parseDate = parseISO(newDate);
    let formatDate = format(parseDate, 'PPPP');
    const dynamicTodo = new Todo (newTitle, newNotes, formatDate);
    renderToDo(dynamicTodo);
    console.log(projectArrays[currentProject]);
    projectArrays[currentProject].push(dynamicTodo)
}

//creates a new array inside the generalToDo array, in other words the project list
export const createProject = () => submitBtnA.addEventListener('click', getProjectName);

function getProjectName(event){ 
    event.preventDefault();
    let projectInput = projectName.value;
    projectInput = []
    projectArrays.push(projectInput);
    renderProject(projectInput); 
}

console.log(currentProject)