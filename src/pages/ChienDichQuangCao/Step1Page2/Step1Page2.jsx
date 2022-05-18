import PropTypes from "prop-types";
import React, { useEffect, useReducer, useState } from "react";
import Select from "react-select";
import { createCampaign } from "../feature/action";
import reducer, { initState } from "../feature/reducer";
import { localData } from "./importLocal";
import "./step1Page2.scss";

Step1Page2.propTypes = {
  handleSetStepChild: PropTypes.func.isRequired,
};

function Step1Page2(props) {
  const { handleSetStepChild } = props;
  const [isFullFill, setIsFullFill] = useState(false);
  const [state, dispatch] = useReducer(reducer, initState);

  const options = [
    { value: "Nam", label: "Nam" },
    { value: "Nữ", label: "Nữ" },
  ];

  const handleSetBudget = (money) => {
    var nf = Intl.NumberFormat();
    dispatch(createCampaign({
      budget: nf.format(money),
    }))
  };

  const onFocusForm = (stepChild) => {
    handleSetStepChild(stepChild);
  };

  useEffect(() => {
    if (
      state.name !== "" &&
      state.budget &&
      state.dayStart &&
      state.dayEnd &&
      state?.local?.length > 0
    ) {
      setIsFullFill(true);
    }
  }, [state]);

  const handleSubmitForm = () => {
    dispatch(createCampaign({ step: 2 }));
    dispatch(createCampaign({ stepCompleted: [...state.stepCompleted, 1] }));
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
              dispatch(
                createCampaign({
                  name: e.target.value,
                })
              );
            }}
            id="name"
            value={state.name}
            className={state.name === "" ? "disabled" : ""}
            onFocus={() => onFocusForm(0)}
          />
        </div>
        <div className="form-item item2">
          <label htmlFor="budget">Ngân sách và lịch chạy</label>
          <label htmlFor="budget">Ngân sách chạy quảng cáo</label>
          <input
            type="text"
            onChange={(e) =>
              dispatch(
                createCampaign({
                  budget: e.target.value,
                })
              )
            }
            onBlur={() => handleSetBudget(state.budget)}
            id="budget"
            value={state.budget}
            onFocus={() => onFocusForm(1)}
          />
          <div className="input-group">
            <div className="input-items">
              <label htmlFor="day">Ngày bắt đầu</label>
              <div className="input-group">
                <input
                  type="date"
                  onChange={(e) => {
                    dispatch(
                      createCampaign({
                        dayStart: e.target.value,
                      })
                    );
                  }}
                  id="day"
                  value={state.dayStart}
                  className={state.dayStart ? "disabled" : ""}
                  onFocus={() => onFocusForm(1)}
                />
                <input
                  type="time"
                  onChange={(e) =>
                    dispatch(
                      createCampaign({
                        timeStart: e.target.value,
                      })
                    )
                  }
                  id="day"
                  value={state.timeStart}
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
                    dispatch(
                      createCampaign({
                        dayEnd: e.target.value,
                      })
                    )
                  }
                  id="day"
                  value={state.dayEnd}
                  className={state.dayEnd ? "disabled" : ""}
                  onFocus={() => onFocusForm(1)}
                />
                <input
                  type="time"
                  onChange={(e) =>
                    dispatch(
                      createCampaign({
                        timeEnd: e.target.value,
                      })
                    )
                  }
                  id="day"
                  value={state.timeEnd}
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
                defaultValue={options[0]}
                onChange={(e) =>
                  dispatch(
                    createCampaign({
                      sex: e.value,
                    })
                  )
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
                  dispatch(
                    createCampaign({
                      oldFrom: e.target.value,
                    })
                  )
                }
                id="oldFrom"
                value={state.oldFrom}
                onFocus={() => onFocusForm(2)}
              />
            </div>
            <div className="input-items">
              <label htmlFor="oldTo">đến</label>
              <input
                type="number"
                onChange={(e) =>
                  dispatch(
                    createCampaign({
                      oldTo: e.target.value,
                    })
                  )
                }
                id="oldTo"
                value={state.oldTo}
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
            value={state.local}
            onChange={(e) =>
              dispatch(
                createCampaign({
                  local: [...e],
                })
              )
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
