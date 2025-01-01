import React from "react";
import { Box, Typography, Link, Grid } from "@mui/material";
import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        color: "white",
        padding: "40px 20px",
        marginTop: "40px",
        textAlign: "center",
      }}
    >
      <Grid container spacing={4} sx={{ justifyContent: "center" }}>
        {/* Left section - Quick links */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
            Quick Links
          </Typography>
          <Box>
            <Link
              href="/"
              sx={{
                color: "white",
                textDecoration: "none",
                display: "block",
                marginBottom: 1,
              }}
            >
              New Cars
            </Link>
            <Link
              href="/about"
              sx={{
                color: "white",
                textDecoration: "none",
                display: "block",
                marginBottom: 1,
              }}
            >
              Sell Cars
            </Link>
            <Link
              href="/services"
              sx={{
                color: "white",
                textDecoration: "none",
                display: "block",
                marginBottom: 1,
              }}
            >
              Services
            </Link>
            <Link
              href="/contact"
              sx={{
                color: "white",
                textDecoration: "none",
                display: "block",
                marginBottom: 1,
              }}
            >
              Buy Used Cars
            </Link>
          </Box>
        </Grid>

        {/* Middle section - Social media links */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
            Follow Us
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <Link
              href="https://facebook.com"
              target="_blank"
              sx={{ color: "white" }}
            >
              <Facebook />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              sx={{ color: "white" }}
            >
              <Instagram />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              sx={{ color: "white" }}
            >
              <Twitter />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              sx={{ color: "white" }}
            >
              <LinkedIn />
            </Link>
          </Box>
        </Grid>

        {/* Right section - Contact info */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
            Contact Us
          </Typography>
          <Box>
            <Typography variant="body2" sx={{ marginBottom: 1 }}>
              <strong>Email:</strong> support@Car12.com
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: 1 }}>
              <strong>Phone:</strong> +1 (123) 456-7890
            </Typography>
            <Typography variant="body2">
              <strong>Address:</strong> 1234 Car Street, Car City, CA 98765
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Footer bottom text */}
      <Box sx={{ marginTop: "20px" }}>
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} Car12. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
