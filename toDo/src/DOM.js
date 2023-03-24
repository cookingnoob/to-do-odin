//form elements
const container = document.getElementById('container');
let titleInput = document.getElementById('title');
let notesInput = document.getElementById('notes');
let submitBtn = document.getElementById('submit');
let inputs = document.querySelectorAll('input');

function prueba (event){
    event.preventDefault()
    console.log('prueba')
}

export {prueba, titleInput, submitBtn}
//render elements

