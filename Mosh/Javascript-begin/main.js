function snum(limit){
    let ans;
    if(typeof(limit)!=='number'){
        throw Error('Please enter a number');
    }
    for(let i=0;i<limit;i++){
        if(i%2===0){
            ans=console.log(i+" Even Number");
        }
        else{
            ans=console.log(i+" ODD Number");
        }
    }
}