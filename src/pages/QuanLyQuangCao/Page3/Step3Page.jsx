import { createBrowserHistory } from "history";
import React, { useReducer, useState } from "react";
import icon_error from "../../../assets/Icon-Facebook/error.png";
import icon_reload from "../../../assets/Icon-Facebook/reload.png";
import { createAccount } from "../feature/action";
import reducer, { initState } from "../feature/reducer";
import "./step3.scss";

Step3Page.propTypes = {};

function Step3Page(props) {
  const [state, dispatch] = useReducer(reducer, initState);
  const [isShowSelect, setIsShowSelect] = useState(false);

  const optionAccount = [
    { id: 0, title: "Doanh nghiệp ABC", avatar: 697106704932412 },
    { id: 1, title: "Doanh nghiệp ABC", avatar: 697106704932927 },
    { id: 2, title: "Doanh nghiệp ABC", avatar: 697106704936856 },
  ];

  const browserHistory = createBrowserHistory();

  const handleShowOption = (optionPages) => {
    if (isShowSelect) {
      return optionPages.map((option, index) => (
        <div
          key={index}
          className={
            "select-item " + (state.nick?.id === option.id ? "active" : "")
          }
        >
          <label>
            {option.title} <br></br>
            <span>
              ID: <span>{option.avatar}</span>
            </span>
          </label>
          <input
            type="checkbox"
            onChange={() => dispatch(createAccount({ nick: option }))}
            id={option.title}
            checked={state.nick?.id === option.id}
          />
        </div>
      ));
    } else {
      return (
        <div
          style={{ display: "flex", alignItems: "center", marginTop: 8 + "px" }}
        >
          <img width="16" height="16" src={icon_error} alt="" />
          <span style={{ marginLeft: 10 + "px" }}>
            Chưa có tài khoản quảng cáo nào được kết nối
          </span>
        </div>
      );
    }
  };

  const handleSubmit = () => {
    const data = {
      step: 1,
      stepCompleted: [...state.stepCompleted, 3],
    };
    dispatch(createAccount(data));
    browserHistory.push("/quan-ly-quang-cao/chien-dich-quang-cao");
  };

  return (
    <div className="page3-content">
      <h2>Tạo tài khoản quảng cáo</h2>
      <p>
        Doanh nghiệp của bạn cần tài khoản quảng cáo để kiểm soát chiến dịch và
        lập hoá đơn cho tài khoản quảng cáo này. Nhấn vào đường link bên dưới để
        hoàn tất thiết lập.
      </p>
      <p>
        <a href="/">
          https://business.facebook.com/settings/ad-accounts/?business_id=129318238128
        </a>
      </p>
      <form
        id="step3"
        onSubmit={() => handleSubmit(optionAccount[state.nick?.id])}
      >
        <div
          className="show-select-btn"
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: 20 + "px",
          }}
        >
          <label style={{ marginTop: 0 + "px" }}>
            Lựa chọn tài khoản quảng cáo vừa tạo
          </label>
          <img
            style={{ marginLeft: "auto", marginRight: 6 + "px" }}
            src={icon_reload}
            width="16"
            height="16"
            alt=""
          />
          <span onClick={() => setIsShowSelect(true)}>Làm mới</span>
        </div>
        {handleShowOption(optionAccount)}
        <label>Video hướng dẫn cách thiết lập</label>
        <iframe
          width="600"
          height="300"
          src="https://www.youtube.com/embed/kq_qkl3W31o"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <input
          type="submit"
          form="step3"
          value="Hoàn tất"
          className={"submit-btn " + (state.nick?.id === "" ? "disabled" : "")}
          disabled={state.nick?.id === "" ? "disabled" : ""}
        />
      </form>
    </div>
  );
}

export default Step3Page;
