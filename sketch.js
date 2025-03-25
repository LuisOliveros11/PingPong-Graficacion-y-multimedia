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
let pelota_rebote = 0; 
let primer_rebote = false
let rebote_y_bandera = false

let pelota = {
    x: 400,
    y: 250,
    tamano: tamano_pelota,
    diametro: tamano_pelota / 2,
    velocidadX: 1,
    velocidadY: 1,
    direccionX: 1,
    direccionY: 1
  }

function setup() {
  createCanvas(ancho_canvas, largo_canvas);
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
  circle(pelota.x, pelota.y, pelota.tamano);
  console.log(pelota.diametro)
  
  //Controla el movimiento de arriba hacia abajo
  if(rebote_y_bandera == false) {
    pelota.y += direccionMovimiento;
    
    if(primer_rebote){
       pelota.x += pelota_rebote
        
    }
    if(pelota.y >= largo_canvas - pelota.diametro){
    rebote_y_bandera = true;
    pelota_rebote = obtener_numero_random()
    }
  }
  
  //Controla el movimiento vertical de abajo hacia arriba
    if(rebote_y_bandera){
      pelota.x += pelota_rebote;
      pelota.y -=direccionMovimiento;
      if(pelota.y <= pelota.diametro){
        rebote_y_bandera = false;
        primer_rebote = true;
      }
      
    }
  
  //Controla el movimiento de derecha a izquierda
  if(pelota.x <= pelota.diametro){
        if(pelota_rebote == -direccionMovimiento){
          pelota_rebote = direccionMovimiento;
        }
    }
  
  //Controla el movimiento de izquierda a derecha
  if(pelota.x >= ancho_canvas - pelota.diametro){
        if(pelota_rebote == direccionMovimiento){
          pelota_rebote = -direccionMovimiento;
        }
    }
  
  
  
}
  

function obtener_numero_random(){
  let x_random = 0;
  let numero_random = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
  if(numero_random == 1){
    x_random = 3;
  }else{
    x_random = -3;
  }
  return x_random;
}
