import React, {Component} from 'react';
import {Polar, Chart, } from 'react-chartjs-2';



export default class PolarGraph extends Component{
  constructor(props){
    super(props);
    this.state = {
         birdsData: {
            labels: ["Spring","Summer","Fall","Winter"],
            datasets: [{
              data: [1200, 1700, 800, 200],
              backgroundColor: [
                "rgba(255, 0, 0, 0.5)",
                "rgba(100, 255, 0, 0.5)",
                "rgba(200, 50, 255, 0.5)",
                "rgba(0, 100, 255, 0.5)"
              ]
            }]
          }
    }
  }
   PolarChart = new Chart( {
    type: 'polorArea',
    
    
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
        <Polar
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