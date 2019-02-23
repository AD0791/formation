let person = {name: "Alexandro"};
Object.defineProperty(person,'name',{
    writable:false,
    enumerable:false,
    configurable: false
});

delete person.name; 
console.log(person);
