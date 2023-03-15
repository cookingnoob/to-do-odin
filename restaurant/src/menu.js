import { createDivClass } from "./home";

const content = document.getElementById('content');

function createMenu (){ 
    let menuItems = []
for(let i = 0; i < 5; i++){
    const menu = createDivClass('menu');
    content.appendChild(menu);
    const photoF = createDivClass('photoF');
    menu.appendChild(photoF);
    const foodD = createDivClass('foodD');
    menu.appendChild(foodD);
    menuItems.push(i)
    return {menuItems}
};
}

export default createMenu