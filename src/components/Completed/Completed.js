import React from 'react';
import successful_icon from './successful_icon.png';
import arrow_btn_icon from './arrow_btn_icon.png';

export default function Completed() {
    return (
        <div className="completed animated fadeIn">
            <img src={successful_icon} alt="completed_icon" className="completed__icon" />
            <p className="completed__title-1">Successful Completed</p>
            <p className="completed__number">3460</p>
            <img src={arrow_btn_icon} alt="arrow_btn_icon" className="completed__arrow" />
        </div>
    );
}

