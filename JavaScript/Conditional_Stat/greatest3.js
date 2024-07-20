let a;let b; let c;
a = 26;
b =10;
c = 18;

// if(a>b){
//     if(a>c){
//         console.log(a,"is greatest");
//     }else{
//         console.log(c,"is greatest");
//     }
// }
// else {
//     if(b>c){
//         console.log(b,"is greatest");
//     }else{
//         console.log(c,"is greatest");
//     }
// }

if (a>b && a>c){
    console.log(a,"is greatest");
}

else if(b>a && b>c){
    console.log(b,"is greatest");
}

else{
    console.log(c,"is greatest");
}