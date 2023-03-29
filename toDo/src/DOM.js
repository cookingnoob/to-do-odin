//form elements
const container = document.getElementById('container');
export let titleInput = document.getElementById('title');
export let notesInput = document.getElementById('notes');
export let submitBtn = document.getElementById('submit');
let inputs = document.querySelectorAll('input');

//render elements

const header = document.createElement('div');
header.classList.add('header');
const content = document.createElement('div');
content.classList.add('content');
const sidebar = document.createElement('div');
sidebar.classList.add('sidebar');
const footer = document.createElement('div');
footer.classList.add('footer');

export const renderElements = document.body.append(header, content, sidebar, footer);
content.appendChild(container)


//     6. Piezas de la web
//         1. Header
//         2. Side bar con la lista de arrays y el boton para crearlos
//         3. Container para mostrar la lista de todos y un boton para crearlos
//             1. Cada todo tiene un circulo de checkbox, un titular y un renglon de notas
//             2. El formulario aparece, pone una cortinilla gris para resaltar y cuando picas enviar desaparece
//    




    //if (no hay arrays creados, se usa general){
        //forEach element in array:
            //crea elementos y darles clase
            //append child al contenedor
    //} else if {se hace lo mismo, pero solo pasa un array en particular}
   
