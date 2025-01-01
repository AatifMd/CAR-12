const express = require('express');
const router = express.Router();
const { getCarCollection } = require('../models/carSchema');

router.get('/type/:carType', async (req, res) => {
    try {
        const { carType } = req.params;
        const Car = getCarCollection(carType); 
        const cars = await Car.find();
        res.status(200).json(cars);
    } catch (error) {
        console.error('Error fetching cars:', error);
        res.status(500).json({ message: 'Error fetching cars', error: error.message });
    }
});


router.put('/updatecar/:id', async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
  
    try {
      const updatedCar = await CarModel.findByIdAndUpdate(id, updatedData, { new: true });
      res.status(200).json(updatedCar);
    } catch (error) {
      res.status(500).json({ message: 'Error updating car details', error });
    }
  });
  

module.exports = router;
