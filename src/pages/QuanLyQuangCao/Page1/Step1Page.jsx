import React, { useReducer } from "react";
import { createAccount } from "../feature/action";
import reducer, { initState } from "../feature/reducer";
import "./step1.scss";

Step1Page.propTypes = {};

function Step1Page(props) {
  const [state, dispatch] = useReducer(reducer, initState);

  const handleSubmit = () => {
    const data = {
      step: 2,
      stepCompleted: [...state.stepCompleted, 1],
    };
    dispatch(createAccount(data));
  };

  return (
    <div className="page1-content">
      <h2>Tạo tài khoản Trình quản lý kinh doanh</h2>
      <p>
        Bạn cần kết nối Facebook của mình với tài khoản Trình quản lý kinh doanh
        để thiết lập quảng cáo. Điền thông tin bên dưới để tạo tài khoản.
      </p>
      <form id="step1" onSubmit={() => handleSubmit(state)}>
        <label htmlFor="namePage">Tên doanh nghiệp</label>
        <input
          type="text"
          onChange={(e) => dispatch(createAccount({ name: e.target.value }))}
          name="namePage"
          id="namePage"
          value={state.name}
          className={state.name === "" ? "disabled" : ""}
        />
        <input
          type="submit"
          form="step1"
          value="Tiếp tục"
          className={"submit-btn " + (state.name === "" ? "disabled" : "")}
          disabled={state.name === "" ? "disabled" : ""}
        />
      </form>
    </div>
  );
}

export default Step1Page;
