import React, { useState } from 'react';
import card from '../../../../images/paymentCard/creditcard.png';
import success from '../../../../images/paymentCard/Check.png';
import invalid from '../../../../images/paymentCard/Check (1).png'; 
import Default from '../../../../images/paymentCard/Default.png'; 
import './../PaymentCard.css';

export default function CardComponent1() {
  const [cardNumber, setCardNumber] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setCardNumber(inputValue);
    setIsFilled(!!inputValue);

    const isValidCardNumber = /^\d{16}$/.test(inputValue);
    setIsValid(isValidCardNumber);
  };
  

  return (
    <div className='cardcomponent1-container'>
      <div className={`card2-content ${isValid ? '' : 'invalid'}`}>
        <p className={`card-number-p ${isValid || !isFilled? '' : 'invalid'}`}>Card number</p>
        <p className={`card-number-p2 ${isValid || !isFilled? '' : 'invalid'}`}>
          {isFilled ? 
            (isValid ? "Card number Success" : 'Invalid card number. Please enter a valid 16-digit card number')
            : 'Please enter a valid 16-digit card number'
          }
        </p>    
      </div>

      <div className={`input-card-component ${isValid || !isFilled  ? 'valid' : 'input-card-component-invalid'}`}>
        <img src={card} alt='card'></img>
        <input
          className={`input-field2 ${isValid && isFilled ? 'valid' : 'invalid'}`} 
          value={cardNumber}
          onChange={handleInputChange}
          placeholder="Enter card number"
          required
        ></input>
      </div>
      <div className='img-validation'>
        {isFilled ? ( 
          isValid ? <img src={success} className='success-image' alt='success'></img> : <img src={invalid} className='invalid-image' alt='invalid'></img>
        ) : (
          <img src={Default} className='static-image' alt='static'></img>
        )}
      </div>
    </div>
  );
}
