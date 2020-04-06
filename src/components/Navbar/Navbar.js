import React from 'react';
import light_dark_toggler from './light_dark_toggler.png';
import search_icon from './search-icon.svg';

export default function Navbar() {
    return (
            <div className="navbar">
                <img src={light_dark_toggler} alt="light_dark_toggler" className="navbar__lightDarkToggler"/>
                <p className="navbar__text1">Home</p>
                <p className="navbar__text2">Settings</p>
                <p className="navbar__text3">Help</p>
                <div className="navbar__searchBox">
                    <div className="navbar__input">
                        <input placeholder="Search for something" />
                    </div>
                    <div className="navbar__searchIcon">
                        <img src={search_icon} alt="search_icon" />
                    </div>
                </div> 
            </div>
            );
}

