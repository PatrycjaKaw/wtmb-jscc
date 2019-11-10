module.exports = class Customer {
    constructor(name, address){
    this.name = name;
    this.address = address;
    this.rentedCars = []
    this.boughtCars = []
    }

    rent(car) {
        this.rentedCars.push(car.model);
        car.rentiers.push(this);
        console.log ("Enjoy your ride with " + car.colour + car.model + ".");
    }
    
    return(car) {
        //this.rentedCars.pop(car);
        this.rentedCars = this.rentedCars.filter(item => item != car.model);
        //car.rentiers.pop(this);
        car.rentiers = car.rentiers.filter(item => item != this);
        console.log ("Thank you for using our services!");
    }
    buy(car){
        this.boughtCars.push(car.model);
        car.buyers.push(this);
        console.log ("You are now the lucky owner of " + car.colour + car.model + ".")
    }}
