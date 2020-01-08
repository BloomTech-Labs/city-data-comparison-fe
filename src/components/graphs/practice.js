import React, {Component} from 'react'
import {bar, line, pie, Bar} from 'react-chartjs-2'
import axios from 'axios'





class Chart extends Component {

    componentDidMount() {
        axios
          .get("http://localhost:5000/api/movies")
          .then(res => {
              console.log(res)
              let labels = []
              let scores = []
              let backgroundColors = []
              
              for( let i = 0; i < res.data.length; i++){
                labels[i]= res.data[i].title
                scores[i]= res.data[i].metascore
                backgroundColors[i] = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6) 

              }
              var newState = {...this.state.chartData}
              console.log(newState)
              newState.labels = labels
              newState.datasets[0].data = scores
              newState.datasets[0].backgroundColor = backgroundColors;
              this.setState({chartData: newState})

            //   this.setState({ movies: res.data }))
          })
          .catch(err => console.log(err.response));
      }



    constructor(props){
        super(props);
        this.state ={
            chartData:{
                labels: [],
                datasets: [
                    {
                        label: "metascore",
                        data:[
                        ],
                        backgroundColor: [ ]
                    }
                ]
            }
        }
    }


    render(){
        return (
            <div className = "chart">
                <Bar
                data={this.state.chartData}
                
                options={{ 
                    maintainAspectRation: false
                }}
                />


            </div>
        )
    }
}
export default Chart;