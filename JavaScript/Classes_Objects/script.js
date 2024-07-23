/*

Prototypes in Js

A JavaScript Obj is an entity having state and behaviour(properties and methods)

Js objects have a special property called prototype

*/
//student Object
const student = {
    id : 12345,
    name : "Swar",
    gender : "Female",
    printDetails : function(){
        console.log(`Name : ${this.name}\nID : ${this.id}\nGender : ${this.gender}`);
    },
};