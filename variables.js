// how to automatically declare a variable 
// x; /* as it is not declared explicitly by var or let or const keyword, it will give an error(x is not defined)*/
// y; /* as it is not declared explicitly by var or let or const keyword, it will give an error(y is not defined)*/
// z; /* as it is not declared explicitly by var or let or const keyword, it will give an error(z is not defined)*/
x = 5; /*here x is not declared explicitly, assigned value and used. As it is used, it is declared by javascript automatically*/
y = 6; /*here y is not declared explicitly, assigned value and used. As it is used, it is declared by javascript automatically*/
z = x + y; /*here z is not declared explicitly, assigned value and used. As it is used, it is declared by javascript automatically*/
console.log(x, y, z)
// ------------------------------------------------------------------------

// global scope and block scope 

const name = 'emon';  /*global scope variable*/
let age = 28; /*global scope variable*/
var hobby = 'gardening'; /*global scope variable*/

{
    console.log(name, age, hobby) /*global scope variable can be accessed from a block*/
    var weight = 72; /*global scope variable. var is not block scoped*/
    let hair = 'black'; /*block scope variable*/
    const university = 'ruet'; /*block scope variable*/
}

console.log(weight); /*gives the value as it is a global scope variable*/
// console.log(hair); /*gives ReferenceError*/ 
// console.log(university); /*gives ReferenceError*/
// -------------------------------------------------------------------------


