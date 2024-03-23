import React from 'react'
import PlanCard from './PlanCard/PlanCard'
import TitleComponent from '../../../Components/TitleComponet/TitleComponent'
import './Plan.css'
import ButtonComponent from '../../../Components/ButtonComponent/ButtonComponent'
import { useNavigate } from 'react-router-dom'

export default function Plan() {
    const navigate = useNavigate()
    const handleClicked = ()=>{
      navigate('/payment')
    }
    return (
        <div className='Container-Plan'>
            <div className='Content-left-plan'>
                <div className='titleContainer'>
                    <TitleComponent TitleText='pLAN' TitleSpan='PRICING' styleText='text-container' />
                    <h2>Upgrade your Plane Now and Get all the New Features</h2>
                </div>
                <p className='plan-info'>Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. </p>
                <div className='btn-plan-container'>
                    <ButtonComponent buttonText='Upgrade your plan' buttonType='SecondaryButton' onClick={handleClicked}/>
                    <ButtonComponent buttonText='Get Free Trial' buttonType='FreeButton' />
                </div>
            </div>
            <div className='Content-right-plan'>
                <PlanCard />
            </div>
        </div>
    )
}
