function Cercle(radius){
    // instance members
    this.radius = radius;
    this.move = function(){
        console.log('Move like a beast');
    }
}

// you can create an object first 
// than define a prototype
const c1 = new Cercle(1);


//prototypes members
Cercle.prototype.draw = function(){
    console.log('draw');
};

