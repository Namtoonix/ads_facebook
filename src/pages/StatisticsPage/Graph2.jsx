import Chart from "chart.js/auto";
import React, { useEffect, useRef, useState } from "react";

Graph2.propTypes = {};

function Graph2(props) {
  const [state, setState] = useState({
    labels: [0, 1, 2, 3, 4, 5, 6, 7],
    teamPerformanceChart: "",
    completedData: [0, 180, 60, 310, 290, 120, 300, 120],
    ongoingData: [0, 400, 200, 520, 590, 190, 598, 300],
  });

  const chartRef = useRef();

  useEffect(() => {
    let teamPerformanceChart = new Chart(chartRef.current, {
      type: "line",
      data: {
        labels: state.labels,
        datasets: [
          {
            label: "Lượt nhấp chuột",
            data: state.completedData,
            borderColor: ["rgba(249, 171, 0, 1)"],
            backgroundColor: "rgba(249, 171, 0, 1)",
            radius: 0,
            borderWidth: 1.5,
            fill: false,
          },
          {
            label: "Lượt hiển thị",
            data: state.ongoingData,
            borderColor: ["rgba(120, 178, 138, 1)"],
            backgroundColor: "rgba(120, 178, 138, 1)",
            radius: 0,
            borderWidth: 1.5,
            fill: false,
          },
        ],
      },
      options: {
        legend: {
          position: "bottom",
          align: "start",
          labels: {
            usePointStyle: true,
            fontSize: 15,
            padding: 30,
          },
        },
        tooltips: {
          callbacks: {
            title: function (tooltipItem, data) {
              return "Month: " + data["labels"][tooltipItem[0]["index"]];
            },
            label: function (tooltipItem, data) {
              return (
                " " +
                data["datasets"][tooltipItem.datasetIndex]["data"][
                  tooltipItem.index
                ] +
                "%"
              );
            },
          },
        },
        elements: {
          line: {
            tension: 0,
          },
        },
      },
    });
    setState({ ...state, teamPerformanceChart });
  }, []);

  return (
    <div className="graph2">
      <h3>Lượt hiên thị, lượt nhấp chuột</h3>
      <canvas style={{ width: 800, height: 300 }} ref={chartRef} />
    </div>
  );
}

export default Graph2;
