import React, {Component} from 'react';
import {Radar, Chart, } from 'react-chartjs-2';



export default class RadarGraph extends Component{
  constructor(props){
    super(props);
    this.state = {
        chartData: {
            labels: ["Cost Of Living", "Job Prospects", "Housing", "Weather", "Safety", "Entertainment"],
            datasets: [{
              label: "San Diego",
              backgroundColor: "rgba(200,0,0,0.2)",
              data: [65, 75, 70, 80, 60, 80]
            }, {
              label: "Los Angeles",
              backgroundColor: "rgba(0,0,200,0.2)",
              data: [54, 65, 60, 70, 70, 75]
            }]
          }
    }
  }
   radarChart = new Chart( {
    type: 'radar',
    
  });

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    location:'Score'
  }

  render(){
    return (
      <div className="chart">
        <Radar
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Cities Comparison by '+this.props.location,
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
      </div>
    )
  }
  }