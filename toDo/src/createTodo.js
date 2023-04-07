import { getValues,  } from "./submit";
import { renderToDo, renderDefaultProjects } from "./DOM";

export class Todo {
    constructor (title, notes, dueDate){
        this.title = title;
        this.notes = notes;
        this.dueDate = dueDate
    }
};

export const projectArrays = [];
export const generalTodo = [];
export const cooking = [];
export const done = [];

projectArrays.push(generalTodo, done);

export const prueba1 = new Todo ('go to carwash', 'try new service for interiors');
export const prueba2 = new Todo ('buy eggs', 'remember they are expensive now');
generalTodo.push(prueba1, prueba2);


export function renderTDList (){
    generalTodo.forEach(todo => renderToDo(todo))
    console.log(projectArrays)
}


renderDefaultProjects(generalTodo, 'General');
renderDefaultProjects(cooking, 'Cooking classes');
renderDefaultProjects(done, 'Done');