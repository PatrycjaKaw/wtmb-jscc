const express = require("express")
const CustomerService = require("./services/customer-service")
const bodyParser = require('body-parser')
const app = express()

app.set("view engine", "pug")
app.use(bodyParser.json())

app.get("/", (req, res) => {
  res.render("index")
})

app.get('/customer/all', async (req, res) => {
  const customers = await CustomerService.findAll()
  res.render("customer", { customers })
})

app.get('/customer/:id', async (req, res) => {
  const customer = await CustomerService.find(req.params.id)
  res.send(customer)
})

app.post('/customer', async (req, res) => {
  const customer = await CustomerService.add(req.body)
  res.send(customer)
})

app.delete('/customer/:id', async (req, res) => {
  const customer = await CustomerService.del(req.params.id)
  res.send(customer)
})

app.listen(3000, () => {
  console.log("Server listening")
})