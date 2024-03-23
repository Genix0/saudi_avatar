import React, { useState } from 'react';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './../RestPassword.css'
function PasswordInput() {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');

    const handleTogglePassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleChange = (event) => {
        setPassword(event.target.value);
    };

    return (
        <div className='password-input-field'>
            <div className='input-field'>
                <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={handleChange}
                    placeholder="Password"

                />
                <button onClick={handleTogglePassword}>
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </button>
            </div>
            <div className='input-field'>
                <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={handleChange}
                    placeholder="Confirm your new password"

                />
                <button onClick={handleTogglePassword}>
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </button>
            </div>
            <div>
                <button className='restPassword'>Rest Password</button>
            </div>
            <div>
                <button className='backToLogin'>Back To Login</button>
            </div>
        </div>

    );
}

export default PasswordInput;
