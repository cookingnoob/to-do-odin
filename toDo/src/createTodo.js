import { renderToDo } from "./renderToDo";
import { generalTodo, cooking } from "./toDoArrays";
import { prueba } from "./renderProject";

export class Todo {
    constructor (title, notes, dueDate){
        this.title = title;
        this.notes = notes;
        this.dueDate = dueDate
    }
};

export const prueba1 = new Todo ('go to carwash', 'try new service for interiors');
export const prueba2 = new Todo ('buy eggs', 'remember they are expensive now');
export const oven = new Todo ('Feed sourdough starter', '50% whole wheat flour, 50% water, let rest four hours');
export const sauce = new Todo ('Pizza sauce', 'San Marzano Tomatoes, garlic, onion, basil leaf');


generalTodo.push(prueba1, prueba2);
cooking.push(oven, sauce);



export function renderTDList (chosenArray){
    chosenArray.forEach(todo => renderToDo(todo))
}

