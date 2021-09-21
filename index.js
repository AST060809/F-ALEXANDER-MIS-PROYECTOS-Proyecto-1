"use strict";
document.addEventListener("DOMContentLoaded", () => {
  let cajas = document.querySelectorAll(".color");
  let colorFondo = document.querySelector(".selectores");

  cajas.forEach((caja) => {
    caja.addEventListener("click", bColor);
  });

  function bColor() {
    this.classList.add("movimiento");
    colorFondo.style.backgroundColor = `${this.getAttribute("color-fondo")}`;
    cajas.forEach((caja) => {
      setTimeout(function () {
        caja.classList.remove("movimiento");
      }, 700);
    });
  }
});
