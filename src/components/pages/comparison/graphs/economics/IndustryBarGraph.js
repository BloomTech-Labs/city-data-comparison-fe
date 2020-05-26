import React from "react";
import { HorizontalBar } from "react-chartjs-2";
import GraphContainer from "../ResponsiveGraphContainer";

export default function JobIndustryBreakdown(props) {
  return (
    <GraphContainer size={1.4}>
      <HorizontalBar
        data={{
          labels: [
            "Agriculture/Mining",
            "Entertainment",
            "Construction",
            "Education/Health Care",
            "Finance/Real Estate",
            "Information",
            "Manufacturing",
            "Non-Governmental Services",
            "Science",
            "Public Administration",
            "Retail Trade",
            "Transportation",
            "Wholesale Trade",
          ],
          datasets: props.selected.map((item) => {
            return {
              label: item.name_with_com,
              data: [
                item["Industry"][
                  "Agriculture forestry fishing and hunting and mining"
                ],
                item["Industry"][
                  "Arts entertainment and recreation and accommodation and food services"
                ],
                item["Industry"]["Construction"],
                item["Industry"][
                  "Educational services and health care and social assistance"
                ],
                item["Industry"][
                  "Finance and insurance and real estate and rental and leasing"
                ],
                item["Industry"]["Information"],
                item["Industry"]["Manufacturing"],
                item["Industry"]["Other services except public administration"],
                item["Industry"][
                  "Professional scientific and management and administrative and waste management services"
                ],
                item["Industry"]["Public administration"],
                item["Industry"]["Retail trade"],
                item["Industry"][
                  "Transportation and warehousing and utilities"
                ],
                item["Industry"]["Wholesale trade"],
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
            text: "Industry",
            fontSize: 25,
          },
          legend: {
            display: false,
            position: "top",
          },
          scales: {
            xAxes: [
              {
                labelString: "Percent",
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
