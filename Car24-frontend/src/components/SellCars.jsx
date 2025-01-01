import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  MenuItem,
  Grid,
  Container,
} from "@mui/material";
import Navbar from "../commonComponents/Navbar";
import Footer from "../commonComponents/Footer";

function SellCars() {
  const [formData, setFormData] = useState({
    carModel: "",
    makeYear: "",
    price: "",
    fuelType: "",
    description: "",
    ownerName: "",
    contactNumber: "",
  });

  const fuelTypes = ["Petrol", "Diesel", "Electric", "Hybrid"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Car Data Submitted:", formData);
    alert("Your car details have been submitted!");
    setFormData({
      carModel: "",
      makeYear: "",
      price: "",
      fuelType: "",
      description: "",
      ownerName: "",
      contactNumber: "",
    });
  };

  return (
    <Box>
      <Navbar/>
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      <Grid container spacing={2} alignItems="center">
        {/* Left Side - Form */}
        <Grid item xs={12} md={6}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              padding: 3,
              border: "1px solid #ccc",
              borderRadius: "8px",
              boxShadow: 3,
              backgroundColor: "#f9f9f9",
            }}
          >
            <Typography variant="h5" textAlign="center" fontWeight="bold">
              Sell Your Car
            </Typography>
            <TextField
              label="Car Model"
              name="carModel"
              value={formData.carModel}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              label="Make Year"
              name="makeYear"
              value={formData.makeYear}
              onChange={handleChange}
              type="number"
              required
              fullWidth
            />
            <TextField
              label="Price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              type="number"
              required
              fullWidth
            />
            <TextField
              select
              label="Fuel Type"
              name="fuelType"
              value={formData.fuelType}
              onChange={handleChange}
              required
              fullWidth
            >
              {fuelTypes.map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              multiline
              rows={4}
              required
              fullWidth
            />
            <TextField
              label="Owner Name"
              name="ownerName"
              value={formData.ownerName}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              label="Contact Number"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              type="tel"
              required
              fullWidth
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ padding: 1 }}
            >
              Submit
            </Button>
          </Box>
        </Grid>
        {/* Right Side - Image */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection:"column"
            }}
          >
            <img
              src="https://media.istockphoto.com/id/1395134717/photo/happy-salesman-selling-the-car-to-his-female-customer-in-a-showroom.jpg?s=612x612&w=0&k=20&c=lHjvvV943BYsQzgep_bQTx2lg37mAxZI8lmF6aUz6W8="
              alt="Car Sale"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            />
            <img
              src="https://media.istockphoto.com/id/988321834/photo/young-couple-buying-a-car.jpg?s=612x612&w=0&k=20&c=PsnTWHiDM_lCi85BlwJwlRYejVRteIB7QxLSy68ciMQ="
              alt="Car Sale"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
    <Footer/>
    </Box>
  );
}

export default SellCars;
