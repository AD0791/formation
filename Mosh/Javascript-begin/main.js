// showaddress

// object literal
let address = {street:1, city:"P-au-P",zipcode:"ht6141"}
// factory
function addres(s,c,z){
    return{
        s,
        c,
        z
    };
}
const loc =  addres(2,"Jacmel","56045"); 
// constructor
function Addre(res,loca,zip){
    this.res = res,
    this.loca = loca,
    this.zip = zip
}
const lok = new Addre(3,'Cap-Haitien','0009');

// show addresss
function showAddress(ad){
    for(let k in ad){
        console.log(k,ad[k]);
    }
}

showAddress(address);
showAddress(loc);
showAddress(lok);