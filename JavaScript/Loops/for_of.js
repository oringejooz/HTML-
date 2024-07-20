/*
used for strings and arrays
for(let val of strVar){
    do some work
}

*/
let str = "ABC D E";
let size =0;
for(let i of str){
    console.log(i);
    size++;
}

console.log("String size =",size);