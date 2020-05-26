import React from "react";
import { HorizontalBar } from "react-chartjs-2";
import GraphContainer from "../ResponsiveGraphContainer";

export default function HousingByRooms(props) {
  return (
    <GraphContainer size={0.7}>
      <HorizontalBar
        data={{
          labels: [
            "1 room",
            "2 rooms",
            "3 rooms",
            "4 rooms",
            "5 rooms",
            "6 rooms",
            "7 rooms",
            "8 rooms",
            "9 rooms+",
          ],
          datasets: props.edData.map((item) => {
            return {
              label: item.name_with_com,
              data: [
                item["Housing by rooms"]["1 room"],
                item["Housing by rooms"]["2 rooms"],
                item["Housing by rooms"]["3 rooms"],
                item["Housing by rooms"]["4 rooms"],
                item["Housing by rooms"]["5 rooms"],
                item["Housing by rooms"]["6 rooms"],
                item["Housing by rooms"]["7 rooms"],
                item["Housing by rooms"]["8 rooms"],
                item["Housing by rooms"]["9 rooms or more"],
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
            text: "Housing by rooms",
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
