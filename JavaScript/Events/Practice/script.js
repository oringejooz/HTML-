let body = document.querySelector("body");
let toggle = document.createElement("button");
toggle.innerHTML = "Toggle Screen Mode";

body.prepend(toggle);

let mode = "light";

// toggle.addEventListener("click",()=>{
//     numclick++;
// })

// toggle.addEventListener("click",()=>{
//     if(numclick%2!==0){
//         body.style.backgroundColor = "greyblack";
//     }

//     else{
//         body.style.backgroundColor = "white";
//     }
// })

// body.style.backgroundColor = "greyblack";

toggle.addEventListener("click",()=>{
        console.log("You are changing mode");
});


toggle.addEventListener("click",()=>{
    if(mode === "light"){
        mode = "dark";
        body.style.backgroundColor = "rgb(60,60,60)";
    }
    else{
        mode="light";
        body.style.backgroundColor = "white";
    }
    console.log(mode);
})



