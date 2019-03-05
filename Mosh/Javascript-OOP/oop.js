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
        // we change the runtime state so the error
        // will be catch
        runtime = true; // true means 1
        startime = new Date(); // time object
    };
    this.stop = function(){
        if(!runtime){
            throw new Error("not running");
        } ///// the calculus logic
        runtime=false; 
        // the state of the run is changed so the error
        // will be catch
        endtime= new Date(); //time object
        // Date() object has getTime() method
        // getTime() return time in millisecondes without a comma
        const sec=(endtime.getTime()-startime.getTime())/1000;
        duration+=sec;
    };
    this.reset=function(){
        startime = 0;
        endtime= 0;
        runtime=false;
        duration=0;
    };
    Object.defineProperty(this,'duration',{
        // a getter to expose duration
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