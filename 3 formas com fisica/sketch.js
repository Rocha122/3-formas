
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world
var bola , chao;
var retangulo
var quadrado



function setup() {
createCanvas (400,400)

engine = Engine.create();
world = engine.world;
chao_opcoes = {
    isStatic:true
   }
   bola_options ={
       restitution:0.5
   }
   
bola = Bodies.circle(220,10,20, bola_options)
World.add(world, bola)

chao = Bodies.rectangle(200,200,400,10, chao_opcoes)
World.add(world, chao)

retangulo_options ={

    restitution: 1
  
}
retangulo = Bodies.rectangle(110,50,10,10, retangulo_options)
World.add(world, retangulo)

quadrado_options ={

    restitution: 1.3
}

quadrado = Bodies.rectangle(300,50,30,30, quadrado_options)
World.add(world, quadrado)




}

function draw() 

{
background("black")  
Engine.update(engine)
ellipseMode(RADIUS)
rectMode(CENTER)
ellipse(bola.position.x, bola.position.y, 20)
rect(chao.position.x , chao.position.y, 400,10 )
rect (retangulo.position.x , retangulo.position.y, 100,20)
rect (retangulo.position.x , retangulo.position.y, 100,20)
rect (quadrado.position.x , quadrado.position.y, 30,30)
}

