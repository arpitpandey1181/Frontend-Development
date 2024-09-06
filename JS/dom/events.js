let btn1 = document.querySelector("#btn_1");

btn1.onclick = () =>{
    console.log("hello js :-");
    let a = 5;
    a++;
    console.log(a);
}

btn1.onclick = () =>{
    console.log("hello js 2 :-");
}

let div = document.querySelector("div");
div.onmouseover = () =>{
    console.log("you are inside div...!");
}

//Event Object :-

let btn2 = document.querySelector("#btn_2");

btn2.onclick = (e) =>{
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX, e.clientY); 

    //Event Listener :-

    let btn3 = document.querySelector("#btn_3");

    btn3.addEventListener("click", ()=>{
        console.log("button 3 was clicked ...");
    });
    btn3.addEventListener("click", ()=>{
        console.log("button 3 was clicked again ...");
    });
    const remove = ()=>{
        console.log("button 3 was clicked ...2");
    };
    // btn3.addEventListener("click", (e)=>{
    //     console.log(e);
    //     console.log(e.type);
    // });

    btn3.removeEventListener("click", remove);
}