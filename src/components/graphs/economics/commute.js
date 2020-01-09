import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import {markerDummyData} from "../../map-components/data";
export default class BarGraph extends Component{
  
  
  componentDidMount(){
    // console.log(markerDummyData)
    let data = markerDummyData[0]
    let labels = []
    let amount = []
    let backgroundColors = []
    let commute = data["Commuting to Work"];
    Object.keys(commute).forEach(function (label) {
      labels.push(label)
      let value = commute[label];
      amount.push(value);
    });
    console.log(labels);
    console.log(amount);

   
    var newState = {...this.state.chartData}
    console.log(newState)
    newState.labels = labels
    newState.datasets[0].data = amount
    // newState.datasets[0].backgroundColor = backgroundColors;
    this.setState({chartData: newState})
  }

  constructor(props){
    console.log(props);
    super(props);
    this.state = {
      chartData: {
        labels: [],
        datasets:[
            {
            fill: false,
            label:'Population',
            data: [],
            backgroundColor:[
                'rgba(235, 136, 52, 0.6)',
                'rgba(202, 0, 42, 0.6)',
                'rgba(15, 102, 555, 0.6)',
                'rgba(13, 102, 25, 0.6)',
                'rgba(107, 74, 23, 0.6)',
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
    location:'Population'
  }
  render(){
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          options={{
            maintainAspectRatio:true,
            title:{
              display:this.props.displayTitle,
              text:' Commute ',
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