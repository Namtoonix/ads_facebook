import Select from "react-select";
import React, { useEffect, useState } from "react";
import campaignApi from "../../api/campaignApi";
import lich from "../../assets/Icon-Facebook/lich.png";
import Graph1 from "./Craph1";
import Graph2 from "./Graph2";
import RankTable from "./RankTable";
import "./statistics.scss";
import StatisticsTotal from "./StatisticsTotal";

StatisticsPage.propTypes = {};

function StatisticsPage(props) {
  const [campaigns, setCampaigns] = useState([]);
  const [nameList, setNameList] = useState([]);
  console.log(nameList);
  const [campaignSelect, setCampaignSelect] = useState("");

  useEffect(() => {
    const fetchCampaignList = async () => {
      const params = {};
      const campaigns = await campaignApi.getAll(params);
      const nameList = [];
      campaigns.map((name, index) => {
        const data = {
          value: name?.name,
          label: name?.name,
        };
        nameList.push(data);
      });
      setNameList(nameList);
      setCampaigns(campaigns);
    };

    fetchCampaignList();
  }, []);

  const handleShowDate = (campaigns, campaignSelect) => {
    let result = "";
    campaigns.forEach((campaign) => {
      if (campaign.name === campaignSelect) {
        result = `${campaign?.dayStart} -> ${campaign?.dayEnd}`;
      }
    });
    return result;
  };
  const handleShowGragh = () => {
    if (!campaignSelect) return;
    return (
      <div>
        <Graph1 />
        <div style={{ display: "flex" }}>
          <Graph2 />
          <RankTable campaigns={campaigns} />
        </div>
      </div>
    );
  };

  return (
    <div className="statistics-page">
      <div className="top-content">
        <h3>Tổng quan</h3>
        <Select
          id="campaign-select"
          onChange={(e) => setCampaignSelect(e.value)}
          options={nameList}
        />
        <p style={{ backgroundImage: `url(${lich})` }}>
          {handleShowDate(campaigns, campaignSelect)}
        </p>
      </div>
      <StatisticsTotal />
      {handleShowGragh()}
    </div>
  );
}

export default StatisticsPage;
