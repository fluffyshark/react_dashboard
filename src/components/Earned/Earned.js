import React from 'react';
import earned_icon from './earned_icon.png';
import arrow_btn_icon from './arrow_btn_icon.png';

export default function Earned() {
    return (
        <div className="earned animated fadeIn">
            <img src={earned_icon} alt="earned_icon" className="earned__icon" />
            <p className="earned__title-1">Earned This Month</p>
            <p className="earned__number">$89,736</p>
            <img src={arrow_btn_icon} alt="arrow_btn_icon" className="earned__arrow" />
        </div>
    );
}

