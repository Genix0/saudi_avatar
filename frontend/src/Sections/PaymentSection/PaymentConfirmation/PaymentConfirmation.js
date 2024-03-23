import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import '../PaymentSection.css'

export default function PaymentConfirmation() {
  return (
    <div className='PaymentConfirmation-container'>
        <button className='pay-now'>Pay Now</button>
        <div>
            <FormGroup>
                <FormControlLabel control={<Checkbox sx={{ '& .MuiSvgIcon-root': { color: '#3D48A6' }}} defaultChecked />} label="Set us default" />
            </FormGroup>
        </div>
    </div>
  )
}
