import React, {Component} from 'react';
import {Bar, Chart} from 'react-chartjs-2';



export default class RadarGraph extends Component{
  constructor(props){
    super(props);
    this.state = {
        chartData: {
            labels: ["Cost of living score", "Job prospects score", "Housing score", "Weather score", "Safety score", "Entertainment score"],
            datasets: [{
              label: "Austen, TX",
              backgroundColor: 'rgb(179, 142, 255, 0.8)',
              data: [65, 75, 70, 80, 60, 80]
            }, {
              label: "Seattle, WA",
              backgroundColor: "rgb(0, 191, 165, 0.8)",
              data: [54, 65, 60, 70, 70, 75]
            }]
          }
    }
  }
   radarChart = new Chart( {
    type: 'bar',
    
  });

  static defaultProps = {
    displayTitle:false,
    displayLegend: false,
    legendPosition:'right',
    location:'Score'
  }

  render(){
    return (
      <div className="chart" style={{width:"100%"}}>
        <Bar
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Cities Comparison by '+this.props.location,
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition,
              maintainAspectRatio:false,
            },
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