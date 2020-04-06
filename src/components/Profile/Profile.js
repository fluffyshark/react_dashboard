import React from 'react';
import profileImg from './profile_img.png';
import bell_icon from './bell_icon.png';

export default function Profile() {
    return (
        <div className="profile">
            <img src={bell_icon}  alt="bell_icon" className="profile__bell_icon"/>
            <p className="profile__language">EN</p>
            <p className="profile__name">Canada Master</p>
            <p className="profile__title">Super Admin</p>
            <img src={profileImg} alt="prodile_picture" className="profile__img" />
        </div>
    );
}

