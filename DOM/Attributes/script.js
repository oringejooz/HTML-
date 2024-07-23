/*
ATTRIBUTES

getAttribute(attr) To get attribut value
node -> attribute

setAttribute(attr,value) To se the attribute val

STYLE

node.style returns an inline style object
*/

let div = document.querySelector("#box");
console.log(div)
let id = div.getAttribute("id");
console.log(id)
let name = div.getAttribute("name")
console.log(name);

let para = document.querySelector(".para");
para.setAttribute("class","sentence");
console.log(para.getAttribute("class"));
 
div.style.backgroundColor = "pink"
div.style.fontSize = "26px"

document.querySelector("body").style.backgroundColor = "aliceblue"

function hide(){
    div.style.visibility = "hidden";
}

function show(){
    div.style.visibility = "visible";
}