import React from "react";
import { Bar } from "react-chartjs-2";
import GraphContainer from "../ResponsiveGraphContainer";

export default function VacancyGraph(props) {
  return (
    <>
      <GraphContainer size={0.7}>
        <Bar
          data={{
            labels: ["Homeowner", "Rental"],
            datasets: props.edData.map((item) => {
              return {
                label: item.name_with_com,
                data: [
                  item["Vacancy Rate"]["Homeowner vacancy rate"],
                  item["Vacancy Rate"]["Rental vacancy rate"],
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
              text: "Vacancy",
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
                    labelString: "Rate",
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
    </>
  );
}
