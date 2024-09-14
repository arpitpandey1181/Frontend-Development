//first object
const employee = {
    //difine function = type 1
    contex(){
        console.log("tex rate is 10% ")
    },

    //difine function = type 2
    contex2: function () {
        console.log("tex rate is 10% ");  
    },
}
//second object
const empolyeeName ={
    salary : 20000,
}

const empolyeeName1 ={
    salary : 20000,
    contex(){
        console.log("tex rate is 20% ")
    }
}
//use prototype
empolyeeName.__proto__ = employee;
console.log(empolyeeName);
console.log(empolyeeName.contex());

empolyeeName.__proto__ = employee;
console.log(empolyeeName1);
console.log(empolyeeName1.contex());