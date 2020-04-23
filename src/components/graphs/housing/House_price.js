import React, {useState, useEffect} from "react";
import {Line} from "react-chartjs-2";
import selected from "./mockSelected.js";
import styled from 'styled-components';

const Button = styled.button`
  margin: 0 auto;
  text-align: center;
  display: block;
  border: none;
  font-size: .9rem;
  color: #A33A00;
  border: .5px solid #A33A00;
  border-radius: 5px;
  background-color: white;
`

export default function HousePriceGraph() {
  const currentDate = new Date()


  // This gets us all the keys for the Average Home Value Object in the city data from our API
  // This value will be recalculated every time the component updates because props changing triggers
  // a full re-render of the component function
  const keys = Object.keys(selected[0]["Historical Property Value Data"]["Average Home Value"]);
  // Now we filter out any keys whose values don't have historical property data listed
  // We now have an array that represents the range of dates we have data for
  const labels = keys.filter((date) => selected[0]["Historical Property Value Data"]["Average Home Value"][date]);
  // This state holds all the lines currently displayed on the graph
  // it could change when the user clicks a specific city on the legend for focus view
  const [lines, setLines] = useState([]);
  // This function formats the line data for when you click a city on the chart legend
  // this array goes into "lines" array above, which goes into chartjs line graph component's prop called "datasets"
  // datasets is an array representing all the different datasets being compared in the chart
  // https://www.chartjs.org/docs/latest/charts/line.html
  function formatGraphLinesWithOneCity(city) {
    const lineData = labels.map((label) => {return city["Historical Property Value Data"]["Average Home Value"][label];});
    return [
      {
        //just city, state = item.name_with_com,
        label: city.name_with_com, fill: false,
        //mapping through selected city then using useEffect hook to figure out which dataset to use, then setting that data with ternary operator.
        data: lineData, borderColor: city.color,
      },
    ];
  }
  // This function formats an array of lines in the line graph for displaying multiple cities,
  // to be placed in the chartjs line graph component's prop called "datasets"
  function formatGraphLinesWithMultipleCities(cities) {
    return cities.map((city) => {
      const lineData = labels.map((label) => {
        return city["Historical Property Value Data"]["Average Home Value"][label];
      });
      return {
        //just city, state = item.name_with_com,
        label: city.name_with_com,
        fill: false,
        pointRadius: 0,
        //mapping through selected city then using useEffect hook to figure out which dataset to use, then setting that data with ternary operator.
        data: lineData,
        borderColor: city.color,
        pointRadius: labels.map(date => {
          if (new Date(date) < currentDate)
          {
            return 0
          }
          else {
            return 2
          }
        }),
        pointBackgroundColor: "red"
      }
    });
  }
  useEffect(() => {setLines(formatGraphLinesWithMultipleCities(selected));
  }, [selected]);
  const handleClickLegend = (e, legendItem) => {
    if (lines.length > 1) {setLines(formatGraphLinesWithOneCity(selected[legendItem.datasetIndex]));
    } else {setLines(formatGraphLinesWithMultipleCities(selected));}
  };
  const handleClickShowAll = () => {setLines(formatGraphLinesWithMultipleCities(selected));};
  // This numberCommas Function generates commas for the y axis in this case dollar amounts that exceed 3 zeros.
  function numberCommas(x) {return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");}
  return (
    <div className="housing-graph">
      <div
        className="chart-container"
        style={{ position: "relative", width: `100%`}}
      >
        <Line
          data={{labels: labels, datasets: lines,}}
          options={{
            title: {
              display: false,
              text: "house price",
              fontSize: 25,
            },
            legend: {
              display: true,
              position: "bottom",
              onClick: handleClickLegend,
            },
            scales: {
              xAxes: [
                {
                  display: true,
                  gridLines: {display: false},
                  scaleLabel: {
                    display: true,
                    labelString: "Year",
                  },
                },
              ],
              yAxes: [
                {
                  display: true,
                  ticks: {userCallback: (value, index, values) => {return `$${numberCommas(value)}`;}},
                  gridLines: {display: false},
                  scaleLabel: {
                    display: true,
                    labelString: "Amount",
                    ticks: {beginAtZero: false},
                  },
                },
              ],
            },
          }}
        />
      </div>
      {(selected.length > 1) && (lines.length == 1) ?
      <Button onClick={handleClickShowAll}>Show All</Button>: <></>}
      {(selected.length !== 1) && (lines.length > 1) ? <p style={{ margin: "0 auto", textAlign: 'center' }}>
        Click a city on the legend to enter a more detailed view.
      </p> : <></>}
   
    </div>
  );
}
