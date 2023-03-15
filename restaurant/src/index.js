import './style.css';
import {createHome, createDivClass} from './home.js'
import createMenu from './menu';
import createAbout from './about';

const header = createDivClass('header');
const footer = createDivClass('footer');
document.body.append(header, footer);

const homeBtn = document.createElement('button');
homeBtn.classList.add('homeBtn')
header.appendChild(homeBtn);

homeBtn.onclick = function() {
    const content = createHome();
    document.body.appendChild(content);
}

// para miercoles 15 de marzo falta:
    //crear:
        //header con botones que creen un area de la pagina
            //como se hace el brinco de uno a otro?
            //el div content debe tener el id #content
            //para que tenga diferentes clases por cada pagina
            //puede ser logica del boton para llamar al contenido
                

                // const menu = createMenu();
                // document.body.appendChild(menu)

                // const about = createAbout();
                // document.body.appendChild(about);
      
        //footer con mi nombre
