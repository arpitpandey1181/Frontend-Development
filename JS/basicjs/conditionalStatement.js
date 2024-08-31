//conditional Statement


// let x = prompt ("enter age...");
// if((x < 18) && (x > 0)){
//     console.log("you are not eligible to vote ");
// }
// else if(x >= 18){
//    console.log("you are eligible to vote") ;
// }
// else{
//      console.log("wrong number....")
// }


 let week =Number ( prompt("enter week number... "));
switch (week) {
    case 1:
       console.log("monday") ;
        break;
        case 2:
       console.log("tuesday") ;
        break;
        case 3:
       console.log("wednesday") ;
        break;
        case 4:
       console.log("thursday") ;
        break;
        case 5:
       console.log("friday") ;
        break;
        case 6:
       console.log("saturday") ;
        break;
        case 7:
       console.log("sunday") ;
        break;
    default:
        console.log("wrong number.....");
        break;
}