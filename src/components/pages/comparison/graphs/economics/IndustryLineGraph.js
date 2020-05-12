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
  color: #0066cca5;
  border: 0.5px solid #0066cca5;
  border-radius: 5px;
  background-color: white;
  position: relative;
  bottom: 27px;
  left: 120px;
`;

export default function IndustryLineGraph({ selected }) {
  // Get the current date for the purpose of
  // determining where to place the vertical line divider
  const currentDate = new Date();
  const currentYear = String(currentDate.getFullYear());
  const currentMonth = String(currentDate.getMonth() + 1).padStart(2, "0");
  const currentDay = String(currentDate.getDate()).padStart(2, "0");

  // Get the all the dates
  const dateKeys = Object.keys(
    selected[0]["Industry_Trends"]["Financial Activities"]
  );

  // Get the keys of all the different industries
  const industryKeys = Object.keys(selected[0]["Industry_Trends"]);

  // This state holds all the lines currently displayed on the graph
  // it could change when the user clicks a specific city on the legend for focus view
  const [lines, setLines] = useState([]);

  function formatGraphLines(selected) {
    const arrayOfCitiesWithArraysOfIndustries = selected.map((city) => {
      return industryKeys.map((industryLabel) => {
        return {
          //just city, state = item.name_with_com,
          label: `${industryLabel} ${city.name_with_com}`,
          data: dateKeys.map(
            (dateLabel) => city["Industry_Trends"][industryLabel][dateLabel]
          ),
          fill: false,
          borderColor: city.color,
          pointRadius: 0,
        };
      });
    });
    return [].concat.apply([], arrayOfCitiesWithArraysOfIndustries);
  }

  useEffect(() => {
    setLines(formatGraphLines(selected));
  }, [selected]);

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
    </div>
  );
}
