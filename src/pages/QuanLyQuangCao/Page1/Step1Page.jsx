import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onCheckStep } from "../../../feature/checkStep/checkStepSlice";
import { accountData } from "../../../feature/accountSlice/accountSlice";
import "./step1.scss";

Step1Page.propTypes = {};

function Step1Page(props) {
  const account = useSelector((state) => state.account);
  const [name, setName] = useState(account.name ? account.name : "");
  const dispatch = useDispatch();

  const handleSubmit = (name) => {
    const actions1 = onCheckStep(2);
    const data = {
      ...account,
      name: name,
    };
    const actions2 = accountData(data);
    dispatch(actions1);
    dispatch(actions2);
  };

  return (
    <div className="page1-content">
      <h2>Tạo tài khoản Trình quản lý kinh doanh</h2>
      <p>
        Bạn cần kết nối Facebook của mình với tài khoản Trình quản lý kinh doanh
        để thiết lập quảng cáo. Điền thông tin bên dưới để tạo tài khoản.
      </p>
      <form id="step1" onSubmit={() => handleSubmit(name)}>
        <label htmlFor="namePage">Tên doanh nghiệp</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          name="namePage"
          id="namePage"
          value={name}
          className={name === "" ? "disabled" : ""}
        />
        <input
          type="submit"
          form="step1"
          value="Tiếp tục"
          className={"submit-btn " + (name === "" ? "disabled" : "")}
          disabled={name === "" ? "disabled" : ""}
        />
      </form>
    </div>
  );
}

export default Step1Page;
