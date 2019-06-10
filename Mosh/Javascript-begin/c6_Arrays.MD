# Javascript C.W.M: Chapter 6 (Arrays)

## Chapter 6 - Arrays

- adding new elements
- finding elements
- removing elements
- splitting arrays
- combining arrays

## Adding new elements

```javascript
const n = [3,4];

// end
n.push(5,6);
console.log(n);
// beginning
n.unshift(1,2);
console.log(n);
// middle
// the splice method is a bit tricky
// 3 args: start position, numbers of element
// to delete and then element to be added.
n.splice(2,0,`Array basics`);
console.log(n);

// in console
[Log] [3, 4, 5, 6] (4) (main.js, line 5)
[Log] [1, 2, 3, 4, 5, 6] (6) (main.js, line 8)
[Log] [1, 2, "Array basics", 3, 4, 5, 6] (7) (main.js, line 14)
```

> const keyword doesn't stop us from modifying the content of an array.

### Finding Elements

```javascript
const n = [3,4];
const N = [3,3,3,5,6,77,8,66,77];

// indexof
// return -1 if false
i = n.indexOf(6);
console.log(i);

j = n.indexOf(4);
console.log(j);

// latest index of
k = N.lastIndexOf(3);
l = N.lastIndexOf(77);

console.log(k);
console.log(l);

// How includes work
console.log(n.indexOf(1)!==-1);
// better way
console.log(n.includes(1));

// indexof has an interesting second args
// the 6 means that the search will start at the
// 6 index
console.log(N.indexOf(77,6));

// in console
[Log] -1 (main.js, line 7)
[Log] 1 (main.js, line 10)
[Log] 2 (main.js, line 16)
[Log] 8 (main.js, line 17)
[Log] false (main.js, line 20)
[Log] false (main.js, line 22)
[Log] 8 (main.js, line 27)
```

finding reference types

```javascript
const courses = [{id:1,name:"a"},{id:2,name:"b"}]
// The includes methods doesn't work


// find method
// 2 way for using callback function
// arrow function
const course = courses.find((c)=>{
    return c.name === 'a';
})

const course1 = courses.find(function(c){
    return c.id === 2;
})

// find index will return the index

const course2 = courses.findIndex((c)=>{
    return c.name === 'a';
})

const course3 = courses.findIndex(function(c){
    return c.id === 2;
})

console.log(course);
console.log(course1);
console.log(course2);
console.log(course3);
// in console
> course.includes({id:1,name:"a"})
< false

[Log] {id: 1, name: "a"} (main.js, line 26)
[Log] {id: 2, name: "b"} (main.js, line 27)
[Log] 0 (main.js, line 28)
[Log] 1 (main.js, line 29)
```

