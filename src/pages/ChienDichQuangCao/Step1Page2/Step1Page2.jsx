import React, { useState } from "react";
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
  const [name, setName] = useState(() =>
    campaignAdsData.name ? campaignAdsData.name : ""
  );
  const [budget, setBudget] = useState(() =>
    campaignAdsData.budget ? campaignAdsData.budget : 0
  );
  const [dayStart, setDayStart] = useState(() =>
    campaignAdsData.dayStart ? campaignAdsData.dayStart : 0
  );
  const [timeStart, setTimeStart] = useState(() =>
    campaignAdsData.timeStart ? campaignAdsData.timeStart : 0
  );
  const [dayEnd, setDayEnd] = useState(() =>
    campaignAdsData.dayEnd ? campaignAdsData.dayEnd : 0
  );
  const [timeEnd, setTimeEnd] = useState(() =>
    campaignAdsData.timeEnd ? campaignAdsData.timeEnd : 0
  );
  const [sex, setSex] = useState(() =>
    campaignAdsData.sex ? campaignAdsData.sex : "Nam"
  );
  const [oldFrom, setOldFrom] = useState(() =>
    campaignAdsData.oldFrom ? campaignAdsData.oldFrom : 15
  );
  const [oldTo, setOldTo] = useState(() =>
    campaignAdsData.oldTo ? campaignAdsData.oldTo : 80
  );
  const [local, setLocal] = useState(() =>
    campaignAdsData.local ? campaignAdsData.local : []
  );

  const stepCompleted = useSelector((state) => state.step2Completed);
  const dispatch = useDispatch();

  const options = [
    { value: "Nam", label: "Nam" },
    { value: "Nữ", label: "Nữ" },
  ];

  const handleSetBudget = (money) => {
    var nf = Intl.NumberFormat();
    setBudget(nf.format(money));
  };

  const onFocusForm = (stepChild) => {
    handleSetStepChild(stepChild);
  };

  const handleCheckForm = () => {
    if (
      name !== "" &&
      dayStart &&
      timeStart &&
      dayEnd &&
      timeEnd &&
      local.length > 0
    ) {
      setIsFullFill(true);
    }
  };

  const handleSubmitForm = () => {
    const data = {
      name,
      budget,
      dayStart,
      dayEnd,
      sex,
      oldFrom,
      oldTo,
      local,
    };
    handleSetStepChild(4);
    const actions1 = onCheckStep2(2);
    const newStepCompleted = [...stepCompleted, 1];
    const actions2 = campaignAds(data);
    const actions3 = onStep2Completed(newStepCompleted);
    dispatch(actions1);
    dispatch(actions2);
    dispatch(actions3);
  };

  return (
    <div className="page1-content">
      <h3>Chiến dịch quảng cáo</h3>
      <p>
        Để tiếp cận đổi tượng phù hợp, hãy bắt đầu bằng cách lựa chọn các chế độ
        cài đặt chính cho quảng cáo của bạn
      </p>
      <form
        onSubmit={() => handleSubmitForm()}
        onChange={() => handleCheckForm()}
        id="form-campaign"
      >
        <div className="form-item item1">
          <label htmlFor="name">Tên Quảng cáo</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            id="name"
            value={name}
            className={name === "" ? "disabled" : ""}
            onFocus={() => onFocusForm(0)}
          />
        </div>
        <div className="form-item item2">
          <label htmlFor="budget">Ngân sách và lịch chạy</label>
          <label htmlFor="budget">Ngân sách chạy quảng cáo</label>
          <input
            type="text"
            onChange={(e) => setBudget(e.target.value)}
            onBlur={() => handleSetBudget(budget)}
            id="budget"
            value={budget}
            className={budget > 0 ? "disabled" : ""}
            onFocus={() => onFocusForm(1)}
          />
          <div className="input-group">
            <div className="input-items">
              <label htmlFor="day">Ngày bắt đầu</label>
              <div className="input-group">
                <input
                  type="date"
                  onChange={(e) => setDayStart(e.target.value)}
                  id="day"
                  value={dayStart}
                  className={dayStart ? "disabled" : ""}
                  onFocus={() => onFocusForm(1)}
                />
                <input
                  type="time"
                  onChange={(e) => setTimeStart(e.target.value)}
                  id="day"
                  value={timeStart}
                  onFocus={() => onFocusForm(1)}
                />
              </div>
            </div>
            <div className="input-items">
              <label htmlFor="day">Ngày kết thúc</label>
              <div className="input-group">
                <input
                  type="date"
                  onChange={(e) => setDayEnd(e.target.value)}
                  id="day"
                  value={dayEnd}
                  className={dayEnd ? "disabled" : ""}
                  onFocus={() => onFocusForm(1)}
                />
                <input
                  type="time"
                  onChange={(e) => setTimeEnd(e.target.value)}
                  id="day"
                  value={timeEnd}
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
                onChange={(e) => setSex(e.value)}
                options={options}
                onFocus={() => onFocusForm(2)}
              />
            </div>
            <div className="input-items">
              <label htmlFor="oldFrom">từ</label>
              <input
                type="text"
                onChange={(e) => setOldFrom(e.target.value)}
                id="oldFrom"
                value={oldFrom}
                onFocus={() => onFocusForm(2)}
              />
            </div>
            <div className="input-items">
              <label htmlFor="oldTo">đến</label>
              <input
                type="text"
                onChange={(e) => setOldTo(e.target.value)}
                id="oldTo"
                value={oldTo}
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
            value={local}
            onChange={(e) => setLocal([...e])}
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
