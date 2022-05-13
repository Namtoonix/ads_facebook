import React, { useState } from "react";
import image from "../../assets/Icon-Facebook/image1.png";
import "./quanly.scss";

QuanLyQuangCao.propTypes = {};

function QuanLyQuangCao(props) {
  const [isCheck, setIsCheck] = useState(false);

  const handleNextPage = (isCheck) => {
    if (!isCheck) return;
    window.location.href = "/quan-ly-quang-cao/login-fb";
  };

  return (
    <div className="intro">
      <img src={image} alt="" />
      <div className="form-confirm">
        <h2>
          Thu hút khách hàng tiềm năng tương tác qua Messenger bằng quảng cáo
          Facebook
        </h2>
        <input
          type="checkbox"
          onChange={() => setIsCheck(!isCheck)}
          name="is-agree"
          id="is-agree"
          defaultChecked={isCheck}
        />
        <label htmlFor="is-agree">
          Tôi đồng ý với điều khoản sử dụng của Haravan,{" "}
          <a href="/">Meta, Facebook Ads</a>
        </label>
        <button onClick={() => handleNextPage(isCheck)}>Bắt đầu ngay</button>
      </div>
    </div>
  );
}

export default QuanLyQuangCao;