> [Finding Elements](https://www.google.com/search?client=firefox-b-d&q=array+find+javascript)

A function used as an argument of another function is called a predicat or callback function.

`c=>c.name==="a"` is the ultimate shorthand in this case.

### Removing Elements

```javascript
const n = [1,2,3,4,5];
const N = [1,2,3,45,65,657,78,78,798];
console.log(n);
// remove from the End
let a = n.pop();
console.log(a);
// remove from the beginning
let b = n.shift();
console.log(b);
// remove from the middle
// start index 2 remove 3 elements
console.log(N.splice(2,3));
// in console
[Log] [1, 2, 3, 4, 5] (5) (main.js, line 3)
[Log] 5 (main.js, line 6)
[Log] 1 (main.js, line 9)
[Log] [3, 45, 65] (3) (main.js, line 12)
```

Emptying an array:

we can reassign the variable to an empty array but there is a catch

```javascript
let n  = [1,2,3];
let o = n;

// reassignment
n = [];

// in console
> n
< [] (0)
> o
< [1, 2, 3] (3)
```

The garbage collector would normally erase the first array `[1,2,3]`. But the fact that we have another variable pointing to that object, it still will be in memory.

Les solutions:

```javascript
let n  = [1,2,3];
let o = n;

// pick one
// solution 2
n.length = 0;

// solution 3
n.slice(0,n.length);

// solution 4
while(n.length>0){
    n.pop();
}
// console
> o
< [] (0)
> n
< [] (0)
```

### Combining and Slicing Arrays

```javascript
const f  = [1,2,3];
const n  = [4,5,6];

const com = f.concat(n);

// a copy of an array .slice()
// slice - default value is start index 0
// and number to be deleted or return 0
const slice = com.slice();

const slice1 = com.slice(1);
const slice2 = com.slice(0,3);
const slice3 = com.slice(0,4);


console.log(com);
console.log(slice);
console.log(slice1);
console.log(slice2);
console.log(slice3);

// in console
[Log] [1, 2, 3, 4, 5, 6] (6) (main.js, line 16)
[Log] [1, 2, 3, 4, 5, 6] (6) (main.js, line 17)
[Log] [2, 3, 4, 5, 6] (5) (main.js, line 18)
[Log] [1, 2, 3] (3) (main.js, line 19)
[Log] [1, 2, 3, 4] (4) (main.js, line 20)
```

An object is copied by his reference

```javascript
const f  = [{id:1},2,3];
const n  = [4,5,6];

const com = f.concat(n);
const slice = com.slice();

console.log(com);
console.log(slice);

// a change
com[0].id = 100;


console.log(com);
console.log(slice);

// in console
[Log] [{id: 1}, 2, 3, 4, 5, 6] (6) (main.js, line 7)
[Log] [{id: 1}, 2, 3, 4, 5, 6] (6) (main.js, line 8)
[Log] [{id: 100}, 2, 3, 4, 5, 6] (6) (main.js, line 14)
[Log] [{id: 100}, 2, 3, 4, 5, 6] (6) (main.js, line 15)
```

the Spread operator

```javascript
const f  = [{id:1},2,3];
const n  = [4,5,6];
// spread operator
const com = [...f, ...n];

const copy = [...com];

console.log(com);
console.log(copy);
// in console
[Log] [{id: 1}, 2, 3, 4, 5, 6] (6) (main.js, line 8)
[Log] [{id: 1}, 2, 3, 4, 5, 6] (6) (main.js, line 9)
```

### Iterating an Array

Iterating in an array with a for-of loop.

```javascript
const f  = [{id:1},2,3];
const n  = [4,5,6];
// spread operator
const com = [...f, ...n];

// for of
for(let k of com){
    console.log(k);
}

// for each
com.forEach((m)=>{
    console.log(m);
});
// you can display the index
com.forEach((m,index)=>{
    console.log(index,m);
});

// for in way can gives you index
// almost like the for each method

// in console
[Log] {id: 1} (main.js, line 8)
[Log] 2 (main.js, line 8)
[Log] 3 (main.js, line 8)
[Log] 4 (main.js, line 8)
[Log] 5 (main.js, line 8)
[Log] 6 (main.js, line 8)
[Log] {id: 1} (main.js, line 13)
[Log] 2 (main.js, line 13)
[Log] 3 (main.js, line 13)
[Log] 4 (main.js, line 13)
[Log] 5 (main.js, line 13)
[Log] 6 (main.js, line 13)
[Log] 0 – {id: 1} (main.js, line 17)
[Log] 1 – 2 (main.js, line 17)
[Log] 2 – 3 (main.js, line 17)
[Log] 3 – 4 (main.js, line 17)
[Log] 4 – 5 (main.js, line 17)
[Log] 5 – 6 (main.js, line 17)
```

### Joining arrays

```javascript
const f  = [{id:1},2,3];
const n  = [4,5,6];
// spread operator
const com = [...f, ...n];

console.log(com);

// const joined = com.join(',');
// the string arg is optional
const joined = com.join();
console.log(joined);
// in console
[Log] [{id: 1}, 2, 3, 4, 5, 6] (6) (main.js, line 6)
[Log] [object Object],2,3,4,5,6 (main.js, line 11)
```

Split is use in the case of strings

```javascript
const mess = 'This is the work of the strings';
const parts = mess.split('');
// with spacing
const parts1 = mess.split(' ');

console.log(parts);
console.log(parts1);
//in console
// return an array
[Log] ["T", "h", "i", "s", " ", "i", "s", " ", "t", "h", …] (31) (main.js, line 18)
[Log] ["This", "is", "the", "work", "of", "the", "strings"] (7) (main.js, line 19)
```

```javascript
const f  = [{id:1},2,3];
const n  = [4,5,6];
// spread operator
const com = [...f, ...n];

console.log(com);

// const joined = com.join(',');
// the string arg is optional
const joined = com.join('-');
console.log(joined);
// in console
[Log] [{id: 1}, 2, 3, 4, 5, 6] (6) (main.js, line 6)
[Log] [object Object]-2-3-4-5-6 (main.js, line 11)
```

### Sorting arrays

```javascript
const f  = [{id:1},2,3];
const n  = [4,5,6];
// spread operator
const com = [...f, ...n];
console.log(com);
// sort an array
// send the first at the last
com.sort()
console.log(com);
// revert an array
// change the complete order
com.reverse();
console.log(com);

//in console
[Log] [{id: 1}, 2, 3, 4, 5, 6] (6) (main.js, line 5)
[Log] [2, 3, 4, 5, 6, {id: 1}] (6) (main.js, line 9)
[Log] [{id: 1}, 6, 5, 4, 3, 2] (6) (main.js, line 13)
```

with Objects:

```javascript
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
// in console
[Log] [{id: 1, name: "Node"}, {id: 2, name: "Java"}] (2) (main.js, line 3)
[Log] [{id: 2, name: "Java"}, {id: 1, name: "Node"}] (2) (main.js, line 11)
```

> [ascii](http://www.asciitable.com/)

In this code if we used a lowercase `'java'`, we won't see the change because of the position of uppercase N versus lowercase j on the ascii table.

### Testing the elements of an Array

```javascript
const n  = [-1,-2,-3,-4,-5,-6,-67,7];
const p = [5,-10];

// every() will check every element
// all the element are required to pass the test.
const atLeast = p.every(value=>{
    return value>=0;
});

// some()
// at least one element is supposed to past the
// test
const aOne = n.some(value=>{
    return value>=0;
});

console.log(atLeast);
console.log(aOne);

// in console
[Log] false (main.js, line 17)
[Log] true (main.js, line 18)
```

### Filtering an array

```javascript
const n  = [1,-2,3,-4,5,6,-67,7];

const f = n.filter(value=>{
    return value>=0;
});

console.log(f);

// in console
[Log] [1, 3, 5, 6, 7] (5) (main.js, line 7)
```

### Mapping an Array

```javascript
const n  = [1,-2,3,-4,5,6,-67,7];
const items = n.map(value=>{
    return '<li>'+value+'</li>';
});
const html = '<ul>'+items.join('')+'</ul>';
console.log(html);
// in console
[Log] <ul><li>1</li><li>-2</li><li>3</li><li>-4</li><li>5</li><li>6</li><li>-67</li><li>7</li></ul> (main.js, line 6)
```

Map to objects

`value => ({value});`

```javascript
const n  = [1,-2,3,-4,5,6,-67,7];
const items = n.map(value=>{
    return {value};
});

console.log(items);
// in console
[Log] [{value: 1}, {value: -2}, {value: 3}, {value: -4}, {value: 5}, {value: 6}, {value: -67}, {value: 7}] (8) (main.js, line 6)
```

> Chaining

```javascript
const var = k.methdod().method2();
// or By convention
const var = k
    .methdod()
    .method2();
```

```javascript
const n  = [1,-2,3,-4,5,6,-67,7];
const items = n
    .map(value=>{
        return {value};
    })
    .filter(obj =>{
        return obj.value>1;
    }
);

console.log(items);
// in console
[Log] [{value: 3}, {value: 5}, {value: 6}, {value: 7}] (4) (main.js, line 11)
```

We chained the mapping method with a filter method because the mapping outputed an array.

### Reducing an array

```javascript
const num  = [1,-2,3,-4,5,6,67,7];

let s = 0;
for(let n of num){
     s+=n;
}
console.log(s);

// second argument set to 0
// but it won't affect the actual calculation
// a= 0, b = 1 => a = 1
// a = 1, b = -2 => a = -1
// without the 0
// a = 1 the begining of the array directly
let ac = num.reduce((past,next)=>{
    return past+next;
},0);
console.log(ac);
// In console
[Log] 83 (main.js, line 7)
[Log] 83 (main.js, line 18)
```

## Exercise - chapter 6

1. Array from Range

```javascript
function arrRange(min,max){
    const arr = [];
    for(let k = min; k<=max;k++){
       arr.push(k);
    }
    return arr;
}

const numbers = arrRange(-1,10);
console.log(numbers);
// in console
> arrRange(-1,10)
< [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, …] (12)
> arrRange(0,10)
< [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, …] (11)
> arrRange(0,100)
< [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, …] (101)
```

2. Make Own Includes

```javascript
function incluD(array,tosearch){
    for(let i of array){
        if(i === tosearch){
            return true;
        }
        else{
            return false;
        }
    }
}

const testarr = [1,2,4,5,4,5,6,6,5,4,23];
const  test1 = incluD(testarr,22);
console.log(test1);

// in console
[Log] false (main.js, line 14)
```

3. Except

```javascript
function except(array,torem){
    const output = [];
    for(let el of array){
        if(!torem.includes(el)){
            output.push(el);
        }
    }
    return output;
}

const testarr = [1,2,4,5,4,5,6,6,5,4,23];
const  test1 = except(testarr,[23,5,2]);
console.log(test1);

// in console
[Log] [1, 4, 4, 6, 6, 4] (6) (main.js, line 13)
```

4. Moving an Element

```javascript
function move(array,index,offset){
    const position = index+offset;
    if(position>array.length || position<0){
        console.error('Invalid offset.');
        return;
        // the rest of the function won't be execute
    }
    const output = [...array];
    // delete
    const element = output.splice(index,1)[0];
    // addd
    output.splice(position,0,element);
    return output;
}

const testarr = [1,2,5,4,6,5,4,23];
console.log(testarr);
const  test1 = move(testarr,1,1);
console.log(test1);

// in console
[Log] [1, 2, 5, 4, 6, 5, 4, 23] (8) (main.js, line 15)
[Log] [1, 5, 2, 4, 6, 5, 4, 23] (8) (main.js, line 17)
```

5. Count Occurences

```javascript
// basic
function count(array,search){
    let count =0;
    for(let k of array){
        if(k === search){
            count++
        }
    }
    return count;
}

const testarr = [1,2,5,4,6,5,4,23];
console.log(testarr);
const  test1 = count(testarr,4);
console.log(test1);

// inconsole
[Log] [1, 2, 5, 4, 6, 5, 4, 23] (8) (main.js, line 13)
[Log] 2 (main.js, line 15)
```

```javascript
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

// in console
[Log] [1, 2, 5, 4, 6, 5, 4, 23] (8) (main.js, line 18)
[Log] 2 (main.js, line 20)
```

6. Get max

```javascript
// old school way
function getmax(array){
    if(array.length ===0){
        return undefined;
    }
    let ans = 0;
    for(let i = 0;i<array.length;i++){
        if(array[i]<array[i+1]){
            ans = array[i+1];
        }
        if(array[i]!==0){
            ans = array[i];
        }
    }
    return ans;
}



const testarr = [1,2,5,4,6,5,4,23,300,-100];
console.log(testarr);
const  test1 = getmax(testarr);
console.log(test1);

// in console
[Log] [1, 2, 5, 4, 6, 5, 4, 23, 300, -100] (10) (main.js, line 14)
[Log] 300 (main.js, line 16)
// case testarr = []
[Log] [] (0) (main.js, line 17)
[Log] undefined (main.js, line 19)
```

```javascript
// mosh
function getmax(arr) {
  if (arr.length === 0) {
    return undefine;
  }
  let max = arr[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i + 1];
    }
  }
  return max;
}
// clean
function getmax(array) {
  if (array.length === 0) {
    return undefined;
  }
  return array.reduce((a, c) => (a > c ? a : c));
}
```

7. Movies

- all the movie in 2018 with rating > 4
- sort them by their rating
- descending order
- pick their title

```javascript
const movies = [
    {titre:'a',year:2018,rating:4.5},
    {titre:'b',year:2018,rating:4.7},
    {titre:'c',year:2018,rating:3},
    {titre:'d',year:2017,rating:4.5}
];
console.log(movies);

const  film = movies
    .filter(m=>m.year===2018&&m.rating>=4)
    .sort((a,b)=>a.rating-b.rating)
    .reverse()
    .map(m=>m.titre);
console.log(film);
// in console
[Log] [{titre: "a", year: 2018, rating: 4.5}, {titre: "b", year: 2018, rating: 4.7}, {titre: "c", year: 2018, rating: 3}, {titre: "d", year: 2017, rating: 4.5}] (4) (main.js, line 7)
[Log] ["b", "a"] (2) (main.js, line 14)
```
