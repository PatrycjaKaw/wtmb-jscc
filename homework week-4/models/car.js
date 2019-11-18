module.exports = class Car {
    constructor(model, colour, productionDate, rentiers = [], buyers = [], id){
    this.model = model;
    this.colour = colour;
    this.productionDate = productionDate;
    this.rentiers = rentiers;
    this.buyers = buyers;
    this.id = id
}
static create({ model, colour, productionDate, rentiers, buyers, id }) {
    return new Car(model, colour, productionDate, rentiers, buyers, id)
}
}