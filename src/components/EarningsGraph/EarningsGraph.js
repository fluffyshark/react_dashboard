import React from 'react';
import mastercardIcon from './mastercard_icon.png';
import GraphEarnings from './graphEarnings';

export default function EarningsGraph() {
    return (
        <div className="earningsGraph">
            <p className="earningsGraph__title">Earnings</p>
            <p className="earningsGraph__number">$9249.81</p>
            <img src={mastercardIcon} alt="mastercard" />
            <div className="earningsGraph__graph_container">
                <GraphEarnings />
            </div>
        </div>
    );
}

