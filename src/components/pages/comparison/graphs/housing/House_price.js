import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import styled from "styled-components";
import {
  lightenOrDarken,
  actionColor,
} from "../../../../../utils/cityColors.js";
import * as ChartAnnotation from "chartjs-plugin-annotation";

const Button = styled.button`
  margin: 0 auto;
  text-align: center;
  display: block;
  border: none;
  font-size: 0.9rem;
  color: #0066CCa5;
  border: 0.5px solid #0066CCa5;
  border-radius: 5px;
  background-color: white;
  position: relative;
  bottom: 27px;
  left: 120px;
`;

export default function HousePriceGraph({ selected }) {
  // Get the current date for the purpose of
  // determining where to place the vertical line divider
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth() + 1;
  currentMonth = `${currentMonth}`;
  if (currentMonth.length == 1) {
    currentMonth = "0" + currentMonth;
  }

  //This initializes a variable that contains all the dates of the historical data
  //that will be turned into labels for the housing prices graph
  const [dateKeys, setDateKeys] = useState([]);

  useEffect(() => {
    //This logic will check the historical data and check to see which of the objects are the longest
    //The largest object will have the dates that go the furthest back, thus the greatest length
    //We then set dateKeys to that longest array of keys so that our graph labels are correct
    let indexOfCityWithMostDates = null;
    let longestLength = 0;
    selected.forEach((item, index) => {
      if (
        Object.keys(item["Historical Property Value Data"]["Forecast"]).length >
        longestLength
      ) {
        longestLength = Object.keys(
          item["Historical Property Value Data"]["Forecast"]
        ).length;
        indexOfCityWithMostDates = index;
      }
    });

    setDateKeys(
      Object.keys(
        selected[indexOfCityWithMostDates]["Historical Property Value Data"][
          "Forecast"
        ]
      ).filter(
        (date) =>
          selected[indexOfCityWithMostDates]["Historical Property Value Data"][
            "Forecast"
          ][date]
      )
    );
  }, [selected]);

  // This state holds all the lines currently displayed on the graph
  // it could change when the user clicks a specific city on the legend for focus view
  const [lines, setLines] = useState([]);
  // This function formats the line data for when you click a city on the chart legend
  // this array goes into "lines" array above, which goes into chartjs line graph component's prop called "datasets"
  // datasets is an array representing all the different datasets being compared in the chart
  // https://www.chartjs.org/docs/latest/charts/line.html
  function formatGraphLinesWithOneCity(city, keys) {
    const lineData = keys.map((label) => {
      return city["Historical Property Value Data"]["Forecast"][label];
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
  function formatGraphLinesWithMultipleCities(cities, keys) {
    return cities.map((city) => {
      const lineData = keys.map((label) => {
        return city["Historical Property Value Data"]["Forecast"][label];
      });
      return {
        //just city, state = item.name_with_com,
        label: city.name_with_com,
        fill: false,
        pointRadius: 0,
        //mapping through selected city then using useEffect hook to figure out which dataset to use, then setting that data with ternary operator.
        data: lineData,
        borderColor: city.color,
        pointRadius: keys.map((date) => {
          if (new Date(date) > currentDate) {
            return 0;
          } else {
            return 2;
          }
        }),
        pointBackgroundColor: "white",
      };
    });
  }

  useEffect(() => {
    setLines(formatGraphLinesWithMultipleCities(selected, dateKeys));
  }, [selected, dateKeys]);

  const handleClickLegend = (e, legendItem) => {
    if (lines.length > 1) {
      setLines(
        formatGraphLinesWithOneCity(selected[legendItem.datasetIndex], dateKeys)
      );
    } else {
      setLines(formatGraphLinesWithMultipleCities(selected, dateKeys));
    }
  };

  const handleClickShowAll = () => {
    setLines(formatGraphLinesWithMultipleCities(selected, dateKeys));
  };

  // This numberCommas Function generates commas for the y axis in this case dollar amounts that exceed 3 zeros.
  function numberCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className="housing-graph">
      <div
        className="chart-container"
        style={{ position: "relative", width: `100%` }}
      >
        <Line
          plugins={[ChartAnnotation]}
          data={{ labels: dateKeys, datasets: lines }}
          options={{
            annotation: {
              annotations: [
                {
                  type: "line",
                  mode: "vertical",
                  scaleID: "x-axis-0",
                  value: `${currentYear}-${currentMonth}`,
                  borderColor: `${actionColor}`,
                  label: {
                    content: "TODAY",
                    enabled: true,
                    position: "top",
                  },
                },
              ],
            },
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
                  gridLines: { display: false },
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
                  gridLines: { display: false },
                  scaleLabel: {
                    display: true,
                    labelString: "Amount",
                    ticks: { beginAtZero: false },
                  },
                },
              ],
            },
          }}
        />
      </div>
      {selected.length > 1 && lines.length == 1 ? (
        <Button onClick={handleClickShowAll}>Show All</Button>
      ) : (
        <></>
      )}
      {selected.length !== 1 && lines.length > 1 ? (
        <p style={{ margin: "0 auto", textAlign: "center" }}>
          Click a city on the legend to enter a more detailed view.
        </p>
      ) : (
        <></>
      )}
    </div>
  );
}
