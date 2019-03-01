function showprime(limit){
    let ans;
    // 2 is first prime number
    for(let n=2;n<=limit;n++){ 
        if(isprime(n)){
            ans = console.log(n);
        }      
    }
    return ans;
}

function isprime(n){
    // 2 to current_number[n]
    for(let f=2;f<n;f++){
        if(n%f===0){
            return false;
        }
    }
    return true; 
}


showprime(10);

