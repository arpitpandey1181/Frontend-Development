//SYNCHRONOUS

function main(x, y, operation){
   return operation(x, y);
}
const addition = main(10,20, function (a,b){
     return a+b;
});
console.log(addition)

const subtraction = (a,b) => a - b;
const subResult = main(15,10, subtraction);
console.log(subResult);

function multification (c,d){
   return c*d;
}
let intu = main(5,5,multification);
console.log(intu);

//ASYNCHRONOUS

function jsss (){
   setTimeout(() =>{
      console.log("hello");
   }, 3000);
}
