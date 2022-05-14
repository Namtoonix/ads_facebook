import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { accountData } from "../../../feature/accountSlice/accountSlice";
import { onCheckStep } from "../../../feature/checkStep/checkStepSlice";
import { arrAvatar } from "./imporAvata";
import icon_error from "../../../assets/Icon-Facebook/error.png";
import icon_reload from "../../../assets/Icon-Facebook/reload.png";
import "./step2.scss";
import { onStepCompleted } from "../../../feature/checkStep/stepCompletedSlice";

Step2Page.propTypes = {};

function Step2Page(props) {
  const account = useSelector((state) => state.account);
  const stepCompleted = useSelector((state) => state.stepCompleted);
  const [select, setSelect] = useState(() => {
    if (account.page) {
      if (account.page.id !== undefined) {
        return account.page.id;
      } else {
        return "";
      }
    } else {
      return "";
    }
  });
  const [isShowSelect, setIsShowSelect] = useState(false);
  const dispatch = useDispatch();

  const optionPages = [
    { id: 0, title: "Neoworld account", avatar: "av1" },
    { id: 1, title: "Tiệm giầy sneaker account", avatar: "av2" },
    { id: 2, title: "Tiệm tạp hoá cô Thảo acoount", avatar: "av3" },
  ];

  const handleShowOption = (optionPages) => {
    if (isShowSelect) {
      return optionPages.map((option, index) => (
        <div key={index} className={"select-item " + (select === option.id ? "active" : "")}>
          <img src={arrAvatar[option.avatar]} alt="" />
          <label>{option.title}</label>
          <input
            type="checkbox"
            onChange={() => setSelect(option.id)}
            id={option.title}
            checked={select === option.id}
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

  const handleSubmit = (page) => {
    const actions1 = onCheckStep(3);
    const data = {
      ...account,
      page: page,
    };
    const newStepCompleted = [
      ...stepCompleted, 2
    ]
    const actions2 = accountData(data);
    const actions3 = onStepCompleted(newStepCompleted);
    dispatch(actions1);
    dispatch(actions2);
    dispatch(actions3);
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
      <form id="step2" onSubmit={() => handleSubmit(optionPages[select])}>
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
          className={"submit-btn " + (select === "" ? "disabled" : "")}
          disabled={select === "" ? "disabled" : ""}
        />
      </form>
    </div>
  );
}

export default Step2Page;
