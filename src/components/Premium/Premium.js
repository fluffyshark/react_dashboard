import React from 'react';
import side_building from './side_building.png';

export default function Premium() {
    return (
        <div className="premium animated fadeIn">
            <img src={side_building} alt="sidebuilding" className="premium__sidebuilding" />
            <p className="premium__text-1">Buy <em>Pro Account</em> to explore</p>
            <p className="premium__text-2">Premium Features</p>
            <div className="premium__btn"><p>Purchase Now</p></div>
        </div>
    );
}
