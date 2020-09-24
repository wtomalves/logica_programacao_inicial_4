
function mostraCarros(){
  pincel.drawImage(desenhoCarro1, xcarro1, ycarro1, carroComprimento, carroAltura)

  pincel.drawImage(desenhoCarro2, xcarro2, ycarro2, carroComprimento, carroAltura)

  pincel.drawImage(desenhoCarro3, xcarro3, ycarro3, carroComprimento, carroAltura)

  pincel.drawImage(desenhoCarro4, xcarro4, ycarro4, carroComprimento, carroAltura)

  pincel.drawImage(desenhoCarro5, xcarro5, ycarro5, carroComprimento, carroAltura)

  pincel.drawImage(desenhoCarro6, xcarro6, ycarro6, carroComprimento, carroAltura)
}

function movimentarCarro() {
  if (xcarro1 > 0) {
    xcarro1 -= velocidadeCarro1;;
  }else {
    xcarro1 = 500;
  }

  if (xcarro2 > 0) {
    xcarro2 -= velocidadeCarro2;
  } else {
    xcarro2 = 500;
  }

  if (xcarro3 > 0) {
    xcarro3 -= velocidadeCarro3;
  } else {
    xcarro3 = 500;
  }

  if (xcarro4 > 0) {
    xcarro4 -= velocidadeCarro4;
  } else {
    xcarro4 = 500;
  }

  if (xcarro5 > 0) {
    xcarro5 -= velocidadeCarro5;
  } else {
    xcarro5 = 500;
  }

  if (xcarro6> 0) {
    xcarro6 -= velocidadeCarro6;
  } else {
    xcarro6 = 500;
  }

  if ((xcarro1 <= 110 && xcarro1 >= 50) && yPersonagem > 20  && yPersonagem <= ycarro1 + 40){
    colide.play();
    yPersonagem = 365;
  }

  if ((xcarro2 <= 110 && xcarro2 >= 50) && yPersonagem > ycarro2 - 20  && yPersonagem <= ycarro2 + 40){
    colide.play();
    yPersonagem = 365;
  }

  if ((xcarro3 <= 110 && xcarro3 >= 50) && yPersonagem > ycarro3 - 20  && yPersonagem <= ycarro3 + 40){
    colide.play();
    yPersonagem = 365;
  }

  if ((xcarro4 <= 110 && xcarro4 >= 50) && yPersonagem > ycarro4 - 20  && yPersonagem <= ycarro4 + 40){
    colide.play();
    yPersonagem = 365;
  }

  if ((xcarro5 <= 110 && xcarro5 >= 50) && yPersonagem > ycarro5 - 20  && yPersonagem <= ycarro5 + 40){
    colide.play();
    yPersonagem = 365;
  }

  if ((xcarro6 <= 110 && xcarro6 >= 50) && yPersonagem > ycarro6 - 20  && yPersonagem <= ycarro6 + 40){
    colide.play();
    yPersonagem = 365;
  }

  if (yPersonagem <= 16) {
    pontos.play();
    meusPontos += 1;


    yPersonagem = 366
  } else if (yPersonagem == 365 && meusPontos > 0){
    meusPontos -= 1;
    yPersonagem = 366
  }

  return meusPontos;
}


let carroBateu = false;

//variavel carro1
let xcarro1 = 420;
let ycarro1 = 40;
let carroComprimento = 50;
let carroAltura = 40;
let velocidadeCarro1 = 3;
let desenhoCarro1 = document.querySelector('#carro1');
desenhoCarro1.onload = function (evento){
  pincel.drawImage(desenhoCarro1, xcarro1, ycarro1, carroComprimento, carroAltura);
}

//variável carro2
let xcarro2 = 500;
let ycarro2 = 96;
let velocidadeCarro2 = 5;
let desenhoCarro2 = document.querySelector('#carro2');
desenhoCarro1.onload = function (evento){
  pincel.drawImage(desenhoCarro2, xcarro2, ycarro2, carroComprimento, carroAltura);
}

//variável carro3
let xcarro3 = 500;
let ycarro3 = 150;
let velocidadeCarro3 = 2;
let desenhoCarro3 = document.querySelector('#carro3');
desenhoCarro1.onload = function (evento){
  pincel.drawImage(desenhoCarro3, xcarro3, ycarro3, carroComprimento, carroAltura);
}

//variável carro4
let xcarro4 = 500;
let ycarro4 = 210;
let velocidadeCarro4 = 3;
let desenhoCarro4 = document.querySelector('#carro2');
desenhoCarro1.onload = function (evento){
  pincel.drawImage(desenhoCarro4, xcarro4, ycarro4, carroComprimento, carroAltura);
}

//variável carro5
let xcarro5 = 500;
let ycarro5 = 270;
let velocidadeCarro5 = 3.8;
let desenhoCarro5 = document.querySelector('#carro3');
desenhoCarro1.onload = function (evento){
  pincel.drawImage(desenhoCarro5, xcarro5, ycarro5, carroComprimento, carroAltura);
}

//variável carro
let xcarro6 = 500;
let ycarro6 = 318;
let velocidadeCarro6 = 4;
let desenhoCarro6 = document.querySelector('#carro1');
desenhoCarro1.onload = function (evento){
  pincel.drawImage(desenhoCarro6, xcarro6, ycarro6, carroComprimento, carroAltura);
}


let meusPontos = 0;


