import React, {Component} from 'react';
import {HorizontalBar} from 'react-chartjs-2';

export default class HorizontalGraph extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData: {
        labels: ["Average rooms", "Median rent ($1k)", "Median household income ($10k)", "Home prices ($100k)"],
        datasets:[
          {
            label:'Boston',
            stack: 'Stack 1',
            data:[
              -4,
              -1.7,
              -9.3,
              -7.293
            ],
            backgroundColor:[
              'rgb(255, 220, 133, 0.7)',
              'rgb(255, 220, 133, 0.7)',
              'rgb(255, 220, 133, 0.7)',
              'rgb(255, 220, 133, 0.7)',
              'rgb(255, 220, 133, 0.7)',
              'rgb(255, 220, 133, 0.7)',
            
            ]
          },
          {
            label: 'New york',
            stack: 'Stack 1',
            data: 
            [
            3.5,
            2.5,
            5.7,
            6.47114
            ],
            backgroundColor: [
                'rgb(105, 195, 255,0.8)',
                'rgb(105, 195, 255, 0.8)',
                'rgb(105, 195, 255, 0.8)',
                'rgb(105, 195, 255, 0.8)',
                'rgb(105, 195, 255, 0.8)',
                'rgb(105, 195, 255, 0.8)',
            ]
          }
        ]
      }
    }
  }
  static defaultProps = {
    displayTitle:false,
    displayLegend: false,
    legendPosition:'top',
    location:'New York'
  }
  render(){
    return (
      <div className="chart" style={{width:"100%"}}>
        <HorizontalBar
          data={this.state.chartData}
          options={{
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            },
            title:{
              display:this.props.displayTitle,
              text:'Boston and '+this.props.location,
              fontSize:15
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            },
            maintainAspectRatio:false,
            scales: {
                  xAxes: [ {
                    
                    display: false,
                    gridLines: {
                      display:false,
                    },
                    scaleLabel: {
                      display: false,
                      labelString: 'Year'
                    },
                  } 
                  ],
                  yAxes: [ {
                    display: false,
                    gridLines: {
                      display:false,
                    },
                    scaleLabel: {
                      display: false,
                      labelString: 'amount',
                      ticks: {
                        beginAtZero: false
                      }
                    },

                  } ]
                }

          }
        
        }
        />
      </div>
    )
  }
  }