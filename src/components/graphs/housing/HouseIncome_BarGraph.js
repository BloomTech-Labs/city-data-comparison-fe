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
    let householdIncome = data["Household Income"];
    
    
    Object.keys(householdIncome).forEach(function (label) {
      labels.push(label)
      let value = householdIncome[label];
      amount.push(value);
      backgroundColors.push(  '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6))
    });
    
    console.log(labels);
    console.log(amount);
    var newState = {...this.state.chartData}
    console.log(newState)
    newState.labels = labels
    newState.datasets[0].data = amount
    newState.datasets[0].backgroundColor = backgroundColors;
    this.setState({chartData: newState})
  }
  // componentDidUpdate(){
  //   console.log(this.props);
  //   let data = this.props.selected
  //   let labels = []
  //   let amount = []
  //   if(data){
  //     console.log('yo my data is');
  //     console.log(data);
  //     if(data.length > 0){
  //       var householdIncome = data[0]["Household Income"];
  //     }
  //     if(householdIncome){
  //       console.log('this is being called);')
  //     Object.keys(householdIncome).forEach(function (label) {
  //       labels.push(label)
  //       let value = householdIncome[label];
  //       amount.push(value);
  //     });
  //     console.log(labels);
  //     console.log(amount);
  //     var newState = {...this.state.chartData}
  //     console.log(newState)
  //     newState.labels = [];
  //     newState.datasets[0].data = [];
  //     newState.labels = labels
  //     newState.datasets[0].data = amount
  //     //newState.datasets[0].backgroundColor = backgroundColors;
  //     this.setState({chartData: newState})
  //     }
  //   }
  // }
  constructor(props){
    console.log(props);
    super(props);
    this.state = {
      chartData: {
        labels: [],
        datasets:[
          {
            label:'Population',
            data: [],
            backgroundColor:[
           
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
        <Bar
          data={this.state.chartData}
          options={{
            maintainAspectRatio:true,
            title:{
              display:this.props.displayTitle,
              text:' Average Household Income ',
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