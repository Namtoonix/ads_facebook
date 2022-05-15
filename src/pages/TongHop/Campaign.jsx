import { Switch } from "antd";
import PropTypes from "prop-types";
import React from "react";
import Status from "./Status";

Campaign.propTypes = {
  currentItems: PropTypes.array.isRequired,
};

function Campaign(props) {
  const { currentItems } = props;

  const handleShowLocal = (localList) => {
    if (!localList) return;
    return localList.map((local, index) => (
      <button key={index}>{local.label}</button>
    ));
  };

  return currentItems.map((item, index) => (
    <ul key={index} className="tr-element">
      <li>
        <Switch defaultChecked />
      </li>
      <li>{item.name}</li>
      <li className="local-item">
        {item.sex}; {item.oldFrom}-{item.oldTo}+ <br></br>
        {handleShowLocal(item.local)}
      </li>
      <li>
        {item.dayStart.split("-").reverse().join("/")} -{" "}
        {item.dayEnd.split("-").reverse().join("/")}
      </li>
      <li>{item.budget} đ</li>
      <Status start={item.dayStart} end={item.dayEnd} />
    </ul>
  ));
}

export default Campaign;
