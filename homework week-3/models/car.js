module.exports = class Car {
    constructor(model, colour, productionDate){
    this.model = model;
    this.colour = colour;
    this.productionDate = productionDate;
    this.rentiers = []
    this.buyers = []
}
}