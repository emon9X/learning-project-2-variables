function automaticVariableDeclaration() {
    x = 5; /*here x is not declared explicitly but assigned value*/
    y = 6; /*here y is not declared explicitly but assigned value*/
    z = x + y; /*here z is not declared explicitly but assigned value*/
    console.log(x, y, z) /*here the variables are declared automatically as they are first used*/
    document.getElementById("auto").innerHTML =  "The vaue of z is: " +z;
}