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


// hoisting, declaring variables, assigning and re-assigning and initialization 

// block is created for convenience 
{
    // hoisted line 

    // console.log(a) /*Uncaught ReferenceError ReferenceError: a is not defined. a is not declared explicitly*/

    // var keyword 

    console.log(b);
    var b/*b is declared by var keyword. this declaration is hoisted at the hoisted line(35). then variable b is initialized with a value which is undefined. This means var b is as same as var b = undefined*/

    var c = 1;
    console.log(c);
    var c = 2; /*can be redeclared and reassigned*/
    console.log(c)

    // let keyword 

    let d = 'john doe';
    // let c = 0 /*can't be redeclared */
}