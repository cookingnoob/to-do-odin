import {sidebar} from "./DOM";

export function renderProject(){
    const projectContainer = document.createElement('div');
    const projectTitle = document.createElement('h3');

    projectContainer.classList.add('projectContainer');
    projectTitle.classList.add('projectTitle');

    projectTitle.textContent = `${projectName.value}`;

    projectContainer.append(projectTitle);
    sidebar.append(projectContainer);

    return{
        projectContainer
    }
}

export function renderDefaultProjects (array, name){

    const projectContainer = document.createElement('div');
    const projectTitle = document.createElement('h3');

    projectContainer.classList.add('projectContainer');
    projectTitle.classList.add('projectTitle');


    projectTitle.textContent = `${name}`;

    projectContainer.append(projectTitle);
    sidebar.append(projectContainer);

    return{

        projectContainer
        
    }
}



// export const clickProject = (projectContainer) => projectsBox.addEventListener('click', console.log(projectContainer) )
// export const ChooseProject = () => projectsBox.forEach( project => console.log('hola') ) 