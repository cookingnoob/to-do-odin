import { addNewToDo, submitBtn, projectName, submitBtnA, addNewArray } from "./DOM";

//open and close the to do form elements
export function clickNewToDo(){
    addNewToDo.addEventListener('click', openForm);
};
export function closePopUpToDo(){
    submitBtn.addEventListener('click', closeForm);
};
function openForm() {
  document.getElementById("toDoFormcontainer").style.display = "block";
};

function closeForm() {
  document.getElementById("toDoFormcontainer").style.display = "none";
};


//open and close project/arrays form
export function clickNewProject(){
  addNewArray.addEventListener('click', openProjectForm);
};

export function closeProjectPopUp(){
  submitBtnA.addEventListener('click', closeProjectForm);
};

function openProjectForm() {
    document.getElementById("arrayFormContainer").style.display = "block";
};
function closeProjectForm() {
    document.getElementById("arrayFormContainer").style.display = "none";
};
