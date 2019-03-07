const f  = [{id:1},2,3];
const n  = [4,5,6];
// spread operator
const com = [...f, ...n];

console.log(com);

// useful to build url slugged
const joined = com.join('-');
console.log(joined);



// const mess = 'This is the work of the strings';
// const parts = mess.split('');
// // with spacing
// const parts1 = mess.split(' ');

// console.log(parts);
// console.log(parts1);