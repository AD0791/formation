function mulsum(limit){
    let ans=0;
    for(let i = 0;i<=limit;i++){
        if(i%3===0||i%5===0){
            ans += i;
        }
    } // you must 
    return ans; // return the ans out of the loop 
}