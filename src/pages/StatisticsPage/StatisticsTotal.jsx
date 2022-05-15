import React from "react";
import PropTypes from "prop-types";

StatisticsTotal.propTypes = {};

function StatisticsTotal(props) {
  return (
    <div className="statistics-total">
      <div>
        <p>Tổng lượt xem</p>
        <h3>124,000</h3>
      </div>
      <div>
        <p>Tổng lượt click</p>
        <h3>200,000</h3>
      </div>
      <div>
        <p>Tổng số lượng đơn hàng</p>
        <h3>201</h3>
      </div>
    </div>
  );
}

export default StatisticsTotal;
