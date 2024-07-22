let text = document.querySelector("h2");
text.innerText = text.innerText +" from Apna College Students"


let divList = document.querySelectorAll(".box");
divList[0].innerText = "Hi Swar";
divList[1].innerText = "Hi Navya";
divList[2].innerText = "Hi Aari";

for(let val of divList){
    console.log(val.innerText);
    val.innerText = prompt("Enter unique Value");
}