import React from 'react';
import arrowIcon from './arrow-icon.svg';
import Analytics from './graphAnalytics';

export default function AnalyticsGraph() {
    return (
        <div className="analyticsGraph">
            <p className="analyticsGraph__title">Analytics</p>
            <div className="analyticsGraph__btn">
                <p>21.02 - 28.02</p>
                <img src={arrowIcon} alt="arrowIcon" />
            </div>
            <div className="analyticsGraph__chart">
                <Analytics />
            </div>
        </div>
    );
}

