console.log('e')
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


console.log(generalTodo)
//los to do's deben tener:
//title
//descripcion
//dueDate
//prioridad
//notas
//checklist
//estar dentro de un proyecto o listas separadas

//la logica de la aplicacion debe estar separada
//crear nuevos to dos
//completar los todo
//cambiar prioridad
// manipulacion del DOM


//la interfaz del usuario deberia
//ver todos los proyectos
//ver todos los to do en cada proyecto, el titulo y su fecha
//expandir un to do para ver y editar detalles
//borrar el to do

//Single responsibility:
//un modulo que capture la informacion
//un modulo que muestre

