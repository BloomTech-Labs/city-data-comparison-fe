import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import selected from "./mockSelected";
export default function HousePriceGraph() {
  const labels = Object.keys(
    selected[0]["Historical Property Value Data"]["Average Home Value"]
  );

  // This decides holds all the lines currently displayed on the graph
  // it could change when the user clicks a specific city on the legend for focus view
  const [lines, setLines] = useState([]);

  // This numberCommas Function generates commas for the y axis in this case dollar amounts that exceed 3 zeros.
  function numberCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }


  function formatLines(focus) {
    if (focus.length > 1) {
      return focus.map((item) => {
        const lineData = labels.map((label) => {
          return item["Historical Property Value Data"]["Average Home Value"][
            label
          ];
        });
        return {
          //just city, state = item.name_with_com,
          label: item.name_with_com,
          fill: false,
          //mapping through selected city then using useEffect hook to figure out which dataset to use, then setting that data with ternary operator.
          data: lineData,
          borderColor: item.color,
        };
      });
    } else {
      const lineData = labels.map((label) => {
        return focus["Historical Property Value Data"]["Average Home Value"][label];
      });
      return [
        {
          //just city, state = item.name_with_com,
          label: focus.name_with_com,
          fill: false,
          //mapping through selected city then using useEffect hook to figure out which dataset to use, then setting that data with ternary operator.
          data: lineData,
          borderColor: focus.color,
        },
      ];
    }
  }

  useEffect(() => {
    setLines(formatLines(selected));
  }, [selected]);
  

  const handleClickLegend = (e, legendItem) => {
    if (lines.length === 3) {
      setLines(formatLines(selected[legendItem.datasetIndex]));
    }
    else {
      setLines(formatLines(selected))
    }
  };

  const handleClickShowAll = () => {
    setLines(formatLines(selected));
  };

  // useEffect(() => {
  //     let data = selected[0];
  //     if (data["Historical Property Value Data"]["Average Home Value"]) {
  //         setLabels(Object.keys(data["Historical Property Value Data"]["Average Home Value"]))
  //     } else if (data["Historical Property Value Data"]["Four Bedroom Houses"]){
  //         setLabels(Object.keys(data["Historical Property Value Data"]["Four Bedroom Houses"]))
  //     } else if (data["Historical Property Value Data"]["Three Bedroom Houses"]){
  //       setLabels(Object.keys(data["Historical Property Value Data"]["Three Bedroom Houses"]))
  //     } else if (data["Historical Property Value Data"]["Two Bedroom Houses"]){
  //       setLabels(Object.keys(data["Historical Property Value Data"]["Two Bedroom Houses"]))
  //     } else {
  //       setLabels(["This data is currently unavailable."])
  //     }
  // }, [selected])

  return (
    <div className="charts">
      <div
        className="chart-container"
        style={{ position: "relative", width: `100%` }}
      >
        <Line
          data={{
            labels: labels,
            datasets: lines,
          }}
          options={{
            title: {
              display: false,
              text: "house price",
              fontSize: 25,
            },
            legend: {
              display: true,
              position: "top",
              onClick: handleClickLegend,
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
                  gridLines: {
                    display: false,
                  },
                  scaleLabel: {
                    display: true,
                    labelString: "Amount",
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                },
              ],
            },
          }}
        />
      </div>
      <button onClick={handleClickShowAll}>Show All Cities</button>
    </div>
  );
}
