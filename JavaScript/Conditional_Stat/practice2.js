let score = prompt("Enter your score :");

if(score>=0 && score<=49){
    console.log("F");
    document.getElementById("result").innerHTML = "F";
}
else if(score>=50 && score<=59){
    console.log("D");
    document.getElementById("result").innerHTML = "D";
}
else if(score>=60 && score<=69){
    console.log("C");
    document.getElementById("result").innerHTML = "C";
}
else if(score>=70 && score<=89){
    console.log("B");
    document.getElementById("result").innerHTML = "B";
}
else if(score>=90 && score<=100){
    console.log("A");
    document.getElementById("result").innerHTML = "A";
}