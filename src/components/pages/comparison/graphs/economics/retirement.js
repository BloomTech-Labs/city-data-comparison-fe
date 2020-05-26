import React from "react";
import { HorizontalBar } from "react-chartjs-2";
import GraphContainer from "../ResponsiveGraphContainer";

export default function RetirementGraph({ selected }) {
  return (
    <GraphContainer size={0.7}>
      <HorizontalBar
        data={{
          labels: ["SSI", "Retirement income", "Social Security"],
          datasets: selected.map((item) => {
            return {
              label: item.name_with_com,
              data: [
                item["Retirement Percent"]["With Supplemental Security Income"],
                item["Retirement Percent"]["With retirement income"],
                item["Retirement Percent"]["With Social Security"],
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
            text: "Retirement Percent",
            fontSize: 25,
          },
          legend: {
            display: false,
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
                  labelString: "Types of retirement income source",
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
