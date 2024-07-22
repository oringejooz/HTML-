/*

Array Methods

Types 
    That change the existing array
    Do not change the existing array but create a new one


    push() Add at end
    pop() - delete item from end and returns the deleted item
    toString() - converts to string
    arr.concat(a1,a2,...) - joins multiple arrays and returns result
    shift() - deleted from start and return
    unshift() - add to start
    slice(start,end)
    splice() - change original array (add,remove,replace)
    splice(start,delCount,newElement1,...)
    */

let food = ["pizza","laphing","chicken"];
console.log(food);
food.push("laddoo","khichdi");
console.log(food);

let delItem = food.pop();
console.log(food);
console.log(food.toString());
let a2 =[1,2,3];
console.log(food.concat(a2));
let a3 =["Sa","Re","Ga"];
console.log(food.concat(a2,a3));

a2.unshift('-1');
a2.shift()
a2.unshift(0)

let arr = [1,2,3,4,5,6,7,8]