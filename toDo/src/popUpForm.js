import { addNewToDo } from "./DOM";

export function clickNewToDo(){
    addNewToDo.addEventListener('click', openForm);
};


function openForm() {
    document.getElementById("toDoFormcontainer").style.display = "block";
  };
  
  function closeForm() {
    document.getElementById("toDoFormcontainer").style.display = "none";
  };

