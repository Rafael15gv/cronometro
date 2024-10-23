const play = document.querySelector("#play");
const restar = document.querySelector("#restar");
const minutos = document.getElementsByTagName("h1")[0];
const segundos = document.getElementsByTagName("h1")[1];
const milesimas = document.getElementsByTagName("h1")[2];
const apuntar = document.createElement('i');

let min = 0;
let seg = 0;
let milSeg = 0;
let contador = 0;
let estadoAnterior = false;

//-************************creacion de eventos**********
play.addEventListener("click", () => {
  estadoAnterior = !estadoAnterior;
  if (estadoAnterior == true) {
    agregaQuitarElementos('<i class="bi bi-pause"></i>', 'uno', 'dos')
    contar();                       //inicia el contador
  } else {
    agregaQuitarElementos('<i class="bi bi-play-fill"></i>', 'dos', 'uno')
    clearInterval(contador);        // Detiene el contador
  }
});

restar.addEventListener("click", () => {
  (min = 0), (seg = 0), (milSeg = 0);
  mostrarCronometro();
});

//-*******************FUNCIONES********
function contar() {
  contador = setInterval(() => {
    milSeg++;
    mostrarCronometro();
    if (milSeg > 99) {
      milSeg = 0;
      seg++;
      mostrarCronometro();
      if (seg > 60) {
        seg = 0;
        min++;
        mostrarCronometro();
      }
    }
  }, 10);
}

function mostrarCronometro() {
  min > 9 ? minutos.innerText = `${min}:` : minutos.innerText = `0${min}:`;
  seg > 9 ? segundos.innerText = `${seg}:` : segundos.innerText = `0${seg}:`;
  milSeg > 9 ? milesimas.innerText = `${milSeg}:` : milesimas.innerText = `0${milSeg}:`;
}

function agregaQuitarElementos(inner, classAdd, classRemove) {
    play.innerHTML = inner;
    play.classList.add(classAdd);
    play.classList.remove(classRemove);
}