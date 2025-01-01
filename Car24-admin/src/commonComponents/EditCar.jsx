import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, TextField, Button, Typography } from '@mui/material';

function EditCar() {
  const navigate = useNavigate();
  const { id } = useParams(); 
  const [carData, setCarData] = useState({
    brand: '',
    title: '',
    year: '',
    price: '',
    description: '',
    fuelType: '',
  });

  // Fetch existing car data (dummy fetch logic)
  useEffect(() => {
    const fetchCarData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/getcars/type/used/${id}`);
        const data = await response.json();
        console.log(data)
        setCarData(data);
      } catch (error) {
        console.error('Error fetching car data:', error);
      }
    };

    fetchCarData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarData({ ...carData, [name]: value });
  };

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/cars/updatecar/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(carData),
      });
      const updatedCar = await response.json();
      console.log('Updated Car Data:', updatedCar);
      navigate('/'); // Redirect to the admin cars page after submission
    } catch (error) {
      console.error('Error updating car data:', error);
    }
  };

  return (
    <Box
      component="form"
      sx={{
        maxWidth: 600,
        margin: 'auto',
        mt: 4,
        p: 3,
        border: '1px solid #ccc',
        borderRadius: 2,
      }}
      onSubmit={handleSubmit}
    >
      <Typography variant="h5" mb={2}>
        Edit Car Details
      </Typography>
      <TextField
        label="Brand"
        name="brand"
        value={carData.brand}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Title"
        name="title"
        value={carData.title}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Year"
        name="year"
        value={carData.year}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Price"
        name="price"
        value={carData.price}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Description"
        name="description"
        value={carData.description}
        onChange={handleChange}
        fullWidth
        margin="normal"
        multiline
        rows={3}
      />
      <TextField
        label="Fuel Type"
        name="fuelType"
        value={carData.fuelType}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Button
        type="submit"
        variant="contained"
        sx={{ backgroundColor: 'black', mt: 2 }}
      >
        Save Changes
      </Button>
    </Box>
  );
}

export default EditCar;
