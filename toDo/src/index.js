import {submitClick} from './formDOM.js'

const verPrueba = submitClick;

console.log(verPrueba)

class Todo {
    constructor (title, notes){
        this.title = title;
        this.notes = notes;
    }
}

const generalTodo = [];

const prueba1 = new Todo ('prueba', 'nueva prueba');
const prueba2 = new Todo ('prueba 2', 'ver como funciona')

generalTodo.push(prueba1, prueba2);




//los to do's deben tener:
//title
//descripcion
//dueDate
//prioridad
//notas
//checklist
//estar dentro de un proyecto o listas separadas






