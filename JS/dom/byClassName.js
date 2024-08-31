let val = document.getElementsByClassName("example")[0];
console.log(val);

function byClass (){
    const num_1 = Number(document.getElementsByClassName("example_1")[0].value);
    const num_2 = Number(document.getElementsByClassName("example_2")[0].value);
    const sub = num_1 - num_2;
    document.getElementsByClassName("result")[0].innerHTML = "subtraction :" + sub;
}