import React from "react";
import { TextField } from "@mui/material";

const CustomTextField = ({ id, label, name, type = "text", ...props }) => {
  return (
    <TextField
      margin="normal"
      required
      fullWidth
      id={id}
      label={label}
      name={name}
      type={type}
      autoComplete={name}
      InputProps={{
        style: { color: "white" },
      }}
      InputLabelProps={{
        style: { color: "white" },
      }}
      sx={{
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "white",
          },
          "&:hover fieldset": {
            borderColor: "white",
          },
          "&.Mui-focused fieldset": {
            borderColor: "white",
          },
        },
      }}
      {...props}
    />
  );
};

export default CustomTextField;
