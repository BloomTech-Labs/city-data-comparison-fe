import React from "react";
import { Bar } from "react-chartjs-2";
import GraphContainer from "../ResponsiveGraphContainer";

export default function AverageRent(props) {
  return (
    <GraphContainer size={0.7}>
      <Bar
        data={{
          labels: [
            "Less than $500",
            "$500 - $999",
            "$1,000 - $1,499",
            "$1,500 - $1,999",
            "$2,000 - $2,499",
            "$2,500 - $2,999",
            "$3,000 or more",
          ],
          datasets: props.edData.map((item) => {
            return {
              label: item.name_with_com,
              data: [
                item["Rent"]["Less than USD 500"],
                item["Rent"]["USD 500 - USD 999"],
                item["Rent"]["USD 1,000 - USD 1,499"],
                item["Rent"]["USD 1,500 - USD 1,999"],
                item["Rent"]["USD 2,000 - USD 2,499"],
                item["Rent"]["USD 2,500 - USD 2,999"],
                item["Rent"]["USD 3,000 or more"],
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
            text: "Rent",
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
                  labelString: "Average rent",
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
  );
}
