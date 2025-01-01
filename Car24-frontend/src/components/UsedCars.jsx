import React, { useState } from "react";
import { Grid, Container, Box, Button, Typography } from "@mui/material";
import CarCards from "../commonComponents/CarCards";
import Navbar from "../commonComponents/Navbar";
import Footer from "../commonComponents/Footer";

const cars = [
  {
    title: "Mercedes-Benz AMG GT Roadster/GTR",
    brand: "Mercedes-Benz",
    year: 2018,
    description: "A reliable and fuel-efficient sedan.",
    price: "20,000",
    image: "https://i.ytimg.com/vi/uPVrT3ZGdt8/mqdefault.jpg",
  },
  {
    title: "BMW 5 Series (G60)",
    brand: "BMW",
    year: 2023,
    description: "A stylish compact car with great features.",
    price: "22,500",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/BMW_G60_520i_1X7A2443.jpg/800px-BMW_G60_520i_1X7A2443.jpg",
  },
  {
    title: "Audi A6",
    brand: "Audi",
    year: 2022,
    description: "Luxury and performance combined.",
    price: "25,000",
    image: "https://www.motortrend.com/uploads/sites/5/2021/09/2022-Audi-A6-5081-1.jpg",
  },
  {
    title: "Toyota Camry",
    brand: "Toyota",
    year: 2021,
    description: "A reliable and comfortable sedan.",
    price: "18,000",
    image: "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/192443/camry-2024-exterior-right-side-view.jpeg?isig=0&q=80",
  },
  {
    title: "Honda Civic",
    brand: "Honda",
    year: 2020,
    description: "A popular compact car with great mileage.",
    price: "15,000",
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/27074/civic-exterior-right-front-three-quarter-148155.jpeg?q=80",
  },
];

const brands = [
  "All",
  "BMW",
  "Mercedes-Benz",
  "Audi",
  "Porsche",
  "Lamborghini",
  "Rolls-Royce",
  "Toyota",
  "Honda",
  "Suzuki",
];

function UsedCars() {
  const [selectedBrand, setSelectedBrand] = useState("All");

  // Filter cars based on selected brand
  const filteredCars =
    selectedBrand === "All"
      ? cars
      : cars.filter((car) => car.brand === selectedBrand);

  return (
    <Box>
      <Navbar />
      <Container sx={{ marginTop: 4 }}>
        {/* Brands Section */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: 4,
            gap: 1,
          }}
        >
          {brands.map((brand) => (
            <Button
              key={brand}
              variant={selectedBrand === brand ? "contained" : "outlined"}
              onClick={() => setSelectedBrand(brand)}
            >
              {brand}
            </Button>
          ))}
        </Box>

        {/* Cars Section */}
        <Grid container spacing={2} justifyContent="center">
          {filteredCars.map((car, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <CarCards
                image={car.image}
                year={car.year}
                title={car.title}
                description={car.description}
                price={car.price}
                buttonLabel="Details"
                onButtonClick={() => alert(`Viewing details for ${car.title}`)}
              />
            </Grid>
          ))}
        </Grid>
        {/* No Cars Found */}
        {filteredCars.length === 0 && (
          <Typography variant="h6" textAlign="center" color="textSecondary">
            No cars available for {selectedBrand}.
          </Typography>
        )}
      </Container>
      <Footer/>
    </Box>
  );
}

export default UsedCars;
