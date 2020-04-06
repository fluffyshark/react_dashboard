import React, {Component} from 'react'
import {Line} from 'react-chartjs-2';

class Analytics extends Component {
    constructor(props) {
        super(props);

       
    }

    

    static defaultProps = {
        displayTitle: false,
        displayLegend: false,
        legendPosition: 'bottom'
    }


    
    render() {
        
        const data = {statisticChartData: {
            labels: ['7/12', '8/12', '9/12', '10/12', '11/12', '12/12', '13/12', ''],
            datasets: [
                {
                    label: 'Analytics',
                    lineTension: 0,
                    pointBorderWidth: 0,
                    pointBorderColor: 'rgba(67, 70, 211, 0)',
                    pointRadius: 0,
                    data: [
                       
                        110,   
                        190,    
                        180,   
                        195,    
                        170,   
                        230,    
                        240, 
                        300   
                        

                    ],
                  //  pointBackgroundColor: '#02fdf8',
                   borderColor: 'rgba(67, 70, 211, 1)',
                    backgroundColor: ['rgba(0, 0, 0, 0)']
                    
                },
                {
                    label: 'Analytics',
                    lineTension: 0,
                    pointBorderWidth: 0,
                    pointBorderColor: 'rgba(67, 70, 211, 0)',
                    pointRadius: 0,
                    data: [
                       
                        40,    
                        25,    
                        90,      
                        140,    
                        230,    
                        255,    
                        55,
                        140,     

                    ],
                    pointBackgroundColor: '#02fdf8',
                    borderColor: 'rgba(31, 203, 111, 1)',
                    backgroundColor: ['rgba(0, 0, 0, 0)']
                    
                }
            ]
        }}

        return (
            <div className="chart">
                <Line
                width={685}
                height={220}
                    data={data.statisticChartData}
                    options={{
                        
                        responsive: true,
                        maintainAspectRatio: false,
                        title: {
                            display: this.props.displayTitle,
                            text: 'Annual profit target (%)',
                            fontSize: 25
                        },
                        
                        scales: {
                                
                            xAxes: [{ 
                                  // display:false  (remove lines and text on xAxes)
                                  ticks: {
                                    fontColor: '#c0c6c9', 
                                    fontSize: 9 
                                }, 
                                gridLines: {
                                    drawOnChartArea: true, // remove only yAxes
                                    drawBorder: true,
                                    color: 'rgba(50, 50, 50, 1)',
                                    zeroLineColor: 'rgba(0, 0, 0, 0.2)'
                                    },
                            }
                                
                                ],
                            yAxes: [{
                                ticks: {
                                    fontSize: 9,
                                    max: 300,
                                    min: 0,
                                    stepSize: 100,
                                    fontColor: '#c0c6c9'
                                    
                                   
                                },
                                gridLines: {
                                    drawOnChartArea: true, // remove only yAxes
                                    drawBorder: true,
                                    color: 'rgba(50, 50, 50, 1)', // can be made into an array for individual line coloring
                                    zeroLineColor: 'rgba(50, 50, 50, 1)'
                                    },
                             //  display:false (removes line and numbers)
                            }],
                        },
                        legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                        }
                    }}
                />
            </div>
        );
    }
}

export default Analytics;