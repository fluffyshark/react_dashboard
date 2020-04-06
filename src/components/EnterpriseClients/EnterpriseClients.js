import React from 'react';
import enterprise_icon from './enterprise_icon.png';

export default function EnterpriseClients() {
    return (
        <div className="enterpriseClients">
            <img src={enterprise_icon} alt="enterpriseIcon" />
            <p className="enterpriseClients__number">85<em> +</em></p>
            <p className="enterpriseClients__description">Enterprise<br />Clients</p>
            <p className="enterpriseClients__line">___</p>
        </div>
            );
}

