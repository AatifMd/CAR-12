import React from "react";
import Navbar from "../commonComponents/Navbar";
import { Box, Typography } from "@mui/material";
import About from "./About";
import ContactUs from "./ContactUs";
import Footer from "../commonComponents/Footer";

function Dashboard() {
  return (
    <div>
      <Navbar />
      <Box
        sx={{
          backgroundImage:
            "url(https://freerangestock.com/sample/107595/man-driving-car-in-snowy-weather.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
          padding: "0 20px",
        }}
      >
        <Typography
          variant="h1"
          sx={{ fontWeight: "bold", fontSize: "4rem", margin: 0 }}
        >
          Welcome to Car12
        </Typography>
        <Typography variant="h5" sx={{ marginTop: "20px" }}>
          Your All in one car universe
        </Typography>
      </Box>
      <About />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Dashboard;
