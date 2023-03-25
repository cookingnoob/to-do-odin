// la logica que toma los input del formulario
// toma esos inputs y los pasa como parametros a la clase to do
import { notesInput, titleInput, submitBtn } from "./DOM";
import Todo from './createTodo';


const generalTodo = [];

submitBtn.addEventListener('click', getInputValues);

function getInputValues(event){
    event.preventDefault()
    let newTitle = titleInput.value;
    let newNotes = notesInput.value;
    const newTodo = new Todo (newTitle, newNotes);
    generalTodo.push(newTodo);
    console.log(generalTodo)
}



