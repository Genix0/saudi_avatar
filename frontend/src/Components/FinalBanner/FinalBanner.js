import React, { useState } from 'react';
import BannerComponent from '../BannerComponent/BannerComponent';
import ComplementBanner from '../ComplementOfBanner/ComplementBanner';
import Header from '../Header/Header';
import './FinalBanner.css';

export default function FinalBanner() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handlePopupToggle = (isOpen) => {
        setIsPopupOpen(isOpen);
    };

    return (
        <div className='FinalBanner'>
            <Header onPopupToggle={handlePopupToggle} />
            <BannerComponent />
            <ComplementBanner className={`FinalBanner2 ${isPopupOpen ? 'blur' : ''}`}/>
        </div>
    );
}
