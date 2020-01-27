import React, {Component} from 'react';
import {Pie} from 'react-chartjs-2';

export default class PieGraph extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData: {
        labels: ["Los Angeles, CA: White", "Los Angeles, CA: Hispanic", "Los Angeles, CA: African American", "Los Angeles, CA: Asian", "Los Angeles, CA: 2+ races", "Los Angeles, CA: Other"],
        datasets:[
          {
            label:'Population',
            data:[
              32.1,
              29.1,
              22,
              13.9,
              1.8,
              1.1
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.7)',
              'rgba(54, 162, 235, 0.7)',
              'rgba(255, 206, 86, 0.7)',
              'rgba(75, 192, 192, 0.7)',
              'rgba(153, 102, 255, 0.7)',
              'rgba(255, 159, 64, 0.7)'
              
            ]
          }
        ]
      }
    }
  }
  static defaultProps = {
    displayTitle:false,
    displayLegend: false,
    legendPosition:'right',
    location:'Population'
  }
  render(){
    return (
      <div className="chart" style={{width: "100%"}}>
        <Pie
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Largest Cities by '+this.props.location,
              fontSize:25
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
                      display: true,
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
                      display: true,
                      labelString: 'amount',
                      ticks: {
                        beginAtZero: true
                      }
                    },

                  } ]
                }
          }}
        />
      </div>
    )
  }
  }