import React from "react";
import PropTypes from "prop-types";

RankTable.propTypes = {
  campaigns: PropTypes.array.isRequired,
};

function RankTable(props) {
  const { campaigns } = props;

  const handleShowTopRank = () => {
    if (!campaigns) return;
    return campaigns.map((campaign, index) => (
      <li key={index}>
        <button>{index + 1}</button>
        <p>
          {campaign.name} <br></br>
          <span>ROAS: 3,3</span>
        </p>
      </li>
    ));
  };

  return (
    <div className="rank-table">
      <h3>Top quảng cáo hiệu quả</h3>
      <ul className="rank">{handleShowTopRank()}</ul>
    </div>
  );
}

export default RankTable;
