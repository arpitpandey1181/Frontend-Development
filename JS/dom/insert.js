let a = document.querySelector("div");
a.style.height = "200px";
a.style.width = "100px";
a.style.backgroundColor = "pink";
a.style.textAlign = "center";

let createButton = document.createElement("button");
createButton.innerText = "click me !"
console.log(createButton);
let div = document.querySelector("div");
//first type
//div.append(createButton);
//div.prepend(createButton);
//div.before(createButton);
div.after(createButton);

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Inserte Element !</i>";
console.log(newHeading);
//second type
document.querySelector("body").before(newHeading);

//Delete Element :-
let para = document.querySelector("#id_2");
para.remove();

