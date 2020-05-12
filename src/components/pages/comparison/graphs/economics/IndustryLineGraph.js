import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import styled from "styled-components";
import Select from "../../../../select/Select.js";
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
  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  // The currently selected industry
  const [currentIndustry, setCurrentIndustry] = useState(
    "Financial Activities"
  );

  const [dateKeys, setDateKeys] = useState([]);
  useEffect(() => {
    setDateKeys(
      Object.keys(selected[0]["Industry_Trends"]["Financial Activities"])
    );
  }, [selected]);

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
            annotation: {
              annotations: [
                {
                  type: "line",
                  mode: "vertical",
                  scaleID: "x-axis-0",
                  // value: `${yyyy}-${mm}-${dd}`,
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
          }}
        >
          <Select
            value={currentIndustry}
            onChange={(e) => setCurrentIndustry(e.target.value)}
            options={industryKeys}
          />
          <p style={{ textAlign: "right", fontSize: "10px" }}>
            Source: Bureau of Labor Statistics
          </p>
        </div>
      </div>
    </div>
  );
}
