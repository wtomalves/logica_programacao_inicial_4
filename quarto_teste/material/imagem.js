function limparTela(){
  pincel.clearRect(0, 0, 500, 400);
}

function imagem(img, x, y, comprimento, altura){
  let desenho = document.querySelector('#' + img);
  desenho.onload = function (evento){
    pincel.drawImage(desenho, x, y, comprimento, altura);
  }
}

function telaDeFundo() {
  pincel.drawImage(desenhaFundo, xTela, yTela, telaComprimento, telaAltura);
  placar();
}

function placar() {
  pincel.fillStyle = 'transparent';
  pincel.fillRect(140, 5, 60, 25);
  pincel.fillStyle = 'white';
  pincel.fillText(meusPontos, 165, 26);
  pincel.font = '30px serif';
}

//variáveis tela de fundo
let xTela = 0;
let yTela = 0;
let telaComprimento = 500;
let telaAltura = 400;

let desenhaFundo = document.querySelector('#tela');
  desenhaFundo.onload = function (evento){
    pincel.drawImage(desenhaFundo, xTela, yTela, telaComprimento, telaAltura);
  }
