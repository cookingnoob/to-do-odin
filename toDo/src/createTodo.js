import { getValues,  } from "./submit";
import { renderToDo } from "./DOM";

export const generalTodo = [];

export class Todo {
    constructor (title, notes){
        this.title = title;
        this.notes = notes;
    }
};

export const prueba1 = new Todo ('prueba', 'nueva prueba');
export const prueba2 = new Todo ('prueba 2', 'ver como funciona');

generalTodo.push(prueba1, prueba2);

export function renderTDList (){
    generalTodo.forEach(todo => renderToDo(todo))
    console.log(generalTodo);
}