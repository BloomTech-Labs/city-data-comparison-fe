import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import styled from "styled-components";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import { actionColor } from "../../../../../utils/cityColors.js";
import * as ChartAnnotation from "chartjs-plugin-annotation";

const SelectContainer = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  div.MuiInputBase-root {
    width: auto;
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
  // The selected cities, filtered for any cities that don't have industry trend data.
  const [citiesWithData, setCitiesWithData] = useState([]);
  useEffect(() => {
    setCitiesWithData(selected.filter((city) => city["Industry_Trends"]));
  }, [selected]);
  useEffect(() => {
    console.log(citiesWithData.length);
  }, [citiesWithData]);

  // The currently selected industry.
  const [currentIndustry, setCurrentIndustry] = useState(
    "Education and Health Services"
  );

  // The X axis labels, dates available. (These are standardized on the backend, they will always be the same.)
  const [dateKeys, setDateKeys] = useState([]);
  useEffect(() => {
    if (citiesWithData.length > 0) {
      setDateKeys(
        Object.keys(
          citiesWithData.find((city) => city["Industry_Trends"])[
            "Industry_Trends"
          ]["Education and Health Services"]
        )
      );
    }
  }, [citiesWithData]);

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

  // Gets an array of all the industry labels/options.
  const [industryKeys, setIndustryKeys] = useState([]);
  useEffect(() => {
    if (citiesWithData.length > 0) {
      setIndustryKeys(Object.keys(citiesWithData[0]["Industry_Trends"]));
    }
  }, [citiesWithData]);

  // Formats the array of line objects for the graph for filtered citiesWithData
  const [lines, setLines] = useState([]);

  useEffect(() => {
    setLines(formatGraphLines(citiesWithData, currentIndustry, dateKeys));
  }, [citiesWithData, currentIndustry, dateKeys]);

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

  // Formats graph labels with commas.
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
              display: true,
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
            onChange={(e) => setCurrentIndustry(e.target.value)}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            {industryKeys.map((key) => (
              <MenuItem value={key}>{key}</MenuItem>
            ))}
          </Select>
        </SelectContainer>
        {/* If even one of the cities doesn't have data we will display a message. */}
        {selected.some((city) => !city["Industry_Trends"]) ? (
          <p style={{ textAlign: "center" }}>
            No industry trend data available for:{" "}
            {selected
              .filter((city) => !city["Industry_Trends"])
              .map((city) => (
                <>{city["name_with_com"]}</>
              ))}
            .
          </p>
        ) : (
          <></>
        )}
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
