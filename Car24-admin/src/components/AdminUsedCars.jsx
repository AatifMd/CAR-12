import React, {useState, useEffect} from "react";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  tableCellClasses,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import SideNavBar from "./SideNavbar";

// Styled components for the table
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black, // Black header background
    color: theme.palette.common.white, // White header text
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));


function AdminUsedCars() {
  const navigate = useNavigate();

  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/getcars/type/used") // Adjust the URL based on your server setup
      .then((response) => response.json())
      .then((data) => setCars(data))
      .catch((error) => console.error("Error fetching used cars:", error));
  }, []);


  const handleEdit = (id) => {
    navigate(`/edit-car/${id}`);
    console.log(`Edit car with ID: ${id}`);
    // Add your edit logic here
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete the car with ID: ${id}?`
    );
    if (confirmDelete) {
      console.log(`Delete car with ID: ${id}`);
      // Add your delete logic here
    } else {
      console.log(`Deletion cancelled for car with ID: ${id}`);
    }
  };

  const AddCars = () => {
    navigate("/add-cars");
  };

  return (
    <Box display="flex">
      <SideNavBar />
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Button
          variant="contained"
          sx={{ backgroundColor: "black" }}
          onClick={AddCars}
        >
          Add Cars
        </Button>
        <TableContainer component={Paper} sx={{ mt: 2 }}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell>Brand</StyledTableCell>
                <StyledTableCell>Title</StyledTableCell>
                <StyledTableCell>Year</StyledTableCell>
                <StyledTableCell>Price</StyledTableCell>
                <StyledTableCell>Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cars.map((car, index) => (
                <StyledTableRow key={car._id}>
                  <StyledTableCell>{index + 1}</StyledTableCell>
                  <StyledTableCell>{car.brand}</StyledTableCell>
                  <StyledTableCell>{car.title}</StyledTableCell>
                  <StyledTableCell>{car.makeYear}</StyledTableCell>
                  <StyledTableCell>{car.price}</StyledTableCell>
                  <StyledTableCell>
                    <IconButton
                      onClick={() => handleEdit(car._id)}
                      color="primary"
                    >
                      <Edit />
                    </IconButton>
                    <IconButton
                      onClick={() => handleDelete(car._id)}
                      color="secondary"
                    >
                      <Delete />
                    </IconButton>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default AdminUsedCars;
