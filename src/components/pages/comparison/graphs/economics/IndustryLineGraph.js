import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import styled from "styled-components";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import {
  lightenOrDarken,
  actionColor,
} from "../../../../../utils/cityColors.js";
import * as ChartAnnotation from "chartjs-plugin-annotation";

const SelectContainer = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SelectPrompt = styled.p`
  font-size: 1.2rem;
  white-space: nowrap;
  @media screen and (max-width: 600px) {
    display: none;
  }
  color: ${actionColor};
  margin-right: 1.2rem;
`;

export default function IndustryLineGraph({ selected }) {
  // Get the current date for the purpose of
  // determining where to place the vertical line divider
  function formatDate(date) {
    let d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  // The currently selected industry
  const [currentIndustry, setCurrentIndustry] = useState(
    "Education and Health Services"
  );

  const [dateKeys, setDateKeys] = useState([]);
  useEffect(() => {
    setDateKeys(
      Object.keys(
        selected[0]["Industry_Trends"]["Education and Health Services"]
      )
    );
  }, [selected]);

  // We need to find the value in the array of labels closest to current date
  // to place the vertical line divider in the graph to represent
  // where the historical data ends and the future predictions begin
  const [closestValueToToday, setClosestValueToToday] = useState("");

  useEffect(() => {
    // If the dateKeys have been initialized and set, run this code
    if (dateKeys.length > 0) {
      setClosestValueToToday(
        // Using this reducer we loop through the dateKeys X axis label array
        // in order to find the date label on the X axis of the graph
        // that is closest to the current date
        dateKeys.reduce((acc, item) => {
          // Set a value for current date
          const today = new Date();

          // Create a date object for the current item (the date value string) in the label array
          const dateValue = new Date(item);

          // If the currently looped item is closer to today than the accumulated value
          // set the accumulated value to the current item in the array
          return Math.abs(today.valueOf() - dateValue.valueOf()) <
            Math.abs(today.valueOf() - new Date(acc).valueOf())
            ? item
            : acc;
        })
        // The reduce method returns the accumulated value
        // once it has looped through every item in the array
      );
    }
  }, [dateKeys]);

  // Gets an array of all the industry options
  const [industryKeys, setIndustryKeys] = useState([]);
  useEffect(() => {
    setIndustryKeys(Object.keys(selected[0]["Industry_Trends"]));
  }, [selected]);

  // Formats the array of line objects for the graph
  const [lines, setLines] = useState([]);

  useEffect(() => {
    setLines(formatGraphLines(selected, currentIndustry, dateKeys));
  }, [selected, currentIndustry, dateKeys]);

  function formatGraphLines(selectedCities, industry, dates) {
    const lines = selectedCities.map((city) => {
      return {
        label: city.name_with_com,
        data: dates.map(
          (dateLabel) => city["Industry_Trends"][industry][dateLabel]
        ),
        fill: false,
        borderColor: city.color,
        pointRadius: 0,
      };
    });

    return lines;
  }

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
          data={{ labels: dateKeys, datasets: lines }}
          options={{
            plugins: [ChartAnnotation],
            annotation: {
              annotations: [
                {
                  type: "line",
                  mode: "vertical",
                  scaleID: "x-axis-0",
                  // Here we tell the graph annotation plugin where to put the vertical line
                  value: closestValueToToday,
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
              display: false,
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
        <SelectContainer>
          <SelectPrompt>Select an industry:</SelectPrompt>
          <Select
            value={currentIndustry}
            style={{ width: "auto" }}
            onChange={(e) => setCurrentIndustry(e.target.value)}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            {industryKeys.map((key) => (
              <MenuItem value={key}>{key}</MenuItem>
            ))}
          </Select>
        </SelectContainer>
        <p
          style={{
            textAlign: "right",
            fontSize: "10px",
          }}
        >
          Source: Bureau of Labor Statistics
        </p>
      </div>
    </div>
  );
}
