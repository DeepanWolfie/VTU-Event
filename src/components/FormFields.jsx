import React from 'react';
import { FormControl, TextField } from '@mui/material';
import './FormFields.css'
const FormField = ({ label, type, value, onChange }) => (
  <FormControl fullWidth sx={{ mb: 2 }}>
   
  
   
     <TextField
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: "16px", 
          },
          }}
          label={label}
          variant="outlined"
          type={type}
          value={value}
          onChange={onChange}
          /> 
  </FormControl>
);



export default FormField ;
