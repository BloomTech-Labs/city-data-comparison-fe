import React from "react";
import { HorizontalBar } from "react-chartjs-2";
import GraphContainer from "../ResponsiveGraphContainer";

export default function Diversity({ selected }) {
  return (
    <GraphContainer>
      <HorizontalBar
        data={{
          labels: [
            "White",
            "Hispanic or Latino",
            "African American",
            "Asian",
            "American Indian",
            "Pacific Islander",
            "Two or more races",
            "Other",
          ],
          datasets: selected.map((item) => {
            return {
              label: item.name_with_com,
              data: [
                item["Ethnicity"]["White"],
                item["Ethnicity"]["Hispanic or Latino"],
                item["Ethnicity"]["African American"],
                item["Ethnicity"]["Asian"],
                item["Ethnicity"]["American Indian"],
                item["Ethnicity"]["Pacific Islander"],
                item["Ethnicity"]["Two or more races"],
                item["Ethnicity"]["other race"],
              ],
              backgroundColor: item.color,
            };
          }),
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          title: {
            display: false,
            text: "Ethnicity",
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
                  display: true,
                  labelString: "Percent",
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
                  display: false,
                  labelString: "Percent",
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
