import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Link,
  Menu,
  MenuItem,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  // State for handling dropdown menus
  const [anchorElProfile, setAnchorElProfile] = useState(null);
  const [anchorElServices, setAnchorElServices] = useState(null);

  // State for Drawer
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Open Profile Menu
  const handleClickProfile = (event) => {
    setAnchorElProfile(event.currentTarget);
  };

  // Close Profile Menu
  const handleCloseProfile = () => {
    setAnchorElProfile(null);
  };

  // Open Services Menu
  const handleClickServices = (event) => {
    setAnchorElServices(event.currentTarget);
  };

  // Close Services Menu
  const handleCloseServices = () => {
    setAnchorElServices(null);
  };

  // Toggle Drawer
  const toggleDrawer = (state) => {
    setIsDrawerOpen(state);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "black" }}>
      <Toolbar>
        {/* Logo */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link
            component={RouterLink}
            to="/"
            sx={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
              fontSize: "24px",
            }}
          >
            Car12
          </Link>
        </Typography>

        {/* Desktop Menu */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 2,
          }}
        >
          <Button
            component={RouterLink}
            to="/"
            sx={{ color: "white", textTransform: "none" }}
          >
            Home
          </Button>
          <Button
            component={RouterLink}
            to="/usedcars"
            sx={{ color: "white", textTransform: "none" }}
          >
            Buy Used Cars
          </Button>
          <Button
            component={RouterLink}
            to="/sellcars"
            sx={{ color: "white", textTransform: "none" }}
          >
            Sell Cars
          </Button>
          <Button
            component={RouterLink}
            to="/newcars"
            sx={{ color: "white", textTransform: "none" }}
          >
            New Cars
          </Button>
          {/* Services Dropdown */}
          <Button
            sx={{ color: "white", textTransform: "none" }}
            onClick={handleClickServices}
          >
            Services
          </Button>
          <Menu
            anchorEl={anchorElServices}
            open={Boolean(anchorElServices)}
            onClose={handleCloseServices}
          >
            <MenuItem onClick={handleCloseServices}>Repair cars</MenuItem>
            <MenuItem onClick={handleCloseServices}>Hire Driver</MenuItem>
            <MenuItem onClick={handleCloseServices}>Car School</MenuItem>
          </Menu>

          {/* Profile Dropdown */}
          <Button
            sx={{
              color: "white",
              textTransform: "none",
              padding: "6px 12px",
            }}
            onClick={handleClickProfile}
          >
            <PersonIcon />
          </Button>
          <Menu
            anchorEl={anchorElProfile}
            open={Boolean(anchorElProfile)}
            onClose={handleCloseProfile}
          >
            <MenuItem onClick={handleCloseProfile}>My Booking</MenuItem>
            <MenuItem onClick={handleCloseProfile}>My Services</MenuItem>
            <MenuItem onClick={handleCloseProfile}>Logout</MenuItem>
          </Menu>
        </Box>

        {/* Hamburger Menu for Mobile */}
        <IconButton
          sx={{ display: { xs: "block", md: "none" }, color: "white" }}
          onClick={() => toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={() => toggleDrawer(false)}
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => toggleDrawer(false)}
            onKeyDown={() => toggleDrawer(false)}
          >
            <List>
              <ListItem button component={RouterLink} to="/">
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button component={RouterLink} to="/usedcars">
                <ListItemText primary="Buy Used Cars" />
              </ListItem>
              <ListItem button component={RouterLink} to="/sellcars">
                <ListItemText primary="Sell Cars" />
              </ListItem>
              <ListItem button component={RouterLink} to="/newcars">
                <ListItemText primary="New Cars" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Repair Cars" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Hire Driver" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Car School" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="My Booking" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="My Services" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Logout" />
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
