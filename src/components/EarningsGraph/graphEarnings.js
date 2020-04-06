import React, {Component} from 'react'
import {Line} from 'react-chartjs-2';



class GraphEarnings extends Component {
    constructor(props) {
        super(props);

        
    }

    static defaultProps = {
        displayTitle: false,
        displayLegend: false,
        legendPosition: 'bottom'
    }


    
    render() {


        const earnChart = {earningsChart: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [
                {
                    label: 'Analytics',
                    lineTension: 0,
                    pointBorderWidth: 0,
                    pointBorderColor: 'rgba(67, 70, 211, 0)',
                    pointRadius: 0,
                    data: [
                       
                        110,   
                        50,    
                        200,   
                        20,    
                        170,   
                        50,    
                        240, 
                        300   
                        

                    ],
                  //  pointBackgroundColor: '#02fdf8',
                   borderColor: 'rgba(31, 203, 111, 1)',
                    backgroundColor: ['rgba(0, 0, 0, 0)']
                    
                },
                
            ]
        }
    }


       
        return (
            <div className="chart">
                <Line
              //  width={685}  responsive
              //  height={100}
                    data={earnChart.earningsChart}
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
                                    fontColor: '#808080', 
                                    fontSize: 12 ,
                                    padding: 20,
                                }, 
                                gridLines: {
                                    drawOnChartArea: true, // remove only yAxes
                                    drawBorder: false,
                                    color:  ['rgba(38, 43, 48, 1)','rgba(38, 43, 48, 1)','rgba(38, 43, 48, 1)','rgba(84, 88, 93, 1)','rgba(38, 43, 48, 1)','rgba(38, 43, 48, 1)','rgba(38, 43, 48, 1)'],
                                    lineWidth: 2,
                                    zeroLineColor: 'rgba(38, 43, 48, 1)',
                                    },
                            }
                                
                                ],
                            yAxes: [{
                                ticks: {
                                    fontSize: 9,
                                    max: 300,
                                    min: 0,
                                    stepSize: 100,
                                    fontColor: '#20252a',
                                },
                                gridLines: {
                                   
                                    drawOnChartArea: true, // remove only yAxes
                                    drawBorder: false,
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

export default GraphEarnings;