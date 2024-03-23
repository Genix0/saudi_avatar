import React from 'react'
import './PaymentCard.css'
import CardComponent1 from './CardComponent/CardComponent1'
import success from '../../../images/paymentCard/Success.png'
import Visa from '../../../images/paymentCard/Visa.png'
import Troy from '../../../images/paymentCard/Troy.png'
import Master from '../../../images/paymentCard/Master Card.png'
import CardComponent2 from './CardComponent/CardComponent2'
import CardComponent3 from './CardComponent/CardComponent3'
import PaymentConfirmation from '../PaymentConfirmation/PaymentConfirmation'

export default function PaymentCard() {
  return (
    <>
    <div className='paymentCard-container'>
        <div className='Payment_info_Titles'>
            <div className='payment-card-subtitle'> 
                <img src={success} alt='sucess'></img>
                <p>Add new card</p>
            </div>
            <div className='title-card-image'>
                <img src={Master} alt='Master'></img>
                <img src={Visa} alt='Visa'></img>
                <img src={Troy} alt='Troy'></img>
            </div>
        </div>
        <CardComponent1/>
        <CardComponent2/>
        <CardComponent3/>
    </div>
    </>
  )
}
