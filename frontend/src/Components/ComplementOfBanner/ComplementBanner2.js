import React from 'react'
import saudiAvatar from '../../images/Banner/saudiAvatar.png'
import './ComplementBanner.css'
import ButtonComponent from '../ButtonComponent/ButtonComponent'

export default function ComplementBanner2({BannerTitle}) {
    return (
        <div className="containerOfSaudi2">
            <p className='bannerInfo2'>{BannerTitle}</p>
        </div>
    )
}
