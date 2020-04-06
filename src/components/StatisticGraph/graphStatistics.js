import React, {Component} from 'react'
import {HorizontalBar} from 'react-chartjs-2';



class GraphStatistics extends Component {
    constructor(props) {
        super(props);

        
    }

    static defaultProps = {
        displayTitle: false,
        displayLegend: false,
        legendPosition: 'bottom'
    }


    
    render() {
       

        const statisticChart = {statChart: {
            labels: ['Fri', 'Thu', 'Wed', 'Tue', 'Mon'],
            datasets: [
                {
                    label: 'Analytics',
                    pointBorderWidth: 0,
                    pointBorderColor: 'rgba(67, 70, 211, 0)',
                    pointRadius: 0,
                    data: [
                       
                        200,   
                        500,    
                        200,   
                        300,    
                        600,   
                        
                        
                    ],
                  //  pointBackgroundColor: '#02fdf8',
                  borderColor: 'rgba(31, 203, 111, 1)',
                    backgroundColor: ['#535ada','#19a75b','#535ada','#19a75b','#19a75b']
                    
                    
                },
                
            ]
        }
    }



        return (
            <div className="chart">
                <HorizontalBar
             //   width={685}  
             //   height={200}
                    data={statisticChart.statChart}
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
                                    fontSize: 8 ,
                                    max: 600,
                                    min: 0,
                                    stepSize: 100,
                                }, 
                                gridLines: {
                                    drawOnChartArea: true, // remove only yAxes
                                    drawBorder: false,
                                    color:  ['rgba(38, 43, 48, 1)','rgba(38, 43, 48, 1)','rgba(38, 43, 48, 1)','rgba(38, 43, 48, 1)','rgba(38, 43, 48, 1)','rgba(38, 43, 48, 1)','rgba(38, 43, 48, 1)'],
                                    lineWidth: 1,
                                    zeroLineColor: 'rgba(38, 43, 48, 1)',
                                    },
                            }
                                
                                ],
                            yAxes: [{
                                barThickness: 8,
                                ticks: {
                                    fontSize: 9,
                                    fontColor: '#c0c6c9',
                                },
                                gridLines: {
                                    drawOnChartArea: true, // remove only yAxes
                                    drawBorder: true,
                                    color: 'rgba(50, 50, 50, 0)', // can be made into an array for individual line coloring
                                    zeroLineColor: '#20252a',
                                   
                                    
                                    
                                    },
                             //  display:false (removes line and numbers)
                            }],
                        },
                        legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition, 
                        }
                    }}
                />
            </div>
        );
    }
}

export default GraphStatistics;