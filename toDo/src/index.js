import css from "./style.css";
import { clickNewToDo, closePopUpToDo, clickNewProject, closeProjectPopUp} from "./popUpForm";
import { renderTDList  } from "./createTodo";
import { createTodo, createProject } from "./submit";
import { generalTodo } from "./toDoArrays";

createProject();
createTodo();
renderTDList(generalTodo);
clickNewToDo();
closePopUpToDo();
clickNewProject();
closeProjectPopUp();



//checkTodo tiene la funcion que estará en el checkbox
//createTodo tiene la class de Todo, los to-dos default y llama al método de render
//dateLogic debería tener la lógica de las fechas
//popUpForm tiene los métodos para que aparezcan y desaparezcan los formularios
//renderProjects tiene la lógica para hacer render a los proyectos
//renderTodo la logica para hacer el render del todo
//submit la logica de lo que pasa cuando subes un formulario
//toDoArrays estan los arrays de base
