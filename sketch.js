let anchoJugador = 20;
let alturaJugador = 70;
let xJugador1 = 80;
let xJugador2 = 720;
let yJugador1 = 215;
let yJugador2 = 215;
let direccionMovimiento = 3;

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background("black");
  
  if(keyIsDown(87) && yJugador1 > 0) {
    yJugador1 += -direccionMovimiento;
  }
  if(keyIsDown(83) && yJugador1 + alturaJugador < 500) {
    yJugador1 += direccionMovimiento;
  }
  if(keyIsDown(UP_ARROW)  && yJugador2 > 0) {
    yJugador2 += -direccionMovimiento;
  }
  if(keyIsDown(DOWN_ARROW) && yJugador2 + alturaJugador < 500) {
    yJugador2 += direccionMovimiento;
  }
  
  fill("blue");
  rect(xJugador1, yJugador1,anchoJugador, alturaJugador)
  
  fill("red");
  rect(xJugador2, yJugador2,anchoJugador, alturaJugador)
}