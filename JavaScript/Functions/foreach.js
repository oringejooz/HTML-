function abc(){
    console.log("Hello");
}

// a callback function is a function passed as an argument to another function 

function myFunc(abc){
    return abc;
}
/*
ARRAY METHODS

arr.forEach(callBack function){

    console.log(val);
}
    Only for Arrays
    Higher Order Methods - doosre func ko as parameter lete hai ya return karte hain

MAP METHOD - similar to forEach works with each element of array
but returns a new array

arr.map(callBack(val,idx,arr))

let newArr = arr.map((val)=>{
    return val**2;
})

we can also use it normally

arr.map(callback(val){

    console.log(val);

})

FILTER METHOD - creates new array with filtered elements that give true acc to a condition

let newArr = arr.filter((val)=>{
    
        return val%2===0;
    
    })

REDUCE METHOD : Performs some operations and reduces the array to a single value and returns that value



*/



// arr.forEach((val)=>{
//     console.log(val);
// })

// let day = ["Monday","Tuesday","Thursday"];

// day.forEach((val,idx,arr)=>{
//     console.log(val.toUpperCase(),idx,arr);
// })

// let a = [2,4,6,8]

// a.forEach((val)=>{
//     console.log(val**2);
// })


let arr = [23,4,12,90,23,67];


//Accumulator is result and then current value is value

const sumArr = arr.reduce((res,curr)=>{
    return res + curr;
});

console.log(sumArr);

const largestVal = arr.reduce((prev,curr)=>{
    if(prev>curr){
        return prev;
    }else{
        return curr;
    }

});

console.log(largestVal);

