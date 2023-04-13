import {sidebar, projectName, content} from "./DOM";
import { renderTDList } from "./createTodo";
import { projectArrays } from "./toDoArrays";

export function renderProject(array){
    const projectContainer = document.createElement('div');
    const projectTitle = document.createElement('h3');

    projectContainer.classList.add('projectContainer');
    projectTitle.classList.add('projectTitle');

    projectTitle.textContent = (`${projectName.value}`);

    projectContainer.append(projectTitle);
    sidebar.append(projectContainer);
    
    projectContainer.addEventListener('click', function probando(){
        content.replaceChildren()
        renderTDList(array);
    });
    
}

export function renderDefaultProjects (array, name){

    const projectContainer = document.createElement('div');
    const projectTitle = document.createElement('h3');

    projectContainer.classList.add('projectContainer');
    projectTitle.classList.add('projectTitle');


    projectTitle.textContent = `${name}`;

    projectContainer.append(projectTitle);
    sidebar.append(projectContainer);
    
    projectContainer.addEventListener('click', function probando(){
        content.replaceChildren()
        renderTDList(array);
    });
}



// export const clickProject = (projectContainer) => projectsBox.addEventListener('click', console.log(projectContainer) )
// export const ChooseProject = () => projectsBox.forEach( project => console.log('hola') ) 