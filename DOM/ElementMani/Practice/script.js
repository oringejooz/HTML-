let btn = document.createElement("button");
btn.innerText = "Click Me";
let body = document.querySelector("body");
body.append(btn);

btn.setAttribute("onclick","changeBg()")

function changeBg(){
    body.style.backgroundColor = "red";
    body.style.color = "white";
}