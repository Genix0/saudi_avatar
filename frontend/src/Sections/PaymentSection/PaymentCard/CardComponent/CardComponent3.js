import React, { useState } from 'react';
import './../PaymentCard.css'
export default function CardComponent3() {
    const [expiryMonth, setExpiryMonth] = useState('');
    const [expiryYear, setExpiryYear] = useState('');
    const [cvv, setCvv] = useState('');
    const [isValid, setIsValid] = useState(true); 

    const handleExpiryMonthChange = (e) => {
        const value = e.target.value;
        if (/^\d{1,2}$/.test(value) && parseInt(value) <= 12) {
            setExpiryMonth(value);
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    };

    const handleExpiryYearChange = (e) => {
        const value = e.target.value;
        const currentYear = new Date().getFullYear().toString().slice(2);
        if (/^\d{2}$/.test(value) && parseInt(value) >= parseInt(currentYear)) {
            setExpiryYear(value);
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    };

    const handleCvvChange = (e) => {
        const value = e.target.value;
        if (/^\d{3,4}$/.test(value)) {
            setCvv(value);
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    };

    return (
        <div className='component3-conatiner'>
            <div>
                <p className={isValid ? 'card-number-p' : 'card-number-p invalid'}>Expiry date</p>
                <p className={isValid ? 'verification-card1' : 'verification-card1 invalid'}>{isValid ? 'Enter the expiration date of the card' : 'Invalid expiration date'}</p>
            </div>
            <div className='year_month'>
                <input  onChange={handleExpiryMonthChange} placeholder="MM" maxLength="2" className='input-expire'/>
                <p>/</p>
                <input  onChange={handleExpiryYearChange} placeholder="YY" maxLength="4" className='input-year'/>
            </div>
            <div className='cvv2'>
                <p className={isValid ? 'card-number-p' : 'card-number-p invalid'}>CVV2</p>
                <p className={isValid ? 'verification-card1' : 'verification-card1 invalid'}>{isValid ? 'Security code' : 'Invalid Security code'}</p>
            </div>
            <div>
                <input  onChange={handleCvvChange} placeholder="CVV" maxLength="4"  className='input-cvv'/>
            </div>
        </div>
    );
}
