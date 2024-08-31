let val = document.getElementById("val_1");
console.log(val);

function byId (){
    const num_1 = Number(document.getElementById("val_1").value); 
    const num_2 = Number(document.getElementById("val_2").value); 
    const add = num_1 + num_2;
    document.getElementById("result").innerHTML = " Addition :" + add;
}
