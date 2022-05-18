import React, { useReducer, useState } from "react";
import icon_error from "../../../assets/Icon-Facebook/error.png";
import icon_reload from "../../../assets/Icon-Facebook/reload.png";
import { createAccount } from "../feature/action";
import reducer, { initState } from "../feature/reducer";
import { arrAvatar } from "./imporAvata";
import "./step2.scss";

Step2Page.propTypes = {};

function Step2Page(props) {
  const [state, dispatch] = useReducer(reducer, initState);
  const [isShowSelect, setIsShowSelect] = useState(false);

  const optionPages = [
    { id: 0, title: "Neoworld account", avatar: "av1" },
    { id: 1, title: "Tiệm giầy sneaker account", avatar: "av2" },
    { id: 2, title: "Tiệm tạp hoá cô Thảo acoount", avatar: "av3" },
  ];

  const handleShowOption = (optionPages) => {
    if (isShowSelect) {
      return optionPages.map((option, index) => (
        <div
          key={index}
          className={
            "select-item " + (state.page?.id === option.id ? "active" : "")
          }
        >
          <img src={arrAvatar[option.avatar]} alt="" />
          <label>{option.title}</label>
          <input
            type="checkbox"
            onChange={() => dispatch(createAccount({ page: option }))}
            id={option.title}
            checked={state.page?.id === option.id}
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
      step: 3,
      stepCompleted: [...state.stepCompleted, 2],
    };
    dispatch(createAccount(data));
  };

  return (
    <div className="page2-content">
      <h2>Kết nối Fanpage</h2>
      <p>
        Trang Fanpage bán hàng sẽ là nơi hiển thị quảng cáo của bạn đến với mọi
        người, Fanpage cần kết nối với Trình quản lý kinh doanh để quản lý quảng
        cáo của bạn. Nhấn vào đường link bên dưới để hoàn tất thiết lập.
      </p>
      <p>
        <a href="/">
          https://business.facebook.com/settings/ad-accounts/?business_id=129318238128
        </a>
      </p>
      <form id="step2" onSubmit={() => handleSubmit()}>
        <div
          className="show-select-btn"
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: 20 + "px",
          }}
        >
          <label style={{ marginTop: 0 + "px" }}>
            Lựa chọn trang Fanpage của bạn
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
        {handleShowOption(optionPages)}
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
          form="step2"
          value="Tiếp tục"
          className={"submit-btn " + (state.page?.id === "" ? "disabled" : "")}
          disabled={state.page?.id === "" ? "disabled" : ""}
        />
      </form>
    </div>
  );
}

export default Step2Page;
