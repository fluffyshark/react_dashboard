import React from 'react';
import arrow_btn_icon from './arrow_btn_icon.png';
import open_projects_icon from './open_projects_icon.png';

export default function OpenProjects() {
    return (
        <div className="openProjects animated fadeIn">
            <img src={open_projects_icon} alt="open_projects_icon" className="openProjects__icon" />
            <p className="openProjects__title-1">Open Projects</p>
            <p className="openProjects__number">829</p>
            <img src={arrow_btn_icon} alt="arrow_btn_icon" className="openProjects__arrow" />
        </div>
    );
}

