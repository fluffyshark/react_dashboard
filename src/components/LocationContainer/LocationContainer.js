import React from 'react';
import greenArrow from './green_arrow.png';
import building_1 from './building-1.png';
import building_2 from './building-2.png';
import building_3 from './building-3.png';
import building_4 from './building-4.png';

export default function LocationContainer() {
    return (
        <div className="locationContainer">
            <div className="locationContainer__content">
                <p className="locationContainer__content__city">London</p>
                <p className="locationContainer__content__nation">United Kingdom</p>
                <img id="green_arrow" className="locationContainer__content__arrow" src={greenArrow} alt="green_arrow" />
                <img src={building_1} alt="building-1" />
                <img src={building_2} alt="building-2" />
                <img src={building_3} alt="building-3" />
                <img src={building_4} alt="building-4" />
            </div>
        </div>
            );
}

