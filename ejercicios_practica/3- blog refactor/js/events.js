"use strict";


// ----------------------------------------------------
/* Nueva forma de recorrer todos los posts y agregar la funcionalidad
  de mostrar/ocultar
*/
const posts = document.getElementsByClassName("post");

for (const post of posts) {
  post.classList.add("closed");
  
  const eventoMouseOver = () => {
    // Removemos la clase de cerrado
    post.classList.remove("closed");
    // Agregamos la clase de abierto
    post.classList.add("open");
  }

  const eventoMouseOut = () => {
    // Agregamos la clase de cerrado
    post.classList.add("closed");
    // Quitamos la clase de abierto
    post.classList.remove("open");
  }


  post.addEventListener("mouseover", eventoMouseOver);

  post.addEventListener("mouseout", eventoMouseOut);
}