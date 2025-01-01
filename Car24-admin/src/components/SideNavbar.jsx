import React from "react";
import {
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

function SideNavBar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("userId");

    // toast.success("Logout successful!", {
    //   position: "top-right",
    //   autoClose: 2000,
    // });
    setTimeout(() => {
      navigate("/adminlogin");
    }, 2000);
  };
  return (
    <Drawer
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
      position="sticky"
    >
      <Typography variant="h5" sx={{ padding: 2, textAlign: "center" }}>
        Car12
      </Typography>
      <Divider />
      <List>
        <ListItem button component={Link} to="/admin-used-cars">
          <ListItemText primary="Used Cars" />
        </ListItem>
        <ListItem button component={Link} to="/admin-new-cars">
          <ListItemText primary="New Cars" />
        </ListItem>
        <ListItem button component={Link} to="/services">
          <ListItemText primary="Services" />
        </ListItem>
        <ListItem button component={Link} to="/admin-sell-cars">
          <ListItemText primary="Sell Cars" />
        </ListItem>
        <ListItem button component={Link} to="/contact">
          <ListItemText primary="Contacts" />
        </ListItem>{" "}
        <Button
          color="inherit"
          variant="contained"
          onClick={handleLogout}
          sx={{
            margin: 2,
            width: { xs: "100%", md: "auto" },
            textAlign: "center",
          }}
        >
          Logout
        </Button>
      </List>
    </Drawer>
  );
}

export default SideNavBar;
