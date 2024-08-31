//ARRAY
let arr = ["html","css","java","js"];
// console.log(arr);
// console.log(arr.length);
// console.log(arr[2]);

 let arr1 =[5,10,15,20,25,30];
// console.log(arr1);

// let arr2 = new Array(3);
// arr2[0] = 20;
// arr2[1] = 30;
// arr2[2] =70;
// console.log(arr2);
// arr2[2] = 50;
// console.log(arr2);

// LOOPING IN ARRAY:-

// for(let brr of arr){
//     console.log(brr);
// }

// let sum = 0;
// for( let brr of arr1){
//     sum += brr;
// }
// console.log(sum);
// console.log(sum/arr1.length);

//ARRAY METHODS:-
console.log(arr1);
arr1.push(101,102);
console.log("push methods :- ",arr1);

arr1.pop();
console.log("pop ",arr1);

console.log(arr);
arr.toString();
console.log("toStringn:- ",arr );

let brr = ["cpp","c"];
console.log("concat :- ",arr.concat(brr));

console.log("unshift :- ",arr1.unshift(1,2));
console.log(arr1);
console.log("shift :- ",arr1.shift());
console.log(arr1);

console.log("slice:-",arr1.slice(2,4));

let ar =[1,2,3,4,5,6,7,8,9];
ar.splice(2,1,101);
console.log("splice:- ",ar.splice(2,1,101));
console.log(ar);
