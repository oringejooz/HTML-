// name = "Tony Stark";
// x = null;
// price = 99.99;
// age = 24;
// y = undefined;
// isFollow = true;
// console.log(x);
// Js is Dynamically typed language

// let,const & var

// var : Variable can be re-declared & updated. A global scope variable
// let : Variable cannot be re-declared but can be updated. A block scope variable.
// const : Variable cannot re-declared or updated. A block scope variable.

let name = "Swarnima";
var price = 88.9;//2015 ES6 ECMA Script - let and const problem: Var can be re declared
console.log(name);

const age = 18;

let a;
console.log(a);//undefined

{
    let a = 5;
    console.log(a);
}
{
    let a =9;
    console.log(a);
}

