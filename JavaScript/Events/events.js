/*

EVENT HANDLING IN JS

node.event = ()=>{
    //handle here
    }

let a=0

btn.onclick = ()=>{
    
    console.log("Button was clicked",a,"times");
    a++;
    }

    inline handle < Js Handles

*/

let btn = document.querySelector("#btn1");

let a=0

btn.onclick = ()=>{
    a++;
    console.log("Button was clicked",a,"times");
    
    }

let div = document.querySelector("div");

div.onmouseover = ()=>{
    console.log('in the box');
}

/*

Event Object is a special object that has details about the event : event type, target etc

All event handlers have access to the Event Object's Properties and methods

node.event =(e)=>{
    
    //Handle Here

    }

*/

let btn2 = document.querySelector("#btn2");

// btn2.ondblclick = (e)=>{
//     console.log(e);
//     console.log(e.clientX);
//     console.log(e.clientY);
//     console.log(e.target);
//     console.log(e.type);
//     // console.log("Double Click");
// }

btn2.addEventListener("dblclick",()=>{
    console.log("Double CLick - handler 1");
});

btn2.addEventListener("dblclick",()=>{
    console.log("Double CLick - handler 2");
});

btn2.addEventListener("dblclick",()=>{
    console.log("Double CLick - handler 3");
});
const handler4 = ()=>{
    console.log("Double CLick - handler 4");
};

btn2.addEventListener("dblclick",handler4);



btn2.removeEventListener("dblclick",()=>{
    console.log("Double CLick - handler 4");
}); //doesnt get removed cuz the arrow func above is stored differently in memory i.e it doesnt refer to the callback we wanna remove

btn2.removeEventListener("dblclick",handler4);

/*

EVENT LISTENERS

node.addEventListener(event,callback)
in this the callback is a function and it is also called the handler
cuz whenever the event occurs the callback function will be called

node.removeEventListener(event,callback)
*THe callback reference should be same to remove

*/

