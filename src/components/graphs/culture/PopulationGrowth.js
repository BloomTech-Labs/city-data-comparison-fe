import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import {markerDummyData} from "../../map-components/data";
export default class BarGraph extends Component{
  componentDidMount(){
    // console.log(markerDummyData)
    let data = markerDummyData[0]
    let labels = []
    let amount = []
    // let backgroundColors = []
    let population = data["Population Growth"];
    Object.keys(population).forEach(function (label) {
      labels.push(label)
      let value = population[label];
      amount.push(value);
    });
    console.log(labels);
    console.log(amount);

    // for( let i = 0; i < data.length; i++){
    //   backgroundColors[i] = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)
    // }
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
            borderColor: "blue",
            label:'Population',
            data: [],
            backgroundColor:[
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(235, 136, 52, 0.6)',
                'rgba(7, 74, 23, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(13, 102, 25, 0.6)',
                'rgba(15, 102, 555, 0.6)',
                'rgba(202, 0, 42, 0.6)',
                'rgba(255, 206, 86, 0.6)',
            ]
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
            maintainAspectRatio:true,
            title:{
              display:this.props.displayTitle,
              text:' Population Growth by Year ',
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