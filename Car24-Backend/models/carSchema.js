const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
    brand: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: false },
    makeYear: { type: Number, required: true },
    price: { type: Number, required: true },
    fuelType: { type: String, required: true },
    image: { type: String, required: false },
    carType: { type: String, enum: ['new', 'used'], required: true }, 
  });
  
  // Custom collection name based on carType
  const getCarCollection = (carType) => {
    return mongoose.model(carType === 'new' ? 'newCars' : 'usedCars', carSchema);
  };
  module.exports = { getCarCollection };