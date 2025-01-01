import React from "react";
import {
  Box,
  Button,
  Typography,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";
import CustomTextField from "../commonComponents/customTextField";

function SignUp() {
  return (
    <Box
      sx={{
        backgroundImage: `url('https://stimg.cardekho.com/images/carexteriorimages/630x420/Mercedes-Benz/C-Class/10858/Mercedes-Benz-C-Class-C-200/1720160050225/front-left-side-47.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.7)", 
            padding: 4,
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Typography
            component="h1"
            variant="h5"
            sx={{ color: "white", mb: 3, textAlign: "center" }}
          >
            Sign Up
          </Typography>
          <Box component="form" noValidate sx={{ width: "100%" }}>
            <CustomTextField id="name" label="Name" name="name" />
            <CustomTextField id="email" label="Email Address" name="email" type="email" />
            <CustomTextField id="password" label="Password" name="password" type="password" />
            <CustomTextField
              id="confirm_password"
              label="Confirm Password"
              name="confirm_password"
              type="password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: "primary.main",
                "&:hover": {
                  backgroundColor: "primary.dark",
                },
              }}
            >
              Sign Up
            </Button>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="body2" sx={{ color: "white" }}>
                Already have an account?{" "}
                <Link to="/login" style={{ textDecoration: "none", color: "#90caf9" }}>
                  Login
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default SignUp;
