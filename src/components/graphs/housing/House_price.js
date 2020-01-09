import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import {markerDummyData} from "../../map-components/data";
export default class BarGraph extends Component{
  componentDidMount(){
    // console.log(markerDummyData)
    let data = markerDummyData[0]
    let labels = []
    let amount = []
    let backgroundColors = []
    let house_price = data["house_price"];


    Object.keys(house_price).forEach(function (label) {
      let value = house_price[label];
      if ( value != null){
       labels.push(label) 
       amount.push(value);

      }
    });
      console.log(labels);
      console.log(amount);

    for( let i = 0; i < data.length; i++){
      backgroundColors[i] = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)
    }
    var newState = {...this.state.chartData}
    console.log(newState)
    newState.labels = labels
    newState.datasets[0].data = amount
    newState.datasets[0].backgroundColor = backgroundColors;
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
            borderColor: "red",
            label:'Population',
            data: [],
            backgroundColor:[]
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
              text:' Average House Price ',
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