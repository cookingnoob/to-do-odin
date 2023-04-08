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

projectArrays.push(generalTodo, cooking, done);

const prueba1 = new Todo ('go to carwash', 'try new service for interiors');
const prueba2 = new Todo ('buy eggs', 'remember they are expensive now');
const oven = new Todo ('Feed sourdough starter', '50% whole wheat flour, 50% water, let rest four hours');
const sauce = new Todo ('Pizza sauce', 'San Marzano Tomatoes, garlic, onion, basil leaf');
generalTodo.push(prueba1, prueba2);
cooking.push(oven, sauce);



export function renderTDList (){
    generalTodo.forEach(todo => renderToDo(todo))
    console.log(projectArrays)
}


renderDefaultProjects(generalTodo, 'General');
renderDefaultProjects(cooking, 'Cooking classes');
renderDefaultProjects(done, 'Done');