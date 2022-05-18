import React, { useEffect, useState } from "react";
import campaignApi from "../../api/campaignApi";
import filter from "../../assets/Icon-Facebook/filter.png";
import icon6_w from "../../assets/Icon-Facebook/icon6_w.png";
import icon_search from "../../assets/Icon-Facebook/icon_search.png";
import Pagination from "./Pagination";
import "./tonghop.scss";

TongHop.propTypes = {};

function TongHop(props) {
  const [searchKey, setSearchKey] = useState("");

  const [campaigns, setCampaigns] = useState([]);
  useEffect(() => {
    const fetchCampaignList = async () => {
      const params = {};
      const campaigns = await campaignApi.getAll(params);
      setCampaigns(campaigns);
    };

    fetchCampaignList();
  }, []);

  const handleCreateNewCampaign = () => {
    window.location.href = "/quan-ly-quang-cao/chien-dich-quang-cao";
  }

  return (
    <div className="synthetic-page">
      <div className="top-content">
        <button>
          <img src={filter} alt="" />
          Thêm điệu kiện lọc
        </button>
        <input
          style={{ backgroundImage: `url(${icon_search})` }}
          type="text"
          name="search"
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
          placeholder="Tìm kiếm quảng cáo"
        />
        <button onClick={() => handleCreateNewCampaign()}>
          <img src={icon6_w} alt="" />
          Thêm quảng cáo
        </button>
      </div>
      <div className="main-content">
        <ul className="tr-element">
          <li>Tắt/ Bật</li>
          <li>Quảng cáo</li>
          <li>Đối tượng quảng cáo</li>
          <li>Lịch chạy</li>
          <li>Ngân sách </li>
          <li>Trạng thái</li>
        </ul>
        <Pagination campaigns={campaigns} />
      </div>
    </div>
  );
}

export default TongHop;
