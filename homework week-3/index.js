const Customer = require("./models/customer")
const Car = require("./models/car")
const CustomerService = require("./services/customer-service")
const CarService = require("./services/car-service")

//const Faker = require("faker")



async function main() {
  const patrycja = new Customer ("Patrycja", "Berlin");
  const karin = new Customer ("Karin", "Berlin");

  const car1 = new Car (" Opel", "black", 2000);
  const car2 = new Car (" Ford", "blue", 2009);

  patrycja.rent(car1)
  karin.rent(car2)



  await CustomerService.add(patrycja)
  await CustomerService.add(karin)

  const customers = await CustomerService.findAll()

  console.log(customers[0].name)

  await CustomerService.del(1)

  const newCustomers = await CustomerService.findAll()
  
  console.log(newCustomers[0].name)

}

main()


