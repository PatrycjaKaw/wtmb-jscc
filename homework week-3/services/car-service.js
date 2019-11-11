const BaseService = require('./base-service')
const CarModel = require('../models/car')

class CarService extends BaseService {
    constructor() {
        super(CarModel, `${__dirname}/../car-database.json`)
    }
}

module.exports = new CarService()