const play = document.querySelector("#play");
const restar = document.querySelector("#restar");
const minutos = document.getElementsByTagName("h1")[0];
const segundos = document.getElementsByTagName("h1")[1];
const milesimas = document.getElementsByTagName("h1")[2];
let min = 0;
let seg = 0;
let milSeg = 0;
let contador = 0;
let estadoAnterior = false;

//-************************creacion de eventos**********
play.addEventListener("click", () => {
  estadoAnterior = !estadoAnterior;
  if (estadoAnterior == true) {
    contar();                       //inicia el contador
  } else {
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
  if (min > 9) {
    minutos.innerText = `${min}:`;
  }else{
    minutos.innerText = `0${min}:`;
  }

  if (seg > 9) {
    segundos.innerText = `${seg}:`;
  }else{
    segundos.innerText = `0${seg}:`;
  }
  
  if (milSeg > 9) {
    milesimas.innerText = milSeg;
  }else{
    milesimas.innerText = `0${milSeg}`;
  }
  
}