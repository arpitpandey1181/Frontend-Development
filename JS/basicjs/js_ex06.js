//FUNCTION :-
// function fun(){
//     console.log("Hello javaScript...!")
// }

// function fun1(msg){
//     console.log(msg);
// }
// fun1("hello");
// console.log(fun1());

// function fun2(a,b){
//     console.log(a + b);
// } 
// //fun2(5,9);
// console.log(fun2(5,9));

// function fun3(a,b) {
//     let sum = a+b;
//     return sum;
// }
// let x = fun3(5,3);
// console.log(x);

// ARROW FUNCTION :-

// let add = (x,y) => {
//      return x + y;
// } 
// console.log(add(10,20));

// let example = () => console.log("hello js.....");
// example();

// CALLBACK FUNCTION :-

// function ex1(){
//     console.log("hi,,,...")
// }
// function ex2(){
//     console.log("hiiiiiiiii")
// }
// function ex3(x,y,callback){
//     console.log(x + y);
//     callback();
// }
// ex3( 45,15,ex2);
// ex3(10,10,ex1);
// ex3(4,6,function(){
//     console.log("hello mini....:-")
// })

// let order = (pro) => {
//     console.log("Order is placed! Please start production\n");
//     pro();
// }
// let production = () => {
//     console.log("Order is recived!.. starting production\n");
//     serve();
// }
// let serve = () => {
//     console.log("Productioon done!.. Please server to costumer\n");
// }
// order(production);


var numbers = [1, 2, 3, 4, 5];
function main(x) {
    console.log("i'm in main function");
    numbers.forEach(x)
}
function fun() {
    console.log("hello");
}
 main(fun)

// MAP :-

// let arr =[2,3,4,5,6];
// let brr = arr.map(function(val){
//     return val*2;
// });
// console.log(brr);

// let brr2 = arr.map((val) => val*3);
// console.log(brr2);


// function ab(){
//     console.log("hello");
// }
// function abc(x,y,callback){
//     return x+y;
//     callback();
// }
// abc(10,20,ab);
// ///////////////////////
// function ab(x, y) {
//     return x + y;
// }

// function abc(x, y, callback) {
//     result = callback(x, y);
//     console.log(result);
// }

// abc(12, 20, ab);

// let order = (production) => {
//     console.log("Order is placed! Please start production\n");
//     production(serve);
// }

// let production = (serve) => {
//     console.log("Order is recived!.. starting production\n");
//     serve();
// }

// let serve = () => {
//     console.log("Productioon done!.. Please server to costumer\n");
// }

// // driver code
// order(production);