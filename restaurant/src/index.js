import './style.css';

const content = document.querySelector('.content');

// const photo = document.createElement('div');
// photo.classList.add('photo');
const photo = createDivClass("photo")
content.appendChild(photo);

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