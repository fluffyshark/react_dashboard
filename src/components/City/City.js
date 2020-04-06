import React from 'react';
import cityImage from './city_image.png';

export default function City() {
    return (
        <div className="city">
            <img src={cityImage} alt="city_image" />
        </div>
    );
}

