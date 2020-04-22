import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
// import lightenOrDarken from '../'
// import selected from "./mockSelected.js";

export default function HousePriceGraph({ selected }) {
  // This state contains all the data we will input in the ChartJS line graph as props
  const [graphData, setGraphData] = useState({
    datasets: [],
    labels: [],
    isDetailView: false
  });

  // This function formats an array of lines for displaying one city in the line graph component
  // this array goes into the chartjs line graph component's prop called "datasets"
  function formatGraphDataWithOneCity(city) {
    // We need an array of all the dates for historical data
    const historicalLabels = [
      Object.keys(city["Historical Property Value Data"]["Average Home Value"]),
    ];
    // and an array of all the dates we have values for in the predictions
    const predictionLabels = [
      Object.keys(city["Historical Property Value Data"]["Predictions"]),
    ];
    // later we will combine these two arrays of labels to create all the labels for the X axis on the graph

    // now we create an array of null values with the same length as the historical label array
    const nullArrayWithHistoryLength = historicalLabels.map(() => null);

    // We map through the historical data to create an array of the historical values
    const historicalData = historicalLabels.map((label) => {
      return city["Historical Property Value Data"]["Average Home Value"][
        label
      ];
    });

    // Then we create data for a line representing the lower estimate of the prediction
    // each line for the predictions must have null on the indexes correspinding to dates that correspond to historical data
    const lowerLimitData = [
      ...nullArrayWithHistoryLength,
      ...predictionLabels.map(
        (dateLabel) =>
          city["Historical Property Value Data"]["Lower_Predictions"][dateLabel]
      ),
    ];
    // and we add the data point where the prediction data overlaps with the historical data so the lines meet
    lowerLimitData[historicalData.length - 1] =
      historicalData[historicalData.length - 1];

    // Then we do the same to create data for a line representing the middle estimate of the predictions
    const predictionLineData = [
      ...nullArrayWithHistoryLength,
      ...predictionLabels.map(
        (dateLabel) =>
          city["Historical Property Value Data"]["Predictions"][dateLabel]
      ),
    ];
    predictionLineData[historicalData.length - 1] =
      historicalData[historicalData.length - 1];

    // Then data for a line representing the upper estimate of the predictions
    const upperLimitLineData = [
      ...nullArrayWithHistoryLength,
      ...predictionLabels.map(
        (dateLabel) =>
          city["Historical Property Value Data"]["Upper_Predictions"][dateLabel]
      ),
    ];
    upperLimitLineData[historicalData.length - 1] =
      historicalData[historicalData.length - 1];

    // Return a new graph data object
    return {
      isDetailView: true,
      // This will be the array of labels for each item on the X axis
      labels: [...historicalLabels, ...predictionLabels],
      //This will be an array that contains each objects for styling of each line on the graph
      datasets: [
        // Historical data line
        {
          label: `${city.name_with_com}`,
          fill: false,
          data: historicalData,
          borderColor: city.color,
        },
        // Lower limit line
        {
          label: `${city.name_with_com}`,
          fill: false,
          data: lowerLimitData,
          borderColor: city.color,
        },
        //Prediction line
        {
          label: `${city.name_with_com}`,
          fill: false,
          data: predictionLineData,
          borderColor: city.color,
        },
        // Upper limit line
        {
          label: `${city.name_with_com}`,
          fill: false,
          data: upperLimitLineData,
          borderColor: city.color,
        },
      ],
    };
  }

  // This function formats an array of lines in the line graph for displaying multiple cities,
  // to be placed in the chartjs line graph component's prop called "datasets"
  function formatGraphDataWithMultipleCities(cities) {
    // We need an array of all the dates for historical data
    const historicalLabels = [
      Object.keys(
        cities[0]["Historical Property Value Data"]["Average Home Value"]
      ),
    ];
    // and an array of all the dates we have values for in the predictions
    const predictionLabels = [
      Object.keys(cities[0]["Historical Property Value Data"]["Predictions"]),
    ];
    // later we will combine these two arrays of labels to create all the labels for the X axis on the graph

    // now we create an array of null values with the same length as the historical label array
    const nullArrayWithHistoryLength = historicalLabels.map(() => null);

    let datasets = [];
    // This function creates a
    cities.forEach((city) => {
      const historicalData = historicalLabels.map((label) => {
        return city["Historical Property Value Data"]["Average Home Value"][
          label
        ];
      });
      const predictionLineData = [
        ...nullArrayWithHistoryLength,
        ...predictionLabels.map(
          (dateLabel) =>
            city["Historical Property Value Data"]["Predictions"][dateLabel]
        ),
      ];
      predictionLineData[historicalData.length - 1] =
        historicalData[historicalData.length - 1];

      // Historical data line
      datasets.push({
        label: `${city.name_with_com}`,
        fill: false,
        data: historicalData,
        borderColor: city.color,
      });
      //Prediction line
      datasets.push({
        label: `${city.name_with_com}`,
        fill: false,
        data: predictionLineData,
        borderColor: city.color,
      });
    });

    return {
      isDetailView: false,
      labels: [...historicalLabels, ...predictionLabels],
      datasets: datasets,
    };
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
    if (!graphData.isDetailView) {
      console.log(legendItem)
      setGraphData(
        formatGraphDataWithOneCity(selected.find(city => city.name_with_com === legendItem.text)) // needs to go by city ID? city name probably
      );
    } else {
      setGraphData(formatGraphDataWithMultipleCities(selected));
    }
  };

  // This function handles when you click the Show All button
  // It will move the chart to a view that shows all cities
  // When multiple cities are shown on the accuracy of the prediction for each city isn't shown
  const handleClickShowAll = () => {
    setGraphData(formatGraphDataWithMultipleCities(selected));
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
        {graphData.datasets ? (
          <button onClick={handleClickShowAll}>Show All Cities</button>
        ) : (
          <></>
        )}
        <Line
          data={graphData}
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
    </div>
  );
}
