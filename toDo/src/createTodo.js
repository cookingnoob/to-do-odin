import { getValues,  } from "./submit";
import { renderToDo, renderProject } from "./DOM";

export const generalTodo = [];

export class Todo {
    constructor (title, notes, dueDate){
        this.title = title;
        this.notes = notes;
        this.dueDate = dueDate
    }
};

export const prueba1 = new Todo ('prueba', 'nueva prueba');
export const prueba2 = new Todo ('prueba 2', 'ver como funciona');
export const done = []

generalTodo.push(prueba1, prueba2);

export function renderTDList (){
    generalTodo.forEach(todo => renderToDo(todo))
    console.log(generalTodo);
}

renderProject(generalTodo);