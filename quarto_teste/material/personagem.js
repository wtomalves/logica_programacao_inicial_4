
function mostraPersogem(){
  pincel.drawImage(desenhoVaca, xPersonagem, yPersonagem, personagemComprimento, personagemAltura);
}

function movimentarPersonagem(evento) {

  if (evento.keyCode == cima && yPersonagem >= 0) {
    yPersonagem -= 10;
  }

  if (evento.keyCode == baixo && yPersonagem <= 366) {
    yPersonagem += 10;
  }

}

//variável posição do personagem
let xPersonagem = 100;
let yPersonagem = 366;
let personagemComprimento = 20;
let personagemAltura = 20;

//variável do personagem
let desenhoVaca= document.querySelector('#ator');
  desenhoVaca.onload = function (evento){
    pincel.drawImage(desenhoVaca, xPersonagem, yPersonagem, personagemComprimento, personagemAltura);
  }

//variáveis para mover personagem
let cima = 38;
let baixo = 40;
