// watch object - constructor function
function watch(){
    // private properties
    // for implementation details
    let startime=0;
    let endtime=0;
    let runtime = false; // 0
    // wil be display on the screen
    let duration = 0;
    // we need 3 button 
    this.start = function(){
        if(runtime){
            throw new Error("is running");
        }
        runtime = true; // true means 1
        startime = new Date();
    };
    this.stop = function(){
        if(!runtime){
            throw new Error("not running");
        } // the calculus logic
        runtime=false;
        endtime= new Date();
        const sec=(endtime-startime)/1000;
        duration+=sec;
    };
    this.reset=function(){
        startime = 0;
        endtime= 0;
        runtime=false;
        duration=0;
    };
    Object.defineProperty(this,'duration',{
        // a getter tos expose duration
        get:
        function(){
            return duration;
        }
    });
}

const stopwatch = new watch();
// you will do the action in the console
// The key here is the Date() function-object
// and the implementation of the calculus
// endtime et startime  = new Date()
// diviser par mille pour voyer li en seconde