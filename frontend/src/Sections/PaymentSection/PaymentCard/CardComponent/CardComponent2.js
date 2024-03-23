import React, { useState } from 'react';
import './../PaymentCard.css';

export default function CardComponent2() {
  const [cardNumber, setCardNumber] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    console.log('Input Value:', inputValue);
    const isValidCardNumber = /^\d{16}$/.test(inputValue);
    console.log('isValidCardNumber:', isValidCardNumber);
    setCardNumber(inputValue);
    setIsValid(isValidCardNumber);
    setIsFilled(!!inputValue); 
  };

  return (
    <div className='cardcomponent2-container'>
      <div className={isValid || !isFilled? 'card2-content' : 'card2-content invalid'}>
        <p className={isValid || !isFilled? 'card-number-p' : 'invalid'}>Card owner</p>
        <p className={isValid || !isFilled ?'card-number-p2' : 'verification-card1 invalid'}>{isValid || !isFilled? 'Enter the name on the card' : 'Error message'}</p>
      </div>
      <div className={isValid || !isFilled ?'input-card-component2': 'input-card-component2-invalid'} onChange={handleInputChange}>
        <input
          // className={isValid ? 'input-field valid' : 'input-field-invalid'} 
          value={cardNumber}
          onChange={handleInputChange}
          placeholder="Enter the name"
          required
        ></input>
        <div>
        {!isFilled && isValid && cardNumber.length > 0 && (
            <div>
          <span className='error-message'>
            Invalid owner name!!!
          </span>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}
