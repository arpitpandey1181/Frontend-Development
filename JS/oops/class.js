class car {
    constructor(mileage){
        this.mileage = mileage;
    }
    stsrt (){
        console.log("the car was started ")
    }

    stop (){
        console.log("the car was stoped ")
    }

    setbrand(brand){
        this.brand = brand
    }
}
//create object
 let punch = new car(20);
 punch.setbrand("tata");

 console.log(punch);
 console.log(punch.stsrt);
 console.log(car);
