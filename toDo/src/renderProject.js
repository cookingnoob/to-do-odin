import {sidebar, projectName} from "./DOM";

export function renderProject(){
    const projectContainer = document.createElement('div');
    const projectTitle = document.createElement('h3');

    projectContainer.classList.add('projectContainer');
    projectTitle.classList.add('projectTitle');

    projectTitle.textContent = (`${projectName.value}`);

    projectContainer.append(projectTitle);
    sidebar.append(projectContainer);
    projectContainer.addEventListener('click', function click(){prueba(projectTitle.textContent)});
  
}

export function renderDefaultProjects (array, name){

    const projectContainer = document.createElement('div');
    const projectTitle = document.createElement('h3');

    projectContainer.classList.add('projectContainer');
    projectTitle.classList.add('projectTitle');


    projectTitle.textContent = `${name}`;

    projectContainer.append(projectTitle);
    sidebar.append(projectContainer);
    projectContainer.addEventListener('click', function click(){prueba(array.value)});
}


function prueba(title){
    console.log(title)
}
// export const clickProject = (projectContainer) => projectsBox.addEventListener('click', console.log(projectContainer) )
// export const ChooseProject = () => projectsBox.forEach( project => console.log('hola') ) 