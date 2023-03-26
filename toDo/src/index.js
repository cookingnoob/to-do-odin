import css from "./style.css";

//de submit.js
import { notesInput, titleInput, submitBtn } from "./DOM";
import { generalTodo, Todo } from "./createTodo";

submitBtn.addEventListener('click', getInputValues);

function getInputValues(event){
    event.preventDefault()
    let newTitle = titleInput.value;
    let newNotes = notesInput.value;
    const dynamicTodo = new Todo (newTitle, newNotes);
    generalTodo.push(dynamicTodo);
    console.log(generalTodo);
}


//1 DOM va a exportar a popUp el metodo de seleccionar el boton +
//2 popUp va a cambiar la clase de la forma para que sea visible
//3 aparece el formulario y se rellena
//4.1 submit toma los valores del DOM, la logica de fechas y los convierte en variables para exportar a createTodo
//4.2 submit va a importar una funcion de popUp para cambiar la clase para que sea invisible y borre el valor de las variables
//5 createToDo exporta un objeto para que se empuje a un array
//6 toDoArray importa métodos del DOM para hacer un render de los elementos dentro de cada array
// 7 hay un modulo similar a createToDo que es para crear un array, que toma solo un argumento que es el nombre del proyecto



