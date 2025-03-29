//used https://www.youtube.com/watch?v=h33Srr5J9nY&t

//SPECIAL interactions with scopes and this.(whatever), scopes get redefined to where you call the function from if NOT using arrows
//e.g if you have a person object: arrowFunction this.name is in the object scope, normalFunction is in the global scope. 
function sum(a, b) {
    return a+b;
}
//ARROW FUNCTIONED
//removed function keyword b/c assumed, variable = inputs => {logic; return;}
let sum2 = (a, b) => {
    return a + b;
}
// b/c there are no brackets, everything after the arrow is assumed to be returned 
let sum3 = (a, b) => a + b
console.log(sum2(1,1))


function isPositive(n){
    return n >= 0;
}

let isPositive2 = (n) => {
    return n >= 0;
}
//no parentheses is allowed for SINGLE parameters
let isPositive3 = n => n >= 0;

console.log(isPositive2(1));


function randNum() {
    return Math.random;
}
//no params just leave as ()
let randNum2 = () => Math.random;


document.addEventListener("click", function() {
    console.log('click');
})
//all we do is get rid of function and add the arrow
document.addEventListener("click", () => {
    console.log('click');
})