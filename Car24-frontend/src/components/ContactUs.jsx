import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Grid,
  Box,
} from "@mui/material";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend or API)
    console.log("Form Data:", formData);
  };

  return (
    <Container sx={{ padding: "50px 0" }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: "center" }}>
        Contact Us
      </Typography>
      <Typography variant="body1" sx={{ textAlign: "center", marginBottom: 4 }}>
        We'd love to hear from you. Please fill out the form below to get in
        touch!
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box sx={{ padding: 2 }}>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                required
                sx={{ marginBottom: 2 }}
              />
              <TextField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                required
                sx={{ marginBottom: 2 }}
              />
              <TextField
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                fullWidth
                required
                multiline
                rows={4}
                sx={{ marginBottom: 2 }}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ padding: "10px 0", fontWeight: "bold" }}
              >
                Submit
              </Button>
            </form>
          </Box>
        </Grid>

        {/* Optional: Section for contact info (e.g., phone, email) */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{ padding: 2, backgroundColor: "#f0f0f0", borderRadius: "8px" }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", marginBottom: 2 }}
            >
              Contact Information
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 1 }}>
              <strong>Phone:</strong> +1 (123) 456-7890
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 1 }}>
              <strong>Email:</strong> support@Car12.com
            </Typography>
            <Typography variant="body1">
              <strong>Address:</strong> 1234 Car Street, Car City, CA 98765
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ContactUs;
