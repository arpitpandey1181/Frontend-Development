let val = document.getElementsByTagName('h1');
console.log(val);

function myfun (){
    let num = document.getElementsByTagName("p");
    for(let i = 0; i < num.length; i++){
        setTimeout(() =>{
        num[i].style.backgroundColor = "green";
        num[i].style.color = "white";
        }, 2000);
    }
    
}