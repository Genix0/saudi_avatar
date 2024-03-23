import React from 'react'
import InputRest from './InputRest/InputRest'
import './RestPassword.css'
import logo from '../../images/paymentCard/image 78 (1).png'
export default function RestPassword() {
  return (
    <div className='rest-password'>
        <InputRest/>
        <div className='rest-logo'>
            <img src={logo} alt='logo'></img>
        </div>
    </div>
  )
}
