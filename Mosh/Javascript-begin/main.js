// clean
function count(array,search){
    return array.reduce((acc,current)=>{
        const occ = (current === search)? 1:0;
        return acc + occ;
    },0);
}


const testarr = [1,2,5,4,6,5,4,23];
console.log(testarr);
const  test1 = count(testarr,4);
console.log(test1);