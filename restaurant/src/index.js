import './style.css';

const content = document.querySelector('.content');


const photo = createDivClass("photo");
content.appendChild(photo);
const textC = createDivClass("textC");
content.appendChild(textC);
const about = createDivClass("about");
textC.appendChild(about);
const openHours = createDivClass("openHours");
textC.appendChild(openHours);
const location = createDivClass("location");
textC.appendChild(location)


function createDivClass(className){
    let div = document.createElement('div');
    div.classList.add(className);
    return div
}

//clases:
    //content es la que existe en el html
    // photo
    // textC
    // about
    // openHours
    // location