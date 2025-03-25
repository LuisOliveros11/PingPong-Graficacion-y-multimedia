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
let marcadorJugador1 = 0;
let marcadorJugador2 = 0;

let juego_terminado = false;

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
  
  textSize(16);
  text('Jugador 1: ' + marcadorJugador1, 300, 50);
  text('Jugador 2: ' + marcadorJugador2, 400, 50);
  
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
     pelota.velocidadX += 0.5;
     pelota.velocidadY += 0.5;
  }
  if(pelota.y <= 0){
     pelota.direccionY = -pelota.direccionY;
     pelota.velocidadX += 0.5;
     pelota.velocidadY += 0.5;
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

  if(pelota.x <= 10){
    marcadorJugador2++;
    pelota.x = 400;
    pelota.y = 250;
    pelota.direccionX = obtener_numero_random();
    pelota.velocidadX = 1;
    pelota.velocidadY = 3;
  }
  
  if(pelota.x >= 790){
    marcadorJugador1++;
    pelota.x = 400;
    pelota.y = 250;
    pelota.direccionX = obtener_numero_random();
    pelota.velocidadX = 1;
    pelota.velocidadY = 3;
  }
  
    if (marcadorJugador1 >= 10) {
    textSize(32);
    fill("white");
    background("black"); 
    text("¡Jugador 1 Gana!", 300, 250);
    textSize(22);
    text("Presiona Enter para volver a jugar", 252, 330);
    noLoop();
    juego_terminado = true

  }

  if (marcadorJugador2 >= 10) {
   
    textSize(32);
    fill("white");
    background("black"); 
    text("¡Jugador 2 Gana!", 300, 250);
    textSize(22);
    text("Presiona Enter para volver a jugar", 252, 330);
    noLoop(); 
    juego_terminado = true;
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

function keyPressed() {
  if (keyCode === 13 && juego_terminado) {
    reiniciar_juego();
  }
}


function reiniciar_juego() {
  
   //Reiniciar variables
    marcadorJugador1 = 0;
    marcadorJugador2 = 0;
    pelota.x = 400;
    pelota.y = 250;
    pelota.velocidadX = 1;
    pelota.velocidadY = 3;
    pelota.direccionX = obtener_numero_random();
    pelota.direccionY = 1;
    
    //Reiniciar posiciones de los jugadores
    yJugador1 = 215;
    yJugador2 = 215;
    
    //Volver a iniciar el ciclo
    loop();
    juego_terminado = false;
}