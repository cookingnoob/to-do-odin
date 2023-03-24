

const container = document.getElementById('container');
let titleInput = document.getElementById('title');
let notesInput = document.getElementById('notes');
let submitBtn = document.getElementById('submit');
let inputs = document.querySelectorAll('input');

submitBtn.addEventListener('click', submitClick);

function submitClick(event){ 
    event.preventDefault();
    let newTitle = titleInput.value;
    let newNotes = notesInput.value;
    const formTodo = new Todo (newTitle, newNotes);
    return {
        formTodo
    }
};

export {submitClick};