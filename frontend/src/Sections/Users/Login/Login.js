import React, { useState } from 'react';
import './Login.css'; 

export default function Login() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [formErrors, setFormErrors] = useState({});

    const handleSubmit = (event) => {
      event.preventDefault();

      // Validation
      const errors = {};

      if (!firstName.trim()) {
        errors.firstName = 'Please enter your first name!!';
      }

      if (!lastName.trim()) {
        errors.lastName = 'Please enter your last name!!';
      }

      if (!email.trim()) {
        errors.email = 'Please enter your email address!!';
      } else if (!email.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        errors.email = 'Please enter a valid email address!!';
      }

      if (!password.trim()) {
        errors.password = 'Please enter your password!!';
      } else if (password.length < 8) {
        errors.password = 'Password must be at least 8 characters long!!';
      }

      if (Object.keys(errors).length === 0) {
        console.log('Submitted:', { firstName, lastName, password, email });
      } else {
        setFormErrors(errors);
      }
    };

  return (
    <form className="signin-form" onSubmit={handleSubmit}>
      <h1>Sign In</h1>
      <div className="input-group">
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={`firstname ${formErrors.firstName ? 'error' : ''}`}
          />
          <div className='req'>{formErrors.firstName && <p className="error-message2">{formErrors.firstName}</p>}</div>
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className={`lastname ${formErrors.lastName ? 'error' : ''}`}
          />
          <div className='req'>{formErrors.lastName && <p className="error-message2">{formErrors.lastName}</p>}</div>
        </div>
      </div>
      <div className="input-group">
        <div className="input-wrapper">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`email ${formErrors.email ? 'error' : ''}`}
          />
          {formErrors.email && <p className="error-message2">{formErrors.email}</p>}
        </div>
      </div>
      <div className="input-group">
        <div className="input-wrapper">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`password ${formErrors.password ? 'error' : ''}`}
          />
          {formErrors.password && <p className="error-message2">{formErrors.password}</p>}
        </div>
      </div>
      <div className="input-group2">
        <button type="submit">Login</button>
        <div className='have-account'>
          <div className='have-acc-p'> have an account ?<a href="/signup-page" className='sign-up-l'> Sign Up</a></div>
        </div>
        <a href="/reset-password" className='rest-pop'>Reset Password?</a>
      </div>
    </form>
  );
}
