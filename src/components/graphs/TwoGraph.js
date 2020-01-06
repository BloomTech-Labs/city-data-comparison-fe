import React, {Component} from 'react';
import {HorizontalBar} from 'react-chartjs-2';

export default class HorizontalGraph extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData: {
        labels: ["Cost Of Living", "Job Prospects", "Housing", "Weather", "Safety", "Entertainment"],
        datasets:[
          {
            label:'Boston',
            stack: 'Stack 1',
            data:[
              -6175,
              -8810,
              -3530,
              -1265,
              -4151,
              -9507
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(255, 99, 132, 0.6)',
            
            ]
          },
          {
            label: 'New york',
            stack: 'Stack 1',
            data: 
            [
            6751,
            4810,
            2530,
            8065,
            9051,
            5070
            ],
            backgroundColor: [
                'rgba(153, 102, 255, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(153, 102, 255, 0.6)',
            ]
          }
        ]
      }
    }
  }
  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'top',
    location:'New York'
  }
  render(){
    return (
      <div className="chart">
        <HorizontalBar
          data={this.state.chartData}
          options={{
            layout: {
                padding: {
                    left: 50,
                    right: 50,
                    top: 150,
                    bottom: 50
                }
            },
            title:{
              display:this.props.displayTitle,
              text:'Boston and '+this.props.location,
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