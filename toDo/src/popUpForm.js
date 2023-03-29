import { addNewToDo, submitBtn } from "./DOM";

export function clickNewToDo(){
    addNewToDo.addEventListener('click', openForm);
};

export function closePopUpToDo(){
    submitBtn.addEventListener('click', closeForm)
}

function openForm() {
    document.getElementById("toDoFormcontainer").style.display = "block";
  };
  
  function closeForm() {
    document.getElementById("toDoFormcontainer").style.display = "none";
  };

