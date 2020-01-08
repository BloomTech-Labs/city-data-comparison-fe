import React, {Component} from 'react';
import {Pie} from 'react-chartjs-2';

export default class EducationGraph extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData: {
        labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New BedFord'],
        datasets:[
          {
            label:'Population',
            data:[
              617594,
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
            ]
          }
        ]
      }
    }
  }
  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    location:'Population'
  }

 
  render(){
    return (
      <div className="chart">
        {this.props.edData.map( item => 
          <Pie
            key={item._id}
            data={{
              labels: ["9th to 12th grade no diploma", "Associate's degree", "Bachelor's degree", "Graduate degree", "High school", "Less than 9th grade", "Some college no degree"],
              datasets:[
                {
                  label:'Population',
                  data:[
                    item["Educational Attainment"]["9th to 12th grade no diploma"],
                    item["Educational Attainment"]["Associate's degree"],
                    item["Educational Attainment"]["Bachelor's degree"],
                    item["Educational Attainment"]["Graduate degree"],
                    item["Educational Attainment"]["High school"],
                    item["Educational Attainment"]["Less than 9th grade"],
                    item["Educational Attainment"]["Some college no degree"]
                  ],
                  backgroundColor:[
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(255, 99, 132, 0.6)'
                  ]
                }
              ]
            }}
            options={{
              title:{
                display:this.props.displayTitle,
                text:'Educational Breakdown For '+ item.name.replace(" city", ""),
                fontSize:25
              },
              legend:{
                display:this.props.displayLegend,
                position:this.props.legendPosition
              }
            }}
          /> 
        )}
      </div>
    )
  }
  }