(()=>{"use strict";var e={};(e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})})(e),document.getElementById("container");let t=document.getElementById("title"),n=document.getElementById("notes"),o=document.getElementById("submit");document.querySelectorAll("input");class u{constructor(e,t){this.title=e,this.notes=t}}const l=new u("prueba","nueva prueba"),c=new u("prueba 2","ver como funciona");[].push(l,c);const r=[];o.addEventListener("click",(function(o){o.preventDefault();let u=t.value,l=n.value;const c=new e.default(u,l);r.push(c),console.log(r)}))})();