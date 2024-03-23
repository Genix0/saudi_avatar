import React, { useState } from 'react';
import PasswordInput from './PasswordInput';
import './../RestPassword.css'
 
export default function InputRest() {

    return (
        <div className='inputRest-container'>
            <div className='input-rest'>
                <p className='input-rest-p'>Reset Password</p>
                <p className='input-rest-new-p'>Choose a new password for your account</p>
            </div>
            <div>
                <PasswordInput/>
            </div>
        </div>
    );
}
