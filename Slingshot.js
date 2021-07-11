class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            length: 300
        }
          this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
   

    display(){
        var posA =  this.sling.bodyA.position
        var posB = this.sling.pointB
        stroke("black")
        strokeWeight(3)
        line(posA.x,posA.y,posB.x,posB.y)
                }
    }
    
 