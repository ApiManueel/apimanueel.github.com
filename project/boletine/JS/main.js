/* Se obtiene los elementos de close */

let links = document.querySelectorAll(".close");

/* Se recorren */

links.forEach(function (link) {
  /* Se agg el evento */
  link.addEventListener("click", function (ev) {
    ev.preventDefault();
    let content = document.querySelector(".content");

    /* Quitarle las clases de animacion */
    content.classList.remove("fadeInDown");
    content.classList.remove("animated");

    /* Agregar clases para animar salida */
    content.classList.add("fadeOutUp");
    content.classList.add("animated");

    setTimeout(function () {
      location.href = "/boletine";
    }, 600);
    /* constante 
    setInterval; */

    return false;
  });
});

/* se trabaja con class list */
let iconos = document.querySelectorAll("i");
iconos.forEach(function (icono) {
  icono.classList.remove("fa-star");
  icono.classList.add("fa-star");
});
