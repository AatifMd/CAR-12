import React, { useState } from 'react';
import { Box, TextField, Button, MenuItem, Typography, Paper } from '@mui/material';

const fuelTypes = ['Petrol', 'Diesel', 'Electric', 'Hybrid'];
const carTypes = ['new', 'used'];

function AddCars() {
  const [formData, setFormData] = useState({
    brand: '',
    title: '',
    description: '',
    makeYear: '',
    price: '',
    fuelType: '',
    image: null,
    carType: 'new',  // Default to 'new'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageUpload = (e) => {
    setFormData((prevData) => ({ ...prevData, image: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  
    // Prepare data for submission (assuming image is handled separately)
    const carData = new FormData();
    carData.append('brand', formData.brand);
    carData.append('title', formData.title);
    carData.append('description', formData.description);
    carData.append('makeYear', formData.makeYear);
    carData.append('price', formData.price);
    carData.append('fuelType', formData.fuelType);
    carData.append('carType', formData.carType);
    if (formData.image) {
      carData.append('image', formData.image);
    }
  
    try {
      // Replace with your actual API endpoint
      const response = await fetch('http://localhost:5000/cars/add-car', {
        method: 'POST',
        body: carData,
      });
  
      if (!response.ok) {
        throw new Error('Failed to add car');
      }
  
      const data = await response.json();
      console.log(data); // Handle success
  
      // Reset form fields after successful submission
      setFormData({
        brand: '',
        title: '',
        description: '',
        makeYear: '',
        price: '',
        fuelType: '',
        image: null,
        carType: 'new',  // Default to 'new'
      });
    } catch (error) {
      console.error('Error adding car:', error);
    }
  };
  

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Paper elevation={3} sx={{ padding: 4, maxWidth: 600, width: '100%' }}>
        <Typography variant="h5" align="center" gutterBottom>
          Add a New Car
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Brand"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            margin="normal"
            multiline
            rows={3}
          />
          <TextField
            fullWidth
            label="Make Year"
            name="makeYear"
            type="number"
            value={formData.makeYear}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Price"
            name="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            select
            label="Fuel Type"
            name="fuelType"
            value={formData.fuelType}
            onChange={handleChange}
            margin="normal"
            required
          >
            {fuelTypes.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            fullWidth
            select
            label="Car Type"
            name="carType"
            value={formData.carType}
            onChange={handleChange}
            margin="normal"
            required
          >
            {carTypes.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </TextField>

          <Button
            variant="contained"
            component="label"
            fullWidth
            sx={{ marginY: 2 }}
          >
            Upload Image
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={handleImageUpload}
            />
          </Button>
          {formData.image && (
            <Typography variant="body2" align="center">
              Selected File: {formData.image.name}
            </Typography>
          )}
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Add Car
          </Button>
        </form>
      </Paper>
    </Box>
  );
}

export default AddCars;
