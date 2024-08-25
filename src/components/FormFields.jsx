import React from 'react';
import { FormControl, TextField } from '@mui/material';
import './FormFields.css'
const FormField = ({ label, type, value, onChange,pattern }) => (
  <>
    <br />
    <label htmlFor="email" className="email">
            {label}
    </label>
    <br></br>
  <input
            type={type}
            onChange={onChange}
            className="email-input"
            placeholder={label}
      title={value}
      pattern={pattern}
            />
            </>
);



export default FormField ;
