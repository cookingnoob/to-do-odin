

const container = document.getElementById('container');
let titleInput = document.getElementById('title');
let notesInput = document.getElementById('notes');
let submitBtn = document.getElementById('submit');
let inputs = document.querySelectorAll('input');
let newTitle;
let newNotes;

submitBtn.addEventListener('click', submitClick);

function submitClick(event){ 
    event.preventDefault();
    newTitle = titleInput.value;
    newNotes = notesInput.value;
    const formTodo = new Todo (newTitle, newNotes);
    return {
        formTodo
    }
};

export {submitClick};