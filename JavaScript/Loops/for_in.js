/*

Used for Objects

for(let key in objVar){
    //do some work
}

*/

const class_ = {
    name : "ABC",
    age : 23,
    gender : 'F'
};

for(let key in class_){
    console.log(key,"=",class_[key]);
}