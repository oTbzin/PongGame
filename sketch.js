//configracoes da bolinha
let xBolinha = 300
let yBolinha = 200 
let diametro = 25
let raio = diametro / 2

//velocidade da bolinha
let velocidadeXBolinha = 5
let velocidadeYBolinha = 5

//variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let comprimentoRaquete = 10;
let alturaRaquete = 90;

//variaveis da raquete do oponente 
let xRaquete2 = 585
let yRaquete2 = 150
let velocidadeyRaquete2; 
let comprimentoRaquete2 = 10;
let alturaRaquete2 = 90;


//sons do jogo
let trilha;
let raquetada;
let ponto;


let colidiu = false

//placar
let MeusPontos = 0;
let PontosOponente = 0;


let chanceDeErrar = 0;

function preload(){
  trilha = loadSound("wiu.mp3");
  ponto = loadSound("ponto.mp3");
  raquete = loadSound("raquetada.mp3");
}

//tamanho do palco
function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
 mostrarBolinha () ;
 movimentoBolinha () ;
 minhaRaquete (xRaquete, yRaquete) ;
 raqueteoponente () ;
 colisaoBolinha () ;
 movimentoMinhaRaquete () ;
 movimentoRaqueteOponente (xRaquete2, yRaquete2) ;
 //colisaoRaquete() ;
 VerificaColisaoRaquete(xRaquete, yRaquete) ;
 VerificaColisaoRaquete (xRaquete2, yRaquete2) ;
 IncluiPlacar ();
 MarcaPonto ();
 bolinhaNaoFicaPresa();
}
  
  function mostrarBolinha(){
  circle(xBolinha, yBolinha, diametro)
  }
  
  function movimentoBolinha(){
  xBolinha += velocidadeXBolinha
  yBolinha += velocidadeYBolinha
 
  }
 
  function minhaRaquete(){
  rect(xRaquete, yRaquete, comprimentoRaquete, alturaRaquete)
  
  }
  
 function raqueteoponente(){
  rect( xRaquete2, yRaquete2, comprimentoRaquete, alturaRaquete)
   
 }
 
  function colisaoBolinha (){
  if (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1; 
 } 
  }
  
  function movimentoMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10}
  
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10}
    
    yRaquete = constrain(yRaquete, 10, 310);
  }
    
  function colisaoRaquete (){
  if (xBolinha - raio < xRaquete + comprimentoRaquete && yBolinha - raio < yRaquete + alturaRaquete && yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
    raquete.play ();
  }
  }
 
 function movimentoRaqueteOponente(x, y){
    velocidadeyRaquete2 = yBolinha - yRaquete2 - comprimentoRaquete / 2 - 70;
    yRaquete2 += velocidadeyRaquete2 + chanceDeErrar
   calculaChanceDeErrar()
   
    yRaquete2 = constrain(yRaquete2, 10, 350);
 }

function VerificaColisaoRaquete (x, y) {
  colidiu =
  collideRectCircle(x, y, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raio)
  
  if(colidiu){
    velocidadeXBolinha *= -1
    raquete.play();
  }
}

function colisaoRaqueteOponenteBiblioteca () {
  colidiu =
  collideRectCircle(xRaquete2, yRaquete2, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raio)
  
  if(colidiu){
    velocidadeXBolinha *= -1;
    raquete.play();
  }
}


function IncluiPlacar(){
  stroke(255);
  textSize(16);
  textAlign(CENTER);
  fill(color(255,0,0));
  rect(150, 10, 40, 20);
  fill(255);
  text(MeusPontos, 170, 26);
  fill(color(255,0,0))
  rect(420, 10, 40, 20);
  fill(255);
  text(PontosOponente, 440, 26);
}


function MarcaPonto(){
  if (xBolinha + raio > 598){
    MeusPontos += 1;
    ponto.play();
     }
  
  
  if (xBolinha - raio < 2){
    PontosOponente += 1;
    ponto.play();
  }
}

function calculaChanceDeErrar() {
  if (PontosOponente >= MeusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}


function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    xBolinha = 23
    }
}

 