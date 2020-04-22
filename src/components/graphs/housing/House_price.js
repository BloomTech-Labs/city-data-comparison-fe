import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
// import selected from "./mockSelected.js";

export default function HousePriceGraph({selected}) {
  // This state contains all the data we will input in the ChartJS line graph as props
  const [graphData, setGraphData] = useState({
    datasets: [],
    labels: []
  });

  // This function formats an array of lines for displaying one city in the line graph component
  // this array goes into the chartjs line graph component's prop called "datasets"
  function formatGraphDataWithOneCity(city) {
    const historicalLabels = [Object.keys(city["Historical Property Value Data"]["Average Home Value"])]
    const predictionLabels = [Object.keys(city["Historical Property Value Data"]["Average Home Value"])]

    const nullArrayWithHistLength = historicalLabels.map(() => null);

    const historicalData = historicalLabels.map((label) => {
      return city["Historical Property Value Data"]["Average Home Value"][label];
    });

    const lowerLimitData = [...nullArrayWithHistoryLength,
      ...predictionLabels.map( dateLabel => city["Historical Property Value Data"]["Lower_Predictions"][dateLabel])
    ];
    lowerLimitData[historicalData.length - 1] = historicalData[historicalData.length - 1];

    const predictionLineData = [...nullArrayWithHistoryLength,
      ...predictionLabels.map( dateLabel => city["Historical Property Value Data"]["Predictions"][dateLabel])
    ];
    predictionLineData[historicalData.length - 1] = historicalData[historicalData.length - 1];

    const upperLimitLineData = [...nullArrayWithHistoryLength,
      ...predictionLabels.map( dateLabel => city["Historical Property Value Data"]["Upper_Predictions"][dateLabel])
    ];
    upperLimitLineData[historicalData.length - 1] = historicalData[historicalData.length - 1];

    // Return a new graph data object
    return {
      labels: [...historicalLabels, ...predictionLabels],
      datasets: [
        // Historical data line
        {
          label: `${city.name_with_com}`,
          fill: false,
          //mapping through selected city then using useEffect hook to figure out which dataset to use, then setting that data with ternary operator.
          data: historicalData,
          borderColor: city.color,
        },
        // Lower limit line
        {
           //just city, state = item.name_with_com,
           label: `${city.name_with_com}`,
           fill: false,
           //mapping through selected city then using useEffect hook to figure out which dataset to use, then setting that data with ternary operator.
           data: lowerLimitData,
           borderColor: city.color,
        },
        //Prediction line
        {
          //just city, state = item.name_with_com,
          label: `${city.name_with_com}`,
          fill: false,
          //mapping through selected city then using useEffect hook to figure out which dataset to use, then setting that data with ternary operator.
          data: predictionData,
          borderColor: city.color,
       },
       // Upper limit line
       {
        //just city, state = item.name_with_com,
        label: `${city.name_with_com}`,
        fill: false,
        //mapping through selected city then using useEffect hook to figure out which dataset to use, then setting that data with ternary operator.
        data: upperLimitLineData,
        borderColor: city.color,
     },
      ]
    }
  }

  // This function formats an array of lines in the line graph for displaying multiple cities,
  // to be placed in the chartjs line graph component's prop called "datasets"
  function formatGraphDataWithMultipleCities(cities) {
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

  // This useEffect formats the graph data and saves it to local state
  // as soon as we get the "selected" cities props
  useEffect(() => {
    setGraphData(formatGraphDataWithMultipleCities(selected));
  }, [selected]);
  

  // This function handles when you click a city's name or color block on the chart legend
  // It moves the component to a detail view displaying just one city
  // It will format the graph to show the accuracy of the prediction
  const handleClickLegend = (e, legendItem) => {
    if (lines.length > 1) {
      setGraphData(formatGraphDataWithOneCity(selected[legendItem.datasetIndex]));
    }
    else {
      setGraphData(formatGraphDataWithMultipleCities(selected))
    }
  };

  // This function handles when you click the Show All button
  // It will move the chart to a view that shows all cities
  // When multiple cities are shown on the accuracy of the prediction for each city isn't shown
  const handleClickShowAll = () => {
    setGraphData(formatGraphLinesWithMultipleCities(selected));
  };


 // This numberCommas utility Function generates commas for the y axis in this case dollar amounts that exceed 3 zeros.
 function numberCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

  return (
    <div className="charts">
      <div
        className="chart-container"
        style={{ position: "relative", width: `100%` }}
      >
        <Line
          data={graphInputData}
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
