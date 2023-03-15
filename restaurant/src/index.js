import './style.css';
import {createHome, createDivClass} from './home.js'
import createMenu from './menu';
import createAbout from './about';

const header = createDivClass('header');
const footer = createDivClass('footer');
document.body.append(header, footer);

const homeBtn = document.createElement('button');
homeBtn.classList.add('headerBtn');
homeBtn.textContent = 'Home';

const menuBtn = document.createElement('button');
menuBtn.classList.add('headerBtn');
menuBtn.textContent = 'Menu';

const aboutBtn = document.createElement('button');
aboutBtn.classList.add('headerBtn');
aboutBtn.textContent = 'About';

header.append(homeBtn, menuBtn, aboutBtn);

homeBtn.onclick = function() {
    const content = createHome();
    document.body.appendChild(content);
};

menuBtn.onclick = function(){
    const menu = createMenu();
    document.body.appendChild(menu)
};

aboutBtn.onclick = function(){

  const about = createAbout();
  document.body.appendChild(about);
}

// para miercoles 15 de marzo falta:
    //crear:
        //header con botones que creen un area de la pagina
            //como se hace el brinco de uno a otro?
            //el div content debe tener el id #content
            //para que tenga diferentes clases por cada pagina
            //puede ser logica del boton para llamar al contenido
                

                

      
        //footer con mi nombre
