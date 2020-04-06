import React from 'react';
import greenArrow from './green_arrow.png';
import GraphStatistics from './graphStatistics';

export default function StatisticGraph() {
    return (
        <div className="statisticGraph">
            <p className="statisticGraph__title">Statistics</p>
            <img src={greenArrow} alt="green_arrow" />
            <div className="statisticGraph__graph_container">
                <GraphStatistics />
            </div>
            <div className="statisticGraph__green_legend"></div>
            <p className="statisticGraph__green_text">Received Amount</p>
            <div className="statisticGraph__blue_legend"></div>
            <p className="statisticGraph__blue_text">Transferred Amount</p>
        </div>
    );
}

