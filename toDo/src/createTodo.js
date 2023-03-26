// se tiene que exportar el constructor para poder crear la clase en el submit
import { getValues,  } from "./submit";


export const generalTodo = [];

export class Todo {
    constructor (title, notes){
        this.title = title;
        this.notes = notes;
    }
}


const prueba1 = new Todo ('prueba', 'nueva prueba');
const prueba2 = new Todo ('prueba 2', 'ver como funciona')

generalTodo.push(prueba1, prueba2);




