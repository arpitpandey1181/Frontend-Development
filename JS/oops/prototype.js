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
//use prototype
empolyeeName.__proto__ = employee;
console.log(empolyeeName);
console.log(empolyeeName.contex());