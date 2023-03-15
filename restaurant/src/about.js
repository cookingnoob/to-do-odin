import { createDivClass } from "./home";
const content = document.getElementById('content'); 

function createAbout(){
const info = createDivClass('info');
content.appendChild(info);
const infoT  = createDivClass('infoT');
infoT.textContent = 'texto de prueba'
const infoP = createDivClass('infoP');
info.append(infoT, infoP);

return {info, infoT, infoP};
}

export default createAbout;