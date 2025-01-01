const express = require('express');
const multer = require('multer');
const router = express.Router();
const {getCarCollection} = require('../models/carSchema')

const upload = multer({ dest: 'uploads/' }); 

router.post('/add-car', upload.single('image'), async (req, res) => {
  try {
    const { brand, title, description, makeYear, price, fuelType, carType } = req.body;
    const image = req.file ? req.file.path : null; 

    const Car = getCarCollection(carType);

    const newCar = new Car({
      brand,
      title,
      description,
      makeYear,
      price,
      fuelType,
      image, 
      carType,
    });

    await newCar.save();

    res.status(201).json({ message: `Car added successfully as ${carType}`, car: newCar });
  } catch (error) {
    console.error('Error adding car:', error);
    res.status(400).json({ message: 'Error adding car', error: error.message });
  }
});

module.exports = router;
