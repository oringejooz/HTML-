/* 

A window object represents an open window in a browser. It is browser's object not
JavaScript's and is automatically created by the browser

it is a global object with lots of properties and methods

*/
// console.log(window);

// console.log("Hello");
// window.console.log("Hello");

// alert("Window Object");
// window.alert("Hi")
// console.dir(window.document) //Prints methods and properties of special objects (DOM Objects)
// console.log(window.document);//Prints the html code 
// console.dir(document.body)
// console.log(document.body)
//console.dir(document.body.childNodes[1])

/*
    DOM Manipulation - access or select elements

    Selecting with ID

    document.getElementById
 */

    // document.getElementById("heading").style.color = "pink";

let heading = document.getElementById("heading");
console.dir(heading);

/*

getElementsByClassName - Selecting helements by class
returns an HTML Collection which is similar to an array
*/

let headings = document.getElementsByClassName("head");
console.log(headings);
console.dir(headings);

let button = document.getElementById("btn");
console.dir(button)
console.log(button)

// Selecting with Tag
// document.getElementsByTagName("p")

let para = document.getElementsByTagName("p");
console.dir(para)
console.log(para)

/*

QUERY SELECTOR

document.querySelector("myId/myClass/Tag")
//returns the first element

document.querySelectorAll("myId/myClass/tag")
//returns a node list

querySelector detects the type of element we want on their own

 */

let firstElement = document.querySelector("p");
console.dir(firstElement);

let Element = document.querySelectorAll("p");
console.dir(Element);

let firstClass = document.querySelector(".head");
console.dir(firstClass);

let classes = document.querySelectorAll(".head");
console.dir(classes);

let idSelect = document.querySelector("#btn")
console.dir(idSelect)
