import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { campaignAds } from "../../../feature/campaignAds/campaignAdsSlice";
import { onCheckStep2 } from "../../../feature/checkStep/checkStep2Slice";
import { onStep2Completed } from "../../../feature/checkStep/step2CompletedSlice";
import { localData } from "./importLocal";
import "./step1Page2.scss";

Step1Page2.propTypes = {
  handleSetStepChild: PropTypes.func.isRequired,
};

function Step1Page2(props) {
  const { handleSetStepChild } = props;
  const [isFullFill, setIsFullFill] = useState(false);

  const campaignAdsData = useSelector((state) => state.campaignAds);
  const [campaign, setCampaign] = useState(() => {
    return {
      ...campaignAdsData,
      name: campaignAdsData.name || "",
      budget: campaignAdsData.budget || 0,
      dayStart: campaignAdsData.dayStart || 0,
      timeStart: campaignAdsData.timeStart || 0,
      dayEnd: campaignAdsData.dayEnd || 0,
      timeEnd: campaignAdsData.timeEnd || 0,
      sex: campaignAdsData.sex || "Nam",
      oldFrom: campaignAdsData.oldFrom || 15,
      oldTo: campaignAdsData.oldTo || 65,
      local: campaignAdsData.local || [],
    };
  });

  const stepCompleted = useSelector((state) => state.step2Completed);
  const dispatch = useDispatch();

  const options = [
    { value: "Nam", label: "Nam" },
    { value: "Nữ", label: "Nữ" },
  ];

  const handleSetBudget = (money) => {
    var nf = Intl.NumberFormat();
    setCampaign({
      ...campaign,
      budget: nf.format(money),
    });
  };

  const onFocusForm = (stepChild) => {
    handleSetStepChild(stepChild);
  };

  useEffect(() => {
    if (
      campaign.name !== "" &&
      campaign.budget &&
      campaign.dayStart &&
      campaign.dayEnd &&
      campaign?.local?.length > 0
    ) {
      setIsFullFill(true);
    }
  }, [campaign]);

  const handleSubmitForm = () => {
    handleSetStepChild(4);
    const newStepCompleted = [...stepCompleted, 1];
    dispatch(onCheckStep2(2));
    dispatch(campaignAds(campaign));
    dispatch(onStep2Completed(newStepCompleted));
  };

  return (
    <div className="page1-content">
      <h3>Chiến dịch quảng cáo</h3>
      <p>
        Để tiếp cận đổi tượng phù hợp, hãy bắt đầu bằng cách lựa chọn các chế độ
        cài đặt chính cho quảng cáo của bạn
      </p>
      <form onSubmit={() => handleSubmitForm()} id="form-campaign">
        <div className="form-item item1">
          <label htmlFor="name">Tên Quảng cáo</label>
          <input
            type="text"
            onChange={(e) => {
              setCampaign({
                ...campaign,
                name: e.target.value,
              });
            }}
            id="name"
            value={campaign.name}
            className={campaign.name === "" ? "disabled" : ""}
            onFocus={() => onFocusForm(0)}
          />
        </div>
        <div className="form-item item2">
          <label htmlFor="budget">Ngân sách và lịch chạy</label>
          <label htmlFor="budget">Ngân sách chạy quảng cáo</label>
          <input
            type="text"
            onChange={(e) =>
              setCampaign({
                ...campaign,
                budget: e.target.value,
              })
            }
            onBlur={() => handleSetBudget(campaign.budget)}
            id="budget"
            value={campaign.budget}
            onFocus={() => onFocusForm(1)}
          />
          <div className="input-group">
            <div className="input-items">
              <label htmlFor="day">Ngày bắt đầu</label>
              <div className="input-group">
                <input
                  type="date"
                  onChange={(e) => {
                    setCampaign({
                      ...campaign,
                      dayStart: e.target.value,
                    });
                  }}
                  id="day"
                  value={campaign.dayStart}
                  className={campaign.dayStart ? "disabled" : ""}
                  onFocus={() => onFocusForm(1)}
                />
                <input
                  type="time"
                  onChange={(e) =>
                    setCampaign({
                      ...campaign,
                      timeStart: e.target.value,
                    })
                  }
                  id="day"
                  value={campaign.timeStart}
                  onFocus={() => onFocusForm(1)}
                />
              </div>
            </div>
            <div className="input-items">
              <label htmlFor="day">Ngày kết thúc</label>
              <div className="input-group">
                <input
                  type="date"
                  onChange={(e) =>
                    setCampaign({
                      ...campaign,
                      dayEnd: e.target.value,
                    })
                  }
                  id="day"
                  value={campaign.dayEnd}
                  className={campaign.dayEnd ? "disabled" : ""}
                  onFocus={() => onFocusForm(1)}
                />
                <input
                  type="time"
                  onChange={(e) =>
                    setCampaign({
                      ...campaign,
                      timeEnd: e.target.value,
                    })
                  }
                  id="day"
                  value={campaign.timeEnd}
                  onFocus={() => onFocusForm(1)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="form-item item3">
          <label htmlFor="sex">Đối tượng và khu vực quảng cáo</label>
          <div className="input-group">
            <div className="input-items">
              <label htmlFor="sex">Giới tính</label>
              <Select
                id="sex"
                defaultValue={options[1]}
                onChange={(e) =>
                  setCampaign({
                    ...campaign,
                    sex: e.value,
                  })
                }
                options={options}
                onFocus={() => onFocusForm(2)}
              />
            </div>
            <div className="input-items">
              <label htmlFor="oldFrom">từ</label>
              <input
                type="number"
                onChange={(e) =>
                  setCampaign({
                    ...campaign,
                    oldFrom: e.target.value,
                  })
                }
                id="oldFrom"
                value={campaign.oldFrom}
                onFocus={() => onFocusForm(2)}
              />
            </div>
            <div className="input-items">
              <label htmlFor="oldTo">đến</label>
              <input
                type="number"
                onChange={(e) =>
                  setCampaign({
                    ...campaign,
                    oldTo: e.target.value,
                  })
                }
                id="oldTo"
                value={campaign.oldTo}
                onFocus={() => onFocusForm(2)}
              />
            </div>
          </div>
          <label htmlFor="local">Theo khu vực cố định</label>
          <Select
            isMulti
            name="local"
            id="local"
            options={localData}
            className="basic-multi-select"
            classNamePrefix="select"
            value={campaign.local}
            onChange={(e) =>
              setCampaign({
                ...campaign,
                local: [...e],
              })
            }
            onFocus={() => onFocusForm(2)}
          />
        </div>
        <input
          type="submit"
          form="form-campaign"
          value="Tiếp tục"
          className={"submit-btn " + (isFullFill ? "" : "disabled")}
          disabled={isFullFill ? "" : "disabled"}
        />
      </form>
    </div>
  );
}

export default Step1Page2;
