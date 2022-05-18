import Chart from "chart.js/auto";
import React, { useEffect, useRef, useState } from "react";
import question from "../../assets/Icon-Facebook/question.png";

function Graph1(props) {
  const chartRef = useRef();

  const [state, setState] = useState({
    labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    teamPerformanceChart: "",
    completedData: [0, 180, 60, 310, 290, 120, 300, 120, 230, 20, 170, 20, 30],
    ongoingData: [
      0, 400, 200, 520, 590, 190, 598, 300, 460, 130, 440, 100, 170,
    ],
  });

  useEffect(() => {
    let teamPerformanceChart = new Chart(chartRef.current, {
      type: "line",
      data: {
        labels: state.labels,
        datasets: [
          {
            label: "Tổng chi phí",
            data: state.completedData,
            borderColor: ["rgba(242, 122, 10, 1)"],
            backgroundColor: "rgba(242, 122, 10, 1)",
            radius: 5,
            borderWidth: 1.5,
            fill: false,
          },
          {
            label: "Tổng giá trị đơn hàng",
            data: state.ongoingData,
            borderColor: ["rgba(49, 116, 221, 1)"],
            backgroundColor: "rgba(49, 116, 221, 1)",
            radius: 5,
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
    <div className="graph1">
      <div className="statistics-total">
        <div>
          <div className="item">
            <p>Tổng lượt xem</p>
            <span className="dot" style={{ background: "#3174DD" }}></span>
          </div>
          <h3>124,000</h3>
        </div>
        <div>
          <div className="item">
            <p>Tổng lượt click</p>
            <span className="dot" style={{ background: "#F27A0A" }}></span>
          </div>
          <h3>200,000</h3>
        </div>
        <div>
          <div>
            ROAS <img src={question} alt="" />
          </div>
          <h3>1.20x</h3>
        </div>
      </div>
      <canvas style={{ width: 800, height: 300 }} ref={chartRef} />
    </div>
  );
}

export default Graph1;
