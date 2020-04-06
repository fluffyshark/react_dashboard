import React from 'react';
import turnover_icon from './turnover_icon.png';

export default function YearlyTurnover() {
    return (
        <div className="yearlyTurnover">
            <img src={turnover_icon} alt="turnover_icon" />
            <p className="yearlyTurnover__number">$9<em> M</em></p>
            <p className="yearlyTurnover__description">Yearly<br />Turnover</p>
            <p className="yearlyTurnover__line">___</p>
        </div>
    );
}

