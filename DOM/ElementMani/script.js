/*

INSERT ELEMENTS

Two step process : 1)Create element 2)Add Element

let element = document.createElement("div");

*/

//1)Create element

let newBtn = document.createElement("button");
newBtn.innerText = "Click me";

//2)Add Element

//node.append(element) adds at the end of node (inside)

let box = document.querySelector("div");

//box.append(newBtn);

//node.preppend(element) adds at the start of node (inside)

//box.prepend(newBtn);

//node.before(element) before the node outside
box.before(newBtn);
//node.after(element) after the node outside

// box.after(newBtn);


/*

DELETE ELEMENT

node.remove() //removes the node

*/

let heading = document.querySelector("h1");
heading.remove();


//appendChild
//removeChild