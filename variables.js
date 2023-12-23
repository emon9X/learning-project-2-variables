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
    // hoisting line 

    // console.log(a) /*Uncaught ReferenceError ReferenceError: a is not defined. a is not declared explicitly*/

    // var keyword 

    console.log(b);
    var b/*b is declared by var keyword and no value is assigned thus not initialized. this declaration is hoisted at the hoisted line(35). then variable b is initialized with a value which is undefined. This means var b is as same as var b = undefined*/

    console.log(bx);
    var bx = 'bomb'; /* only declaration part, var bx,  is hoisted not the value. so the output of the previous line is undefined*/

    var c = 1; /*c is declared and has assigned or initialized value */
    console.log(c);
    var c = 2; /*can be redeclared and reassigned*/
    console.log(c)

    // let keyword 

    let d = 'john doe';
    // let c = 0, d = 1; /*SyntaxError: Identifier 'c' has already been declaredcan't be redeclared. c and are declared before */
    {
        let c = 1, d = 2; /*this is permitted as c and are declared at another block */
        console.log(c, d)
    }

    let i; /* variable i is declared without initialization */
    i = 'iPhone'; /*i is initialized or assigned a value. JavaScript allows let keyword declared variable to assign value after declaration. */
    console.log(i);

    let j = 100;
    j = 200; /*for let keyword value can be reassigned */
    console.log(j);

    // console.log(e); /*Uncaught ReferenceError ReferenceError: Cannot access 'e' before initialization. Like var, let declarations are also hoisted. But unlike var, when hoisting,  let declarations are not initialized with undefined autamatically. */
    // let e /*variable e is declared after using it at the previous line. This line will be hoisted and result an error. */

    // console.log(f); /*Uncaught ReferenceError ReferenceError: Cannot access 'f' before initialization. */
    // let f = 'fuchka' /* like before it gives same error. Because only declararions are hoisted not initializations. It means it only takes let f not let f = 'fuchka'.*/

    g = 'nice';
    // let g = 'very nice'; /**this example is as same as the previous example though codes are very diiferent looking. */

    let h; /*here variable h is declared before using. Though h is not initialized by user/coder. So its default value is undefined or initialized undefined value. It is not like hoisting where variable is not initialized with undefined.*/
    console.log(h);

    // const keyword 

    // const z /*SyntaxError: Missing initializer in const declaration. variables declared by const keyword must be initialized/assigned value along with declaration */
    // console.log(z)

    const y = 'egypt';
    // y = 'banglades'; /*Uncaught TypeError TypeError: Assignment to constant variable. Variable declared with const keyword can't be reassigned */

    // console.log(x); /*Uncaught ReferenceError ReferenceError: Cannot access 'x' before initialization. */
    const x = 'beautiful'; /* like let, const declarations are also hoisted but not initialized. */
} 