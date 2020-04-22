import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import selected from "./mockSelected.js";

export default function HousePriceGraph() {
  const labels = Object.keys(
    selected[0]["Historical Property Value Data"]["Average Home Value"]
  );

  // This decides holds all the lines currently displayed on the graph
  // it could change when the user clicks a specific city on the legend for focus view
  const [lines, setLines] = useState([]);

  // This numberCommas Function generates commas for the y axis in this case dollar amounts that exceed 3 zeros.
  function numberCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }


  // This function formats an array of lines for displaying one city in the line graph component
  // this array goes into the chartjs line graph component's prop called "datasets"
  function formatGraphLinesWithOneCity(city) {
    const lineData = labels.map((label) => {
      return city["Historical Property Value Data"]["Average Home Value"][label];
    });
    return [
      {
        //just city, state = item.name_with_com,
        label: city.name_with_com,
        fill: false,
        //mapping through selected city then using useEffect hook to figure out which dataset to use, then setting that data with ternary operator.
        data: lineData,
        borderColor: city.color,
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
        //mapping through selected city then using useEffect hook to figure out which dataset to use, then setting that data with ternary operator.
        data: lineData,
        borderColor: city.color,
      };
    });
  }

  useEffect(() => {
    setLines(formatGraphLinesWithMultipleCities(selected));
  }, [selected]);
  

  const handleClickLegend = (e, legendItem) => {
    if (lines.length > 1) {
      setLines(formatGraphLinesWithOneCity(selected[legendItem.datasetIndex]));
    }
    else {
      setLines(formatGraphLinesWithMultipleCities(selected))
    }
  };

  const handleClickShowAll = () => {
    setLines(formatGraphLinesWithMultipleCities(selected));
  };

  // useEffect(() => {
  //     let data = selected[0];
  //     if (data["Historical Property Value Data"]["Average Home Value"]) {
  //         setLabels(Object.keys(data["Historical Property Value Data"]["Average Home Value"]))
  //     } else if (data["Historical Property Value Data"]["Four Bedroom Houses"]){
  //         setLabels(Object.keys(data["Historical Property Value Data"]["Four Bedroom Houses"]))
  //     } else if (data["Historical Property Value Data"]["Three Bedroom Houses"]){
  //       setLabels(Object.keys(data["Historical Property Value Data"]["Three Bedroom Houses"]))
  //     } else if (data["Historical Property Value Data"]["Two Bedroom Houses"]){
  //       setLabels(Object.keys(data["Historical Property Value Data"]["Two Bedroom Houses"]))
  //     } else {
  //       setLabels(["This data is currently unavailable."])
  //     }
  // }, [selected])

  return (
    <div className="charts">
      <div
        className="chart-container"
        style={{ position: "relative", width: `100%` }}
      >
        <Line
          data={{
            labels: labels,
            datasets: lines,
          }}
          options={{
            title: {
              display: false,
              text: "house price",
              fontSize: 25,
            },
            legend: {
              display: true,
              position: "top",
              onClick: handleClickLegend,
            },
            scales: {
              xAxes: [
                {
                  display: true,
                  gridLines: {
                    display: false,
                  },
                  scaleLabel: {
                    display: true,
                    labelString: "Year",
                  },
                },
              ],
              yAxes: [
                {
                  display: true,
                  ticks: {
                    userCallback: (value, index, values) => {
                      return `$${numberCommas(value)}`;
                    },
                  },
                  gridLines: {
                    display: false,
                  },
                  scaleLabel: {
                    display: true,
                    labelString: "Amount",
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                },
              ],
            },
          }}
        />
      </div>
      <button onClick={handleClickShowAll}>Show All Cities</button>
    </div>
  );
}
