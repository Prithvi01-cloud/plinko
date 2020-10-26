var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
wall1 = new Ground(10,height/2,20,height)
wall2 = new Ground(width,height/2,20,height)
   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+20) 
    {
    
       plinkos.push(new Plinko(j,70));
    }

    for (var j = 50; j <=width-10; j=j+30) 
    {
    
       plinkos.push(new Plinko(j,90));
    }

     for (var j = 75; j <=width; j=j+40) 
    {
    
       plinkos.push(new Plinko(j,110));
    }

     for (var j = 50; j <=width-10; j=j+20) 
    {
    
       plinkos.push(new Plinko(j,130));
    }

    for (var j = 75; j <=width; j=j+30) 
    {
    
       plinkos.push(new Plinko(j,150));
    }

    for (var j = 50; j <=width-10; j=j+40) 
    {
    
       plinkos.push(new Plinko(j,170));
    }

     for (var j = 75; j <=width; j=j+20) 
    {
    
       plinkos.push(new Plinko(j,190));
    }

     for (var j = 50; j <=width-10; j=j+30) 
    {
    
       plinkos.push(new Plinko(j,210));
    }
    for (var j = 75; j <=width; j=j+20) 
    {
    
       plinkos.push(new Plinko(j,230));
    }

    for (var j = 50; j <=width-10; j=j+30) 
    {
    
       plinkos.push(new Plinko(j,250));
    }

     for (var j = 75; j <=width; j=j+40) 
    {
    
       plinkos.push(new Plinko(j,270));
    }

     for (var j = 50; j <=width-10; j=j+20) 
    {
    
       plinkos.push(new Plinko(j,290));
    }

    for (var j = 75; j <=width; j=j+30) 
    {
    
       plinkos.push(new Plinko(j,310));
    }

    for (var j = 50; j <=width-10; j=j+40) 
    {
    
       plinkos.push(new Plinko(j,330));
    }

     for (var j = 75; j <=width; j=j+20) 
    {
    
       plinkos.push(new Plinko(j,350));
    }

     for (var j = 50; j <=width-10; j=j+30) 
    {
    
       plinkos.push(new Plinko(j,370));
    }



    
}
 


function draw() {
  background("black");
  
  Engine.update(engine);
  ground.display();
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%10===0){
     particles.push(new Particle(random(width-(width-50),width ), 5,5));
     
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}