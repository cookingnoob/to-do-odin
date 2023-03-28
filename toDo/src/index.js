import css from "./style.css";
import { prueba1, prueba2 } from "./createTodo";

function createElementClass(newClass){
    const newElement = document.createElement('div');
    newElement.classList.add(newClass);
    };

prueba1.createElementClass('toDo');





//     6. Piezas de la web
//         1. Header
//         2. Side bar con la lista de arrays y el boton para crearlos
//         3. Container para mostrar la lista de todos y un boton para crearlos
//             1. Cada todo tiene un circulo de checkbox, un titular y un renglon de notas
//             2. El formulario aparece, pone una cortinilla gris para resaltar y cuando picas enviar desaparece
//    
    


//1 DOM va a exportar a popUp el metodo de seleccionar el boton +
//2 popUp va a cambiar la clase de la forma para que sea visible
//3 aparece el formulario y se rellena
//4.1 submit toma los valores del DOM, la logica de fechas y los convierte en variables para exportar a createTodo
//4.2 submit va a importar una funcion de popUp para cambiar la clase para que sea invisible y borre el valor de las variables
//5 createToDo exporta un objeto para que se empuje a un array
//6 toDoArray importa métodos del DOM para hacer un render de los elementos dentro de cada array
// 7 hay un modulo similar a createToDo que es para crear un array, que toma solo un argumento que es el nombre del proyecto



