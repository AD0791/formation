function Cercle(radius){
    this.radius = radius; 
    let dloc = {x:0, y:0}; // private property
    this.trace = function(){
        console.log("Constructors");
    };
    Object.defineProperty(this, "dloc",{
        get: function(){
            return dloc;
        }, //
        set: function(value){
            if(!value.x || !value.y){
                throw new Error("invalid location");
            }
            dloc = value;
        }
    }); 
}
const autre  =  new Cercle(2); 
autre.trace();
console.log(autre.radius);
console.log(autre.dloc); // we are accessing this private 
// private property with this getter
autre.dloc = 1; // we access and set the value externally
// with the setters
