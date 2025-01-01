import React from "react";
import SideNavBar from "./SideNavbar";
import { Box, Typography } from "@mui/material";

function AdminDashboard() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h4" align="center">
        Welcome to Car12 Admin Dashboard
      </Typography>
      <SideNavBar />
    </Box>
  );
}

export default AdminDashboard;
