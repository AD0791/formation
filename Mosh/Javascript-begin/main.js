try{
    const numbers  = [1,2,3,4,5,5,5566];
    const count = countOcc(null,5);
    console.log(count);
}
catch(e){
    console.log(e.message);
}
function countOcc(array,selem){
    if(!Array.isArray(array)){
        throw new Error('Bad Array son!');
    }
    return array.reduce((acc,curr)=>{
        const occ = (curr === selem)? 1:0;
        return occ+acc;
    },0);
}