/*

Array in Js is a collection of items
in Js Arrays can have diff data types
Linear
Mutable
*/


let marks = [22,45,67,53,90,78];
console.log(marks);//type is object
marks[2]=88;

for(let val in marks){
    console.log(marks[val]);
}
console.log("\n");
for(let val of marks){
    console.log(val);
}
console.log("\n");
let sum=0;
for(let i=0;i<marks.length;i++){
    sum+=marks[i];
}

console.log("\nAverage Marks:",sum/marks.length);

let prices = [250,645,300,900,50];
console.log(prices);


for(let val in prices){
    prices[val]-=0.1*prices[val];
}
console.log(prices);