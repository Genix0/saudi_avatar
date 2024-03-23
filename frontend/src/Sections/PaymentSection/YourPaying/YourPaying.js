import React from 'react'
import './YourPaying.css'

export default function YourPaying() {
  return (
    <div className='YourPayingContainer'>
        <p className='YourPayingP'>You’re paying,</p>
        <p className='YourPayingPrice'>$101.00</p>
        <div className='payment-content-info'>
            <div className='info-payment'>
                <p>Premium</p>
                <span>$ 100.00</span>
            </div>
            <div className='info-payment2'>
                <p>Tax</p>
                <span>$ 1.00</span>
            </div>
            <div className='info-payment2'>
                <p>Total</p>
                <span>$ 101.00</span>
            </div>
        </div>
    </div>
  )
}
