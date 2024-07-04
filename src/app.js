/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { Button } from "bootstrap";

window.onload = function() {
  //write your code here
  generador_Carta_Random();
};

function generador_Carta_Random() {
  // declaro los arrays para pasar sus valores a la card
  let valor_Palo = ["♦", "♥", "♠", "♣"];
  let valor_Numero = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  // Genero los indices random, para acceder de forma aleatoria a los elementos de los arrays....
  let indice_Palo = [Math.floor(Math.random() * valor_Palo.length)];
  let indice_Valor_Numero = [Math.floor(Math.random() * valor_Numero.length)];
  // Genero las variables que me van a permitir manipular a los elementos del HTML
  let etiqueta_Palo1 = document.getElementById("elemento-top");
  let etiqueta_Palo2 = document.querySelector("#elemento-buttom");
  let etiqueta_Numero = document.querySelector("#elemento-middle");
  // Le asigno a los elementos del HTML por medio del innerHTML los valores random de los arrays y los muestro en la pag
  etiqueta_Palo1.innerHTML = valor_Palo[indice_Palo];
  etiqueta_Palo2.innerHTML = valor_Palo[indice_Palo];
  etiqueta_Numero.innerHTML = valor_Numero[indice_Valor_Numero];
  // Realizo una condicion para asignar un color u otro, dependiendo del elemento que obtenga del array
  if (valor_Palo[indice_Palo] === "♥" || valor_Palo[indice_Palo] === "♦") {
    etiqueta_Palo1.style.color = "red";
    etiqueta_Palo2.style.color = "red";
  } else {
    etiqueta_Palo1.style.color = "black";
    etiqueta_Palo2.style.color = "black";
  }
}
// Genero la variable para manipular el boton y le agrego un evento
let boton = document.querySelector("#button");
boton.addEventListener("click", generador_Carta_Random);
// Utilizo la funcion "setInterval para mostrar la funcion(generador_Carta_Random) durante un intervalo de tiempo, que se especifica en ms "
setInterval(generador_Carta_Random, 2000);
