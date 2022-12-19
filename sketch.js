var particles = [];		
var faces = [];				

function preload() { 
	faces[0] = loadImage("media/L1.jpg");
	faces[1] = loadImage("media/L2.jpg");
	faces[2] = loadImage("media/I1.jpg");
  faces[3] = loadImage("media/I2.jpg");
	faces[4] = loadImage("media/I3.jpg");
	faces[5] = loadImage("media/I4.jpg");
	faces[6] = loadImage("media/I5.jpg");
  faces[7] = loadImage("media/I6.jpg");
  faces[8] = loadImage("media/I7.jpg");
  faces[9] = loadImage("media/G1.jpg");
  faces[10] = loadImage("media/G2.jpg");
  faces[11] = loadImage("media/G3.jpg");
  faces[12] = loadImage("media/G4.jpg");
  faces[13] = loadImage("media/G5.jpg");
  faces[14] = loadImage("media/G6.jpg");
  faces[15] = loadImage("media/H1.jpg");
  faces[16] = loadImage("media/H2.jpg");
  faces[17] = loadImage("media/H3.jpg");
  faces[18] = loadImage("media/T1.jpg");
  faces[19] = loadImage("media/T2.jpg");
  faces[20] = loadImage("media/T3.jpg");
  faces[21] = loadImage("media/T4.jpg");
  faces[22] = loadImage("media/T5.jpg");
}

function setup() { 
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('sketch-container');  
  imageMode(CENTER);
} 

function draw() { 
  background('#2b2b2e');
  
  // iterate over the array and display the objects
  for (var i = particles.length-1; i >= 0; i--) {
  	particles[i].show();
    
    // when the object moves out of the canvas, delete the object 
    // from the array
    if (particles[i].y > height) {
    	particles.splice(i,1);
    }
    
    // keep the number of particles on the canvas under 80 
    if (particles.length > 150) {
      particles.shift();
    }
  }
  
}

function mouseDragged() {
  // when mouse is dragged add a new object to the end of the array
  // the content of the object is an image randomly selected from the face[] array
	var newParticle = new Particle(faces[round(random(0,22))], mouseX, mouseY, random(5,80), random(1, 5));
	particles.push(newParticle);
}

// object declaration - constructor function
function Particle(t, x, y, si, sp) {
  this.content = t;
	this.x = x; 
  this.y = y;
  this.size = si;
  this.speed = sp;
}

// object methods
Particle.prototype = {
	constructor: Particle,
  
  // display the object
  show: function() {
    image(this.content, this.x, this.y, this.size, this.size);
  },
  
  // move the object downwards

  
  // move the object around its (x, y) position

}