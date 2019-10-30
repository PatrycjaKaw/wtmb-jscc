const Customer = require("./customer")
const Car = require("./car")
const Faker = require("faker")
const Database = require("./database") 

const patrycja = new Customer ("Patrycja", "Berlin");
const karin = new Customer ("Karin", "Berlin");

const car1 = new Car (" Opel", "black", 2000);
const car2 = new Car (" Ford", "blue", 2009);

patrycja.rent(car1)

Database.save("car.json", car1)
Database.save("customer.json", patrycja)

const loadedFile = Database.load("car.json")
console.log(loadedFile.model)


