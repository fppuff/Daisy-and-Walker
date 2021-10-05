 let walker1
 let daisy = []

function setup(){
    createCanvas(600,600);
    background(0);
    walker1 = new Walker(0, 0); 
}

function draw () {   
    translate(width / 2, height / 2);
    walker1.update();
    walker1.show();   
    daisy[0] = new Daisy; 
    daisy[0].show();

    }
    
function mouseClicked() {
      daisy.push (new Daisy); 
      daisy.show()
      }
    

class Daisy{
      constructor(){
        // let v = createVector(random(-100,100), random(-100,100));
       v = p5.Vector.random2D();
       v.mult(random(100,150));
      }
      show(){
        line(0,0, this.v.x, this.v.y);
      }
    }

    class Walker{
        constructor(x,y){
            this.pos = createVector(x, y);
            this.vel = p5.Vector.random2D();
            this.vel.mult(random(3));
        }
        update(){
    
            this.pos.add(this.vel);
          //****(wrong syntex) */  this.pos = this.pos + this.vel;
    
            // this.pos.x = this.pos.x + this.vel.x; 
            // this.pos.y = this.pos.y + this.vel.y;
    
            // speed for game: How long can you stand it takes to finish the walk???? 
            // patience test
            // this.pos.x = this.pos.x + random(-2, 2); 
            // this.pos.y = this.pos.y + random(-2, 2);
        }
    
        show(){
            stroke(255,50);
            strokeWeight(1);
            fill(255, random(100));
            ellipse(this.pos.x, this.pos.y,6);
        }
    }