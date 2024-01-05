/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let quien = ["El perro", "Mi abuela", "La tortuga", "Mi pájaro"];
  let accion = ["se comió", "orinó en", "aplastó", "rompió"];
  let que = ["mis deberes", "las llaves", "el coche"];
  let cuando = [
    "antes de clase",
    "justo a tiempo",
    "cuando acabé",
    "durante la comida",
    "mientras rezaba"
  ];

  function generarExcusa() {
    let indiceQuien = Math.floor(Math.random() * quien.length);
    let indiceAccion = Math.floor(Math.random() * accion.length);
    let indiceQue = Math.floor(Math.random() * que.length);
    let indiceCuando = Math.floor(Math.random() * cuando.length);

    let excusa =
      quien[indiceQuien] +
      " " +
      accion[indiceAccion] +
      " " +
      que[indiceQue] +
      " " +
      cuando[indiceCuando] +
      ".";

    return excusa;
  }

  // Ejemplo de uso
  console.log(generarExcusa());

  document.getElementById("excusa").innerText = generarExcusa();
};
