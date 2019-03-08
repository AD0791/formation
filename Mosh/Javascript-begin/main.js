const courses = [{id:1,name:'Node'},{id:2,
    name:'Java'}];
console.log(courses);

courses.sort((a,b)=>{
    const A = a.name.toUpperCase();
    const B = b.name.toUpperCase();
    if(A<B){return -1;};
    if(A>B){return 1;};
    return 0;    
});

console.log(courses);