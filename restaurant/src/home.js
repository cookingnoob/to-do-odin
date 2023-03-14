const content = document.querySelector('.content');

const photo = createDivClass("photo");
content.appendChild(photo);

const textC = createDivClass("textC");
content.appendChild(textC);

const about = createDivClass("about");
textC.appendChild(about);
about.textContent = 'prueba 2'

const openHours = createDivClass("openHours");
textC.appendChild(openHours);
const location = createDivClass("location");
textC.appendChild(location);

function createDivClass(className){
    let div = document.createElement('div');
    div.classList.add(className);
    return div
}

export {content, photo, about, openHours, location};