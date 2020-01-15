import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

export default class LineGraph extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData: {
        labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New BedFord'],
        datasets:[
          {
            fill: false,
            borderColor: "green",
            label: "Boston",
            data:[
              647594,
              181045,
              153060,
              106519,
              105162,
              95072
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ],
          },
          {
            label: 'Worcester',
            fill: false,
      backgroundColor: "rgba(54, 162, 235, 0.6)",
      borderColor: "red",
      data: [
        617524,
        381045,
        653060,
        206519,
        105162,
        950720]
          },
          {
        label: 'Springfield',
        fill: false,
        borderColor: "purple",
        backgroundColor: "rgba(153, 102, 255, 0.6)",
        data: [
          67514,
          481045,
          253060,
          806519,
          905162,
          50720]
            
          }

        ]
      }
    }
  }
  static defaultProps = {
    displayTitle:true,
    displayLegend: false,
    legendPosition:'top',
    location:'Population'
  }
  render(){
    return (
      <div className="chart">
        

        <Line
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Largest Cities By '+this.props.location,
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