//STRING :-

let str = "hello javaScript";
let str2 = 'love javaScript';
console.log(str);
console.log(str2);
console.log("string length is ",str.length,"str[7] = ", str[7]);

//template literals:-

let str1 = `this is a template literal`;
console.log(str);

let obj = {
    name:'ram' ,
    age: 25 ,
    rollno:12 ,
};
let output =`student name is ${obj.name} age is ${obj.age} and student rollNumber is ${obj.rollno}`;
console.log(output);
console.log("student name is",obj.name,"age is",obj.age,"and student rollNumber is",obj.rollno);

//STRING METHODS:-

let a = "Hello javaScript";
let b = '   Methods String  ';
console.log("a =",a);
console.log("b =",b);
console.log(a.length);
console.log("touppercase =",a.toUpperCase());
console.log("tolowercase =",a.toLowerCase());
console.log("slice String =",a.slice(0,5));
console.log("replace String =",b.replace("Methods","Love"));
console.log("trim b =",b.trim());
console.log("concat =",a.concat(b));


