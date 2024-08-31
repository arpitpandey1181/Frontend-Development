// function example (){
//     return new Promise ((resolve,reject) => {
//         setTimeout(() =>{
//             console.log("hello");
//             resolve("success");
//         }, 3000); 
//     });
// }
// async function runExample (){
//     await example();
//     await example();
// }

function js(data){
    return new promise ((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data", data);
            resolve("success");
        }, 3000);
    });
}
async function getjs(){
    console.log("getting data.....1");
    let ans1 = await js(1);
    console.log(ans1);
    console.log("getting data.....2");
    await js(2);
    console.log("getting data.....3");
    await js(3);
    console.log("getting data.....4");
    await js(4);
    console.log("getting data.....4");
    await js(5);
}