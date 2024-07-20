// Data Types in JS
// Number String Boolean Undefined(default) Null BigInt Symbol - Primitive Data Types

// Primitive Data types(7)
// Non Primitive - Objects (Arrays,Functions)
//typeof <var_name>
/*
Object is a collection of values
key:value pairs

{
age : 24
name : 'Rahul'
}

*/

let st = 'Swarnima Bisht';
let x = BigInt("123");
let y = Symbol("Hi");

//Declaring an Object

const stud = {
    name :"Swarnima BIsht",
    age : 21,
    cgpa : 8.4,
    isPass : true
};//key : value, pairs

/* 
TO access keys
stud["name"], stud["age"],...
*/

console.log(stud["age"]);
console.log(stud.age);

stud.age = 22;
console.log(stud.age);

//Practice

const pen = {
    prod_n : "Parker Jotter Standard CT Ball Pen (Black)",
    rating : "5",
    offer : "0.5",
    price : "270",
    isDeal : true
};

console.log(pen);

