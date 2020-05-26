import React from "react";
import { Line } from "react-chartjs-2";
import GraphContainer from "../ResponsiveGraphContainer";

export default function AvgTempGraph(props) {
  return (
    <GraphContainer>
      <Line
        data={{
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          datasets: props.selected.map((item) => {
            return {
              label: item.name_with_com,
              fill: false,
              data: [
                item["weather"]["tmax"]["TMAX-AVG-1"],
                item["weather"]["tmax"]["TMAX-AVG-2"],
                item["weather"]["tmax"]["TMAX-AVG-3"],
                item["weather"]["tmax"]["TMAX-AVG-4"],
                item["weather"]["tmax"]["TMAX-AVG-5"],
                item["weather"]["tmax"]["TMAX-AVG-6"],
                item["weather"]["tmax"]["TMAX-AVG-7"],
                item["weather"]["tmax"]["TMAX-AVG-8"],
                item["weather"]["tmax"]["TMAX-AVG-9"],
                item["weather"]["tmax"]["TMAX-AVG-10"],
                item["weather"]["tmax"]["TMAX-AVG-11"],
                item["weather"]["tmax"]["TMAX-AVG-12"],
              ],

              backgroundColor: item.color,
              borderColor: item.color,
            };
          }),
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          title: {
            display: false,
            text: "weather",
            fontSize: 25,
          },
          legend: {
            display: false,
            position: "top",
          },
          scales: {
            xAxes: [
              {
                display: true,
                gridLines: {
                  display: false,
                },
                scaleLabel: {
                  display: false,
                  labelString: "Average weather",
                },
              },
            ],
            yAxes: [
              {
                display: true,
                gridLines: {
                  display: false,
                },
                scaleLabel: {
                  display: true,
                  labelString: "Temperature (°F)",
                  ticks: {
                    beginAtZero: true,
                  },
                },
              },
            ],
          },
        }}
      />
    </GraphContainer>
  );
}
