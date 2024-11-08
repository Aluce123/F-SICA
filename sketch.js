const Motor = Matter.Engine; //cria o motor do mundo
const Mundo = Matter.World; // cria o mundo
const Corpos= Matter.Bodies; // cria os corpos
const Corpo = Matter.Body;  // cria as caracteristicas dos corpos

var motor;
var mundo;
var bola;
var chao;
var pedra
var pena
var tenis

var bolinhas= [];
var limitedebolinhas= 200;

function setup() {
  createCanvas(600,600);

motor = Motor.create();
mundo = motor.world;

 //matriz// var alunos = ["Alice", "Bruna", "Maria", "Bianca"]
// console.log(alunos[1])
//console.log(alunos)
//alunos.push("gato") // adicionar um ultimo valor
//console.log(alunos)
// alunos.pop() // retirar o ultimo valor
//console.log(alunos)

// motor.world.gravity.y=1;

var opcoes_chao={
    isStatic: true
}

var opcoes_bola={
    restitution:1.2,
    frictionAir: 0
}

var opcoes_pedra={
    restitution:0.2,
    frictionAir: 0,
    isStatic:false
}

var opcoes_pena={
    restitution:0.1,
    frictionAir: 0.1,
}

var opcoes_tenis={
    restitution:0.9,
    frictionAir: 0
}

// uma pedra, uma pena, uma bola de tenis

bola = Corpos.circle(200, 10, 40, opcoes_bola);
Mundo.add(mundo, bola);

chao= Corpos.rectangle(300, 580, 800, 20, opcoes_chao)
Mundo.add(mundo, chao);


pena = Corpos.circle(350, 10, 40, opcoes_pena);
Mundo.add(mundo, pena);


pedra = Corpos.rectangle(200, 20, 40, 20, opcoes_pedra);
Mundo.add(mundo, pedra);


tenis = Corpos.circle(200, 10, 40, opcoes_tenis);
Mundo.add(mundo, tenis);


for(var j=0; j<limitedebolinhas;j++ )// 3 parametros: inicio, meio, incremento
adicionarBolinhas()



rectMode(CENTER)
ellipseMode(RADIUS)
}

function draw() {
  background("black")
  Motor.update(motor)

  fill("yellow");
ellipse(bola.position.x, bola.position.y, 40);

fill("brown")
rect(chao.position.x, chao.position.y, 800,20)

fill("gray");
rect(500, pedra.position.y, 35,20);

fill("orange")
ellipse(pena.position.x, pena.position.y, 40)

fill("white");
ellipse(tenis.position.x, tenis.position.y, 20,20);

for(var j=0; j<bolinhas.length;j++){
    var bolinha = bolinhas[j]; // precisa exibir cada objeto um por um, ent preciso criar uma variavel que vai receber a bolinha J, que é o indice, de inicio vale 0, mas vai incrementar 1 ate 100, criando um indice "Novo"
fill(random(5, 255), random(5, 255), random(5, 255))
    ellipse(bolinha.position.x, bolinha.position.y, bolinha.circleRadius);

}


if(keyIsDown(LEFT_ARROW)){
Corpo.applyForce(bola, {x:bola.position.x, y:bola.position.y}, {x:-0.005, y:0})

}

if (keyIsDown(RIGHT_ARROW)) {
    Matter.Body.applyForce(bola, { x: bola.position.x, y: bola.position.y }, { x: 0.005, y: 0 });
  
    
    }

    
    if (keyIsDown(UP_ARROW)) {
        Matter.Body.applyForce(bola, { x: bola.position.x, y: bola.position.y }, { x: 0, y: -0.009 });
    
    }

    if (keyIsDown(DOWN_ARROW)) {
        Matter.Body.applyForce(bola, { x: bola.position.x, y: bola.position.y }, { x: 0, y: 0.009 });
      }
    
// cria controle, readme e atualizar github

}

function adicionarBolinhas(){
  var opcoes_bolinhas={
    restitution: random(0.5, 1), // elasticidade
    frictionAir: random(0.01,0.1),//cair mais rapido ou devagar
  }

var bolinha = Corpos.circle(random(50,350), random(50,350), random(5,20), opcoes_bolinhas)
Mundo.add(mundo, bolinha);
bolinhas.push(bolinha);







}
