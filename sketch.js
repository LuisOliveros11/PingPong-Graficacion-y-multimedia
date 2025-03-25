let ancho_canvas = 800;
let largo_canvas = 500;

let anchoJugador = 20;
let alturaJugador = 70;
let xJugador1 = 80;
let xJugador2 = 720;
let yJugador1 = 215;
let yJugador2 = 215;
let direccionMovimiento = 3;

let tamano_pelota = 20;


let pelota = {
    x: 400,
    y: 250,
    tamano: tamano_pelota,
    radio: tamano_pelota / 2,
    velocidadX: 1,
    velocidadY: 3,
    direccionX: 1,
    direccionY: 1
  }

function setup() {
  createCanvas(ancho_canvas, largo_canvas);
  pelota.direccionX = obtener_numero_random();
}

function draw() {
  background("black");
  
  if(keyIsDown(87) && yJugador1 > 0) {
    yJugador1 += -direccionMovimiento;
  }
  if(keyIsDown(83) && yJugador1 + alturaJugador < largo_canvas) {
    yJugador1 += direccionMovimiento;
  }
  if(keyIsDown(UP_ARROW)  && yJugador2 > 0) {
    yJugador2 += -direccionMovimiento;
  }
  if(keyIsDown(DOWN_ARROW) && yJugador2 + alturaJugador < largo_canvas) {
    yJugador2 += direccionMovimiento;
  }
  
  fill("rgb(24,255,167)");
  rect(xJugador1, yJugador1,anchoJugador, alturaJugador)
  
  fill("red");
  rect(xJugador2, yJugador2,anchoJugador, alturaJugador)
  
  fill("white");
  circle(pelota.x+=pelota.velocidadX*pelota.direccionX, pelota.y+=pelota.velocidadY*pelota.direccionY, pelota.tamano);
  
  //Valida colision con el canvas
  if(pelota.y + pelota.radio >= largo_canvas){
     pelota.direccionY = -pelota.direccionY;
  }
  if(pelota.y <= 0){
     pelota.direccionY = -pelota.direccionY;
  }
  
  //Colision jugador 1
  if(pelota.x - pelota.radio <= xJugador1 + anchoJugador && 
      pelota.x > xJugador1 &&
      pelota.y >= yJugador1 &&
      pelota.y <= yJugador1 + alturaJugador){
    pelota.direccionX = -pelota.direccionX;
    pelota.velocidadX += 0.5;
    pelota.velocidadY += 0.5;
  }
  
  //Colision jugador 2
  if(pelota.x + tamano_pelota / 2 >= xJugador2 &&
      pelota.x < xJugador2 + anchoJugador &&
      pelota.y >= yJugador2 &&
      pelota.y <= yJugador2 + alturaJugador) {
    pelota.direccionX = -pelota.direccionX;
    pelota.velocidadX += 0.5;
    pelota.velocidadY += 0.5;
  }
}

//Función que determinará en qué dirección se moverá la pelota al iniciar el juego
function obtener_numero_random() {
  let numero_random = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
  if (numero_random == 1) {
    return 1; 
  } else {
    return -1; 
  }
}