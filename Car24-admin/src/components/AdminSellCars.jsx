import React from 'react';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, tableCellClasses } from '@mui/material';
import { Edit, Delete, CheckCircle } from '@mui/icons-material';
import SideNavBar from './SideNavbar';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black, 
    color: theme.palette.common.white,          
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const dummySellData = [
  { id: 1, brand: 'Toyota', title: 'Highlander', year: 2022, price: '$40,000' },
  { id: 2, brand: 'BMW', title: 'X5', year: 2021, price: '$60,000' },
  { id: 3, brand: 'Audi', title: 'Q7', year: 2020, price: '$55,000' },
  { id: 4, brand: 'Mercedes', title: 'GLC', year: 2023, price: '$70,000' },
];

function AdminSellCars() {
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/edit-sell-car/${id}`);
    console.log(`Edit sell car with ID: ${id}`);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete the sell car with ID: ${id}?`);
    if (confirmDelete) {
      console.log(`Delete sell car with ID: ${id}`);
      // Add delete logic here
    } else {
      console.log(`Deletion cancelled for sell car with ID: ${id}`);
    }
  };

  const handleApprove = (id) => {
    console.log(`Approve sell car with ID: ${id}`);
    // Add approve logic here
  };

  const AddSellCars = () => {
    navigate('/add-sell-cars');
  };

  return (
    <Box display="flex">
      <SideNavBar />
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Button variant="contained" sx={{ backgroundColor: "black" }} onClick={AddSellCars}>
          Add Sell Cars
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
              {dummySellData.map((car) => (
                <StyledTableRow key={car.id}>
                  <StyledTableCell>{car.id}</StyledTableCell>
                  <StyledTableCell>{car.brand}</StyledTableCell>
                  <StyledTableCell>{car.title}</StyledTableCell>
                  <StyledTableCell>{car.year}</StyledTableCell>
                  <StyledTableCell>{car.price}</StyledTableCell>
                  <StyledTableCell>
                    <IconButton onClick={() => handleEdit(car.id)} color="primary">
                      <Edit />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(car.id)} color="secondary">
                      <Delete />
                    </IconButton>
                    <IconButton onClick={() => handleApprove(car.id)} color="success">
                      <CheckCircle />
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

export default AdminSellCars;
