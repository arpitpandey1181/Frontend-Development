let val = document.getElementsByTagName("h1")[0];
console.log(val);

function myfun (){
    let num = document.getElementsByTagName("p");
    setTimeout(() =>{
        for(let i = 0; i < num.length; i++){
        num[i].style.backgroundColor = "green";
        num[i].style.color = "white";
        }
    }, 2000);
}