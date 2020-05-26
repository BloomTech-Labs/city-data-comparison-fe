import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import GraphContainer from "../ResponsiveGraphContainer";

import useMediaQuery from "@material-ui/core/useMediaQuery";

import { actionColor } from "../../../../../utils/cityColors.js";
import * as ChartAnnotation from "chartjs-plugin-annotation";

export default function AverageHomePrices({ selected }) {
  const mobile = useMediaQuery("(max-width:600px)");

  // Get the current date for the purpose of
  // determining where to place the vertical line divider
  const currentDate = new Date();
  const currentYear = String(currentDate.getFullYear());
  const currentMonth = String(currentDate.getMonth() + 1).padStart(2, "0");

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

  // This function formats an array of lines in the line graph for displaying multiple cities,
  // to be placed in the chartjs line graph component's prop called "datasets"
  function formatGraphLines(cities, keys) {
    return cities.map((city) => {
      const lineData = keys.map((label) => {
        return city["Historical Property Value Data"]["Forecast"][label];
      });
      return {
        //just city, state = item.name_with_com,
        label: city.name_with_com,
        fill: false,
        //mapping through selected city then using useEffect hook to figure out which dataset to use, then setting that data with ternary operator.
        data: lineData,
        borderColor: city.color,
        pointRadius: 0,
        pointBackgroundColor: "white",
      };
    });
  }

  useEffect(() => {
    setLines(formatGraphLines(selected, dateKeys));
  }, [selected, dateKeys]);

  // This numberCommas Function generates commas for the y axis in this case dollar amounts that exceed 3 zeros.
  function numberCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <GraphContainer size={1}>
      <Line
        plugins={[ChartAnnotation]}
        data={{ labels: dateKeys, datasets: lines }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
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
                ticks: {
                  maxTicksLimit: mobile ? 12 : 24,
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
                gridLines: { display: true },
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
    </GraphContainer>
  );
}
