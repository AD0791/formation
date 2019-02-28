function showprime(limit){
    let ans;
    // 2 is first prime number
    for(let n=2;n<=limit;n++){ 
        let isprime = true;
        // 2 to current_number[n]
        for(let f=2;f<n;f++){
            if(n%f===0){
                isprime = false;
                break
            }
        } 
        if(isprime){
            ans = console.log(n);
        }      
    }
    return ans;
}

showprime(10);