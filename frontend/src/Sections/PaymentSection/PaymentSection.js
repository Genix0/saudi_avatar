import React from 'react'
import PaymentMethod from './PaymentMethod/PaymentMethod'
import YourPaying from './YourPaying/YourPaying'
import PaymentCard from './PaymentCard/PaymentCard'
import cardimage from '../../images/paymentCard/Rectangle 7.png'
import './PaymentSection.css'
import PaymentConfirmation from './PaymentConfirmation/PaymentConfirmation'

export default function PaymentSection() {
  return (
    <div className='container-paymentSection'>
        <div className='allcomponent-payment'>
            <PaymentMethod/>
            <YourPaying/>
            <div>
                <PaymentCard/>
                <PaymentConfirmation/>
            </div>
        </div>
        <div className='img-payment'>
            <img src={cardimage}></img>
        </div>
    </div>
  )
}
