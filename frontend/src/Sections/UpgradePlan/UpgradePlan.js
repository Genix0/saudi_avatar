import React from 'react'
import PlanCard from '../About Us_UpgradePlan/Plan/PlanCard/PlanCard'
import './UpgradePlan.css'
import ButtonComponent from '../../Components/ButtonComponent/ButtonComponent'
import { useNavigate } from 'react-router-dom'

export default function UpgradePlan() {
  const navigate = useNavigate()
  const handleClicked = ()=>{
    navigate('/payment')
  }
  return (
    <div className='upgradePlanPopup'>
        <div className='Content-left-plan2'>
            <div className='titleContainer2'>
                <h2>Upgrade your Plane Now and Get all the New Features</h2>
            </div>
            <p className='plan-info2'>Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. </p>
            <div className='btn-plan-container'>
                <ButtonComponent buttonText='Get Free Trial' buttonType='FreeButton' onClick={handleClicked}/>
            </div>
        </div>
        <PlanCard/>
    </div>
  )
}
